/* eslint-disable */
import {useEffect} from "react";
import {
    getSampleDetail,
    getSampleList,
    useContextDispatch,
    useContextState,
} from "../sampleContext";

export default function (props) {
    const state = useContextState();
    const dispatch = useContextDispatch();

    useEffect(() => {
        // Props 중 필수값
        dispatch({type: "INIT", data: props})
        fetchSampleList()
    }, []);

    const fetchSampleList = () => {
        getSampleList(dispatch, state);
    };

    const fetchSampleDetail = (sample_no) => getSampleDetail(dispatch, state, {sample_no});

    return {state, fetchSampleList, fetchSampleDetail};
}
