import React,{useState} from "react";
import {useNavigate } from "react-router-dom";

import styles from './ContatoForm.module.css';
import BtnSubmit from "../form/BtnSubmit";
import Input from '../form/Input';
import emailjs from  "@emailjs/browser";
import swal from 'sweetalert2'

function ContatoForm({btnText}){
    const navigate=useNavigate()
    const [nome,setNome]=useState()
    const [email,setEmail]=useState()
    const [menssagem,setMenssagem]=useState()
   


    const contato=(e)=>{
        e.preventDefault()

        const templateParams={
            from_name:nome,
            message:menssagem,
            email:email

            

        }
       
        emailjs.send("service_a8tbcnf","template_6xsafdp",templateParams,"Gqbq9NDJMw7vTmzvS")
        .then((res)=>{
            swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Email enviado com sucesso',
                showConfirmButton: false,
                timer:4000,
              })
            console.log("Email enviado",res.status,res.text)
            setNome("")
            setEmail("")
            setMenssagem("")
            navigate("/")

        }).catch((erro)=>console.log("Erro ao enviar email",+erro))

        
       
    }
    return (
        <div className={styles.form}>
            <form onSubmit={(e)=>contato(e)}>
                <Input
                    type="text"
                    text="Nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    required
                    handleOnchange={(e)=>setNome(e.target.value)} 
                />
                
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Informe seu email"
                    required
                    handleOnchange={(e)=>setEmail(e.target.value)} 
                    
                />
                
                <Input
                    type="text"
                    text="menssagem"
                    name="menssagem"
                    placeholder="Digite seu uma menssagem para nós"
                    required
                    handleOnchange={(e)=>setMenssagem(e.target.value)} 
                />
           
                <BtnSubmit text={btnText} />
                
            </form>
           
        </div>
        
    )
   
}

export default ContatoForm;