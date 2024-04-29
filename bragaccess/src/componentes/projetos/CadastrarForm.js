import React,{useState} from "react";
import BtnSubmit from "../form/BtnSubmit";
import Input from '../form/Input'
import styles from './CadastrarForm.module.css';
import { useNavigate } from "react-router-dom";
import apiAuth from "../../config/apiAuth";
import swal from "sweetalert2";




function CadastrarForm({btnText}){
    const navigate=useNavigate()
    const [nome,setNome]=useState()
    const [sobrenome,setSobrenome]=useState()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [confirmaSenha,setConfirmaSenha]=useState()
    const [msg,setMsg]=useState("")


    

   

    const cadastro=async(e)=>{
        e.preventDefault()
        try {

            if(senha.length< 6){
                setMsg("Inserir senha maior, minino 6 digitos")
                return false
            }if(senha!== confirmaSenha){
                setMsg("senhas tem que ser iguais")
                return false
            }else{
                await apiAuth.post("/auth/registro",{
                    nome,sobrenome,email,senha,confirmaSenha

                }).then((data)=>{
                    console.log(data)
                    swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Usuario cadastrado com Sucesso',
                        showConfirmButton: false,
                        timer:4000,
                      })
                    navigate("/login")
                }).catch(err=>console.log(err))
            }
                
        
        } catch (error) {
            console.log(error)
        
       }
      
       
    }
    

    return(
       <div className={styles.form}>
            <form onSubmit={(e)=>cadastro(e)}>
                <Input
                    type="text"
                    text="Nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    handleOnchange={(e)=>setNome(e.target.value)} 
                />
                <Input
                    type="text"
                    text="Sobrenome"
                    name="sobrenome"
                    placeholder="Digite seu sobrenome"
                    handleOnchange={(e)=>setSobrenome(e.target.value)} 
                />
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Informe seu email"
                    handleOnchange={(e)=>setEmail(e.target.value)} 
                />
                <Input
                    type="password"
                    text="Senha"
                    name="senha"
                    placeholder="Informe sua senha"
                    handleOnchange={(e)=>setSenha(e.target.value)} 
                />
                <Input
                    type="password"
                    text="Confirme sua senha"
                    name="ConfirmaSenha"
                    placeholder="Informe sua senha novamente"
                    handleOnchange={(e)=>setConfirmaSenha(e.target.value)} 
                />
                <div className={styles.msg}>
                    {msg}
                </div>
                <BtnSubmit text={btnText} />
            </form>
       </div>
    )

}
export default CadastrarForm