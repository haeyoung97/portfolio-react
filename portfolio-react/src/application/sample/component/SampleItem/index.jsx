/* eslint-disable */
import React, {useEffect, useState} from "react";

// Styles
import styles from "./index.module.css";

const index = (props) => {
    const {state, item, fetchSampleDetail} = props;
    const {data: detail, loading: sample_loading, error: sample_error, count: sample_count} = state.sample_detail;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetchSampleDetail(item.sample_no)
    }, [])

    return (
        <>
            <div
                className={styles.sampleRow}
                key={`index_${item.sample_no}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.rowTitle}>{item.sample_sj}</div>
                <div className={styles.rowDesc}>{item.reg_dt}</div>
            </div>
            {isOpen && (
                <div
                    className={styles.sampleContent}
                    key={`index_${item.sample_no}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {sample_loading ? <div>로딩중..</div> : null}
                    {detail?.sample_cont && (
                        <div className={styles.content}>
                            <span>답변 :)</span><br/>
                            {item.sample_cont}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default index;
