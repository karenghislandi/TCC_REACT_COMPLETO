import React from "react";
import styles from './Pagination.module.css'

function PaginationSelect({itensPorPag,setItensPorPag}){
    return(
        <div >
            <h2>Numero de estabelecimento por pagina:</h2>
            <select className={styles.button_select} value={itensPorPag} onChange={(e) => setItensPorPag(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
               
            </select>
        </div>
       
    )

}
export default PaginationSelect