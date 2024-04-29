import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Container from "./container";
import styles from './NavBar.module.css';
import logo from '../../imgs/img_acessibilidade.png';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ModalPerfil from "./ModalPerfil";

//import buttonDropdown from "./buttonDropdown";


function Navbar() {

    const [openModal,setOpenModal]=useState(false)
    const navigate=useNavigate()
    const nome=localStorage.getItem("nome")
    const email=localStorage.getItem("email")
    
   

    const sair=()=>{
        localStorage.clear()
        navigate("/login")

    }
    return (
        <nav className={styles.navbar}>
            <Container>
                
                <Link to='/' >
                    <img src={logo} alt="Bragaccess"/>   
                       
                </Link>
                
               
                <ul className={styles.list}>
                    <li class={styles.item}>
                        <Link to='/listagem'>Locais Cadastrados</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/sobre' >Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato' >Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/comentarios' >Avaliação</Link>
                    </li>
                    <li  className={styles.item} onClick={()=>setOpenModal(true)}>
                       <FaUser/>
                    </li>
                    <div>
                        <ModalPerfil isOpen={openModal} setOpenModal={()=>setOpenModal(!openModal)} >
                            <div>
                                <h1 className={styles.title_perfil}> Perfil</h1>
                               
                            </div>
                            <div>
                                <h3 className={styles.h3}>OLÁ {nome}</h3>

                            </div>
                            <div>
                                <p>{email}</p>
                            </div>
                            <div>
                                {nome && email? <h2>Deseja sair da sua conta?  <a onClick={sair}>sair</a></h2>: <h2>Deseja fazer login? <a className={styles.logar} href="/login"> logar</a></h2>}
                               
                            </div>
                            
                            
                               
                            
                        </ModalPerfil>
                    </div>
                  
                       


                </ul>
            </Container>

        </nav>
    )

}
export default Navbar;

