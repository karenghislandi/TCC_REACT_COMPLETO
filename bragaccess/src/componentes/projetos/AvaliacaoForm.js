import React,{useState} from "react";
import BtnSubmit from "../form/BtnSubmit";
import { useNavigate } from "react-router-dom";
import Input from '../form/Input';
import styles from './AvaliacaoForm.module.css';
import apiAvaliacao from '../../config/apiAvaliacao';
import swal from 'sweetalert2'

 
 
function AvaliacaoForm({ btnText }) {
    const navigate=useNavigate()
    const [nomePessoa,SetNomePessoa]=useState("")
    const [nomeEstabelecimento,setNomeEstabelecimento]=useState("")
    const [comentario,setComentario]=useState("")
   
    
    
      
       
   
    const createAvaliacao =async(e)=>{
        e.preventDefault()
       
        await apiAvaliacao.post("/avaliacao",{
            nomePessoa,nomeEstabelecimento,comentario
        })
        .then((data=>{
            
            
            console.log(data)
        
            swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Avaliação inserida com Sucesso',
                showConfirmButton: false,
                timer:4000,
              })
                navigate("/comentarios")
        }))
        .catch(err=>
            console.log("error ao inserir dados " +err),
           
        )
       

       
        
    }
    return (
        <div>
           
            
             <form className={styles.form} onSubmit={(e)=>createAvaliacao(e)}>
                 <Input
                    type="text"
                    text="nome da pessoa que está avaliando"
                    name="nomePessoa"
                    placeholder="insira o nome da pessoa"
                    handleOnchange={(e)=>SetNomePessoa(e.target.value)}  
                   
                />
                
                
                <Input
               
                    type="text"
                    text="Nome do estabelecimento"
                    name="nomeEstabelecimento"
                    placeholder="Digite seu nome do seu estabelecimento"
                    handleOnchange={(e)=>setNomeEstabelecimento(e.target.value)}   
                />
                
                
                <Input
                    type="text"
                    text="Comentario sobre experiencia"
                    name="comentario"
                    placeholder="Digite a sua experiencia"
                    handleOnchange={(e)=>setComentario(e.target.value)}
                   
                />
                 <BtnSubmit  text={btnText}  />
            </form>
          
        </div>

    )

}
export default AvaliacaoForm;
