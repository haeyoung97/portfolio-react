import React, {createContext, useReducer, useContext} from 'react';
import * as api from '../../../common/context/api'
import {
    createAsyncDispatcher
} from '../../../common/context/actionHandler';
import {
    createAsyncHandler
} from '../../../common/context/reducerHandler';

const loc = "application/sample/module/CommentContext";

const StateContext = createContext(null);
const DispatchContext = createContext(null);

const initialState = {
    // INIT을 통해 주입받는 데이터
    mber: {},

    // application 데이터
    sample: {
        loading: false,
        data: null,
        count: 0,
        error: null
    },
    sample_detail: {
        loading: false,
        data: null,
        error: null
    },
};


// ACTION 정의
export const getSampleList = (dispatch, state, params) => {
    if (state.sample.loading) return; // 이미 불러오는 중이면 스킵
    SAMPLE_USER_LIST(dispatch, params);
}
export const getSampleDetail = (dispatch, state, params) => {
    if (state.sample_detail.loading) return; // 이미 불러오는 중이면 스킵
    SAMPLE_USER_DETAIL(dispatch, params);
}

// DISPATCH 정의
const SAMPLE_USER_LIST = createAsyncDispatcher('SAMPLE_USER_LIST', 'eSAMPLE_USER_LIST', api.get);
const SAMPLE_USER_DETAIL = createAsyncDispatcher('SAMPLE_USER_DETAIL', 'eSAMPLE_USER_DETAIL', api.get);

// REDUCER 정의
function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign(state, action.data)
        case 'SAMPLE_USER_LIST':
        case 'SAMPLE_USER_LIST_SUCCESS':
        case 'SAMPLE_USER_LIST_ERROR':
            return createAsyncHandler('SAMPLE_USER_LIST', 'sample', (data) => {
                if (data && data.list)
                    return {data: data.list, count: data.count}
                return null
            })(state, action);
        case 'SAMPLE_USER_DETAIL':
        case 'SAMPLE_USER_DETAIL_SUCCESS':
        case 'SAMPLE_USER_DETAIL_ERROR':
            return createAsyncHandler('SAMPLE_USER_DETAIL', 'sample_detail', (data) => {
                if (data)
                    return {data}
                return null
            })(state, action);
        default:
            throw new Error(`${loc} :: Unhanded action type: ${action.type}`);
    }
}


// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useContextState() {
    const state = useContext(StateContext);
    if (!state) {
        throw new Error(`${loc} :: Cannot find provider`);
    }
    return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useContextDispatch() {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) {
        throw new Error(`${loc} :: Cannot find provider`);
    }
    return dispatch;
}

/////////////////////////////
/////////// FIXED ///////////
/////////////////////////////
// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}
