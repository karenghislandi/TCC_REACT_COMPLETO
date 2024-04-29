import React from "react";
import styles from './Pagination.module.css';

const max_itens =20;
const max_left=(max_itens-1)/2

function Pagination({limit,total,offset,setOffset}){
    const current= offset? (offset/limit)+1:1;
    const pages =Math.ceil(total/limit);
    const first= Math.max(current-max_left,1)
    return(
      <ul>
        {Array.from({length:max_itens})
        .map((_,index)=>index+first)
        .map((page)=>{
          <li>{page}</li>

        })}
      </ul>
     
    )
};

export default Pagination