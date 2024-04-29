/*import React from "react";
import styles from './Perfil.module.css';
//import LinkButton from '../layout/LinkButton'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Perfil(){
    const navigate=useNavigate()
    
    const sair=()=>{
        localStorage.clear()
        navigate("/login")

    }
  
    const nome =localStorage.getItem("nome")
    return(
        <div className={styles.perfil_container}>
            <div className={styles.perfil_title}>
                <h1>Usuario:</h1>
                <Link  onClick={sair}>Sair</Link>
            </div>
            <div>
                <h3> seja bem vindo(a) ao nosso site BragAccess!</h3>
                <h2>{nome}</h2>
            </div>

        </div>
      


    )
}
export default Perfil;*/