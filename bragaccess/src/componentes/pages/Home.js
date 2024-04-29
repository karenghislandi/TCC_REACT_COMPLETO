import React from "react";
import styles from './Home.module.css';
import acessibilidadeTodos from '../../imgs/acessibilidade_paraTodos.jpg'
import LinkButton from "../layout/LinkButton";
import { Link } from "react-router-dom";

function Home(){
    return(
        <section className={styles.home_container}>
            <h1> Seja bem vindo(a) ao nosso site <span>BragAccess</span></h1>
            <h3>Conheça lugares acessiveis para te receber em Bragança Paulista</h3>

            <Link  to='/cadastrar_estabelecimento' ><h3>Cadastre seu Estabelecimento</h3></Link>
  
            <LinkButton to="/login" text="Login-in"/>
            <img src={acessibilidadeTodos} alt="acessibilidadeTodos"/>
        </section>
        
    )
};
export default Home;