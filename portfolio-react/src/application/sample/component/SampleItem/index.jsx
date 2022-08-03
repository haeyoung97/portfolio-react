/* eslint-disable */
import React from "react";

// Styles
import styles from "./index.module.css";

// Hook
import useSample from "../../module/hooks/useSample";

const index = (props) => {
    const {state, value, fetchAction} = useSample(props);

    return (
        <div className={styles.sampleBox}>
            data 렌더링
        </div>
    )
};

export default index;
