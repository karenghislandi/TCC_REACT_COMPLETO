import React from "react";
import styles from './Sobre.module.css';


function Sobre(){
    return(
        <div className={styles.sobre_container}>
            <h1>Um pouquinho sobre nós:</h1>
            <h3>Nosso objetivo é ajudar as pessoas com deficiencia 
                a encontrar locais acessiveis em Bragança Paulista, assim evitando momentos de desconforto</h3>
            
        </div>
       
    )
};
export default Sobre;