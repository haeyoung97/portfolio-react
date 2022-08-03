import React from "react";

// Styles
import styles from './index.module.css';

const index = (props) => {
    const {history} = props;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={() => history.push("/module")}>
                    <h3>My React Portfolio</h3>
                </button>
            </div>
        </div>
    )
};

export default index;
