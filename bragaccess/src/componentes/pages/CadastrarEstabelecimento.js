import React from "react";
import styles from './CadastrarEstabelecimento.module.css';
import EstabelecimentoForm from '../projetos/EstabelecimentoForm'



function CadastrarEstabelecimento(){
    
    return(
        <div className={styles.cadastrar_container}>
            <h1> Cadastrar Estabelecimento</h1>
            <EstabelecimentoForm btnText="Cadastrar"/>
        </div>
        
    )
};
export default CadastrarEstabelecimento;