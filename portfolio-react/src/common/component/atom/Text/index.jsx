import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Styles
import styles from './index.module.css';


const index = (props) => {
    const { dispatch, history, value, placeholder, style, onChange, onKeyPress } = props;

    return (
        <div className={styles.container} style={style}>
            <input value={value}
                   type={'text'}
                   placeholder={placeholder}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
            />
        </div>
    )
};

export default withRouter(index);
