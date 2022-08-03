// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null,
    count: 0
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
    loading: false,
    error: null,
    ...data
});

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
    loading: false,
    data: null,
    error: error,
    count: 0
});

// 세가지 액션을 처리하는 리듀서를 만들어줍니다
// type 은 액션 타입, key 는 리듀서서 사용할 필드 이름입니다 (예: user, users)
export function createAsyncHandler(type, key, dataSet=(data)=>{return data}, successCallback=(data)=>{}, failureCallback=(error)=>{}) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    // 함수를 새로 만들어서
    function handler(state, action) {
        action.data = dataSet(action.data);
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                successCallback(action.data);
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                failureCallback(action.error);
                return {
                    ...state,
                    [key]: error(action.error)
                };
            default:
                return state;
        }
    }

    // 반환합니다
    return handler;
}
