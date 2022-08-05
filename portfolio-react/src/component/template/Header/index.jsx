import React from "react";

// Styles
import styles from './index.module.css';

const index = (props) => {
    const {history} = props;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.menuNav} onClick={() => history.push('/')}>
                    <h1>Hello! I'm Haeyoung :)</h1>
                </div>
                <div className={styles.signBtns}>
                    <div className={styles.mypageBtn} onClick={() => window.open('https://www.notion.so/Frontend-Developer-10f1cc57003843ebac31e18fe25cfd89')}>Notion</div>
                    <div className={styles.signupBtn} onClick={() => window.open('https://github.com/haeyoung97')}>Github</div>
                </div>
            </div>
        </div>
    )
};

export default index;
