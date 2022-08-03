import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Styles
import styles from './index.module.css';


const index = (props) => {
    const { dispatch, history, style, label, onClick } = props;

    return (
        <div className={styles.container} style={style} onClick={onClick}>
            {label}
        </div>
    )
};

export default withRouter(index);