import React, {useState} from "react";
import BtnSubmit from "../form/BtnSubmit";
import Input from '../form/Input'
import styles from './LoginForm.module.css';
import { useNavigate } from "react-router-dom";
import apiAuth from "../../config/apiAuth";
import swal from 'sweetalert2'



function LoginForm({btnText}){
    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [msg,setMsg]=useState("")



    
    
    const login=async(e)=>{
        e.preventDefault()
        try {
            await apiAuth.post("/auth/login",{
                email:email,senha:senha,
               
            })
           
            .then(data=>{

                const nome = data.data.user.nome
                const email = data.data.user.email
                const token = data.data.token

                console.log(token)
                localStorage.setItem("nome", nome)
                localStorage.setItem("email", email)
                localStorage.setItem("token", token)


                swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'logado com sucesso',
                    text: "Aproveite do nosso site!",
                    color: "black",
                    showConfirmButton: false,
                    timer:4000,
                    
                })
                navigate("/")
            })

               

            
        } catch (error) {
           
            setMsg("Email ou Senha incorretos")
           


            
        }
            
           














    }






    return (
        <div className={styles.form}>
            <div className={styles.msg}>
                {msg}
            </div>
            <form onSubmit={(e)=>login(e)}>
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Informe seu email"
                    required
                    handleOnchange={(e)=>setEmail(e.target.value)} 
                />
                <Input
                    type="password"
                    text="Senha"
                    name="senha"
                    placeholder="Informe sua senha"
                    required
                    handleOnchange={(e)=>setSenha(e.target.value)} 
                />
                <BtnSubmit text={btnText} />
            </form>
            
        </div>
        
    )

}
export default LoginForm