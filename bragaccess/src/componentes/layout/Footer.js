import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
;

function Footer() {
    
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.item}>
                    <a href="https://www.facebook.com/people/BragAccess/100086918426401/"> <FaFacebook /></a>    
                  
                </li>
                  
                <li className={styles.item}>
                    <a href="https://www.instagram.com/bragacess_bp/"> <FaInstagram/></a>   
                </li>
                
               
            </ul>
            <p className={styles.copy_right}>
                <samp>BragAccess</samp> &copy;2022
            </p>

        </footer>
    )

}
export default Footer;