import React from "react";

// Styles
import styles from './index.module.css';


const index = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.topFooter}>
                <div className={styles.topInner}>
                    <div className={styles.items}>
                        <img className={styles.logoImg} src={'/assets/img/ico/logo.png'} alt={'logo'}/>
                        <div className={styles.menuNav}>
                            <div className={styles.menuItem}>사이트소개</div>
                            <div className={styles.menuItem}>사이트맵</div>
                            <div className={styles.menuItem}>이용안내</div>
                            <div className={styles.menuItem}>고객센터</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomFooter}>
                <div className={styles.bottomInner}>
                    <span className={styles.bottomSpan}>
                        Haeyoung Seoul, Korea ㅣ 박해영 ㅣ https://github.com/haeyoung97 ㅣ <br />
                        E-mail : pparkhae00@gmail.comㅣTel. 010-****-****ㅣ본 사이트의 컨텐츠는 저작권법의 보호를 받는 바, 무단전재, 복사, 배포 등을 금합니다.
                    </span>
                    <span className={styles.copyrightSpan}>
                        copyright 2022 Haeyoung all right reserved
                    </span>
                </div>
            </div>
        </div>
    )
};

export default index;
