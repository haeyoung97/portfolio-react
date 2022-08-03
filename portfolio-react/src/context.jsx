import React, { createContext, useReducer, useContext } from 'react';
import * as api from './common/context/api'
import {
    createAsyncDispatcher
} from './common/context/actionHandler';
import {
    createAsyncHandler
} from './common/context/reducerHandler';

const loc = "application/comment/module/CommentContext";

const StateContext = createContext(null);
const DispatchContext = createContext(null);

const initialState = {
    // INIT을 통해 주입받는 데이터

    // application 데이터
    sample: {
        loading: false,
        data: null,
        count: 0,
        error: null
    },
};

// ACTION 정의
export const getAction = (dispatch, state, params) => {
    if (state.cmnts.loading) return; // 이미 불러오는 중이면 스킵
    SAMPLE_ACTION_API(dispatch, params);
}
// DISPATCH 정의
const SAMPLE_ACTION_API = createAsyncDispatcher('SAMPLE_ACTION_API', 'eSAMPLE_ACTION_API', api.get);

// REDUCER 정의
function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign(state, action.data)
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
export function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}
