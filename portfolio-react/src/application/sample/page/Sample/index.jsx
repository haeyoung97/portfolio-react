/* eslint-disable */
import React from 'react';

// Styles
import styles from "./index.module.css";

// Components
import SampleItem from "../../component/SampleItem";

import useSample from "../../module/hooks/useSample";

const index = (props) => {
    const {state, fetchSampleList, fetchSampleDetail} = useSample(props);
    const {data: sample, loading: sample_loading, count: sample_count} = state.sample;

    return (
        <div className={styles.sampleContainer}>
            {sample_loading ? <div>로딩중..</div> : null}
            <div className={styles.sampleHeader}>
                <div className={styles.sampleInfo}>
                    글 <span>{sample_count}</span>
                </div>
                <button onClick={fetchSampleList}>새로고침</button>
            </div>
            {sample_count && sample.map((item, index) => {
                return (
                    <SampleItem
                        state={state}
                        item={item}
                        fetchSampleDetail={fetchSampleDetail}
                    />
                )
            })}
        </div>
    )
}

export default index;
