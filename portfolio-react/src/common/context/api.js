/* API 호출 방식 : 상황에 따라 필요한 함수 정의 (get, post, etc.) */
export const get = (path, parameters = {}) => {
    if (path === 'eSAMPLE_USER_LIST') {
        return {
            list: sample,
            count: sample.length
        };
    }
    if (path === 'eSAMPLE_USER_DETAIL') {
        const result = sample.filter((el) => el.sample_no === parameters.sample_no);
        if (result.length > 0)
            return result[0];
    }
};

const sample = [
    {
        sample_no: "SAMPLE_1",
        sample_sj: "저는 무엇을 하는 사람일까요?",
        sample_cont: "궁금하시다면, 저의 Notion 을 방문해보세요 :)",
        reg_dt: "2022-08-05"
    },
    {
        sample_no: "SAMPLE_2",
        sample_sj: "저에 대해 궁금점이 생기셨나요?",
        sample_cont: "그렇다면, 저에게 연락해보세요 :)\nE-mail : pparkhae00@gmail.com",
        reg_dt: "2022-08-05"
    },
    {
        sample_no: "SAMPLE_3",
        sample_sj: "이 포트폴리오는 어떻게 만들어졌나요?",
        sample_cont: "그간의 개발 기간동안 배우고 익힌 경험들로 이루어져 있습니다.\n저의 성장을 기대해주세요 :)",
        reg_dt: "2022-08-05"
    },
]


