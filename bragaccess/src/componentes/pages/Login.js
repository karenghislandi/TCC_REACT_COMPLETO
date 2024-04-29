import React from "react";
import styles from './Login.module.css';
import LoginForm from '../projetos/LoginForm'
import { Link} from 'react-router-dom'
function Login(){
    return(

        <div className={styles.login_container}>
            <h1> Login ou/Cadastrar</h1>
            <LoginForm btnText="Fazer Login"/>
            <div><h3>Ainda não possui conta? <Link className={styles.btn} to='/Cadastrar'>cadastre-se</Link></h3>
            
            </div>
        </div>
        
    )
};
export default Login;