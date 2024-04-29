import React from "react";
import styles from "./ModalPerfil.module.css"

function ModalPerfil({isOpen,setOpenModal,children}){
   if(isOpen){
    return(
        <div className={styles.background}>
            <div className={styles.modal}>
                <div>
                    {children}
                </div>
                <div ><button className={styles.button} onClick={setOpenModal}>Fechar</button></div>
                
                
               
                
            </div>
        </div>
    )
   }
   return null
}
export default ModalPerfil