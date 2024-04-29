import React from "react";
import styles from './Contato.module.css';
import ContatoForm from '../projetos/ContatoForm';

function Contato(){
    return(
        <div className={styles.contato_container}>
                <h1>Entre em contato Conosco:</h1>
                <ContatoForm btnText ="Enviar"/>
        </div>

    )
}
export default Contato

