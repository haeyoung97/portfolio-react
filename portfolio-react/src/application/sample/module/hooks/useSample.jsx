/* eslint-disable */
import { useState } from "react";
import {
    callAPI,
    useContextDispatch,
    useContextState,
} from "../sampleContext";

export default function (props) {
    const state = useContextState();
    const dispatch = useContextDispatch();

    const [value, setValue] = useState("")


    const fetchAction = () => callAPI(dispatch, state,{});

    return {state, value, fetchAction};
}
