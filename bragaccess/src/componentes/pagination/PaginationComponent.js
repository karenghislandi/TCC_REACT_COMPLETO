import React from "react";
import styles from './Pagination.module.css'


function PaginationComponent({pages,correntPag,setCorrentPag}){
    return(
        <div className={styles.pagination_container}>
            {Array.from(Array(pages), (estabelecimento, index) => {
                return (
                <button 
                    style={index ===correntPag ? {backgroundColor:"  rgb(5, 31, 117)" } : (null)}
                    className={styles.buttun_pagination}
                    value={index} onClick={(e) => setCorrentPag(Number(e.target.value))}>
                        {index + 1}
                </button>
                )
            })}
        </div>
    )

}
export default PaginationComponent