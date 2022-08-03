import React, {useEffect} from 'react';
import {useContextState, useContextDispatch, callAPI} from '../../module/sampleContext';

// Styles
import styles from "./index.module.css";

// Components
import SampleItem from "../../component/SampleItem";

function Index(props) {
    const state = useContextState();
    const dispatch = useContextDispatch()

    useEffect(() => {
        // Props 중 필수값
        dispatch({type: "INIT", data: props})
        fetchAction()
    }, []);

    const fetchAction = () => callAPI(dispatch, state, {});

    return (
        <div className={styles.container}>
            <SampleItem {...state.action} />
        </div>
    );
}

export default Index;
