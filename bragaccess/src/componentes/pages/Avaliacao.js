import React from "react";
import styles from './Avaliacao.module.css';
import AvaliacaoForm from '../projetos/AvaliacaoForm'
//import BtnSubmit from "../form/BtnSubmit";

function Avaliacao(){
    return(

        
        <div className={styles.avaliar_container}>
            <h1>Compartilhe sua experiencia</h1>
            <p>Conte para nós a sua experiencia no Estabelecimento que você frequentou!</p>
            <AvaliacaoForm btnText="avaliar"/>
            
          
            
        </div>
        
    )
};
export default Avaliacao;