import React from "react";
import styles from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={styles.preloader}>
        <svg className={styles.spinner} width="174px" height="174px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="transparent" strokeWidth="2" cx="33" cy="33" r="30"
                    stroke="url(#gradient)"/>
            <linearGradient id="gradient">
                <stop offset="50%" stopColor="#42d179" stopOpacity="1"/>
                <stop offset="65%" stopColor="#42d179" stopOpacity=".5"/>
                <stop offset="100%" stopColor="#42d179" stopOpacity="0"/>
            </linearGradient>
        </svg>
    </div>
}

export default Preloader