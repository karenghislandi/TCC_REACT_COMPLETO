import React from "react";
import styles from './Cadastrar.module.css';
import CadastrarForm from '../projetos/CadastrarForm'
import { Link} from 'react-router-dom'
function Cadastrar(){
    return(

        <div className={styles.cadastrar_container}>
            <h1> Cadastrar-se</h1>
            <CadastrarForm btnText="Cadastrar-se"/>
            <div><h3>Já possui conta?  Faça o <Link className={styles.btn} to='/login'>Login</Link></h3>
            </div>
          
        </div>
        
    )
};
export default Cadastrar;