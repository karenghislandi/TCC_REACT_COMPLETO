import React from "react";

import styles from './BtnSubmit.module.css';

function BtnSubmit({text}){
    return(
        <div>
            <button className={styles.btnSubmit}>{text}</button>
        </div>
    )
}

export default BtnSubmit
 