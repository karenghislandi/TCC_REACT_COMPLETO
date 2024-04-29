import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import BtnSubmit from "../form/BtnSubmit";
import Input from '../form/Input'
import styles from './EstabelecimentoForm.module.css';
import icone from '../../../src/imgs/estabelecimento.jpg'
import apiEstabelecimento from "../../config/apiEstabelecimento";
//import {Alert} from "react-bootstrap"
//import validador from 'validator'
import swal from 'sweetalert2'



function EstabelecimentoForm({btnText}){
    const navigate=useNavigate()
    const [nomeEstabelecimento,setNomeEstabelecimento]=useState("")
    const [CNPJ,setCnpj]=useState("")
    const [endereco,setEndereco]=useState("")
    const [numero,setNumero]=useState("")
    const [textAccess,setTextAccess]=useState("" )
    const [url,setUrl]=useState("")
    const [image,setImage]=useState("")
    const [PCDfisica,setPCDfisica]=useState("")
    const [PCDintelectual,setPCDintectual]=useState("")
    const [PCDvisual,setPCDvisual]=useState("")
    const [PCDauditiva,setPCDauditiva]=useState("")
    const [estacionamento,setEstacionamento]=useState("")
    const [validURL,setValidURL]=useState(false)
    const [validCNPJ,setValidCNPJ]=useState(false)
    const [msg,setMsg]=useState("")
   

    const validaURL=(url)=>{
        const regEx= /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        return regEx.test(url);
      }

    const validaCNPJ=(CNPJ)=>{
        const regEx=/^([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}[-]?[0-9]{2})$/

        return regEx.test(CNPJ)

    }      
        const createPost=async(e)=>{
            e.preventDefault() 
            try{
               
                const validCNPJ=validaCNPJ(CNPJ)
                if(!validCNPJ){
                    setMsg("Insira uma CNPJ valida")
                    return false
                   
                }
                setValidCNPJ(validCNPJ)
                

                const validURL=validaURL(url);
                if(!validURL){
                    setMsg("Insira uma Url valida")
                    return false
                }
                
                setValidURL(validURL)    

               
                if(validURL===true && validCNPJ===true  ){
                    await apiEstabelecimento.post("/estabelecimento",{
                        image,nomeEstabelecimento,CNPJ,endereco,numero,PCDfisica,PCDintelectual,PCDvisual,PCDauditiva,estacionamento, url,textAccess,
                    }).then((data=>{
                        swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Estabelecimento cadastrado com Sucesso',
                            showConfirmButton: false,
                            timer:4000,
                          })
                        navigate("/listagem")
                            console.log(data)
                            
                    }))
                    .catch(err=>
                        console.log("error ao inserir dados " +err),
                       
                    )
                   

                }

            }catch(err){
                console.log (err)

            }
           
                      
           
                   
              
        }    

    return(
        
        <div>
           
            
        <form className={styles.form} onSubmit={(e)=>createPost(e)}>
                 <Input
                    type="file"
                    text="Imagem do estabelecimento"
                    name="image"
                    placeholder="insira a imagem do esbelecimento"
                    handleOnchange={(e)=>setImage(e.target.files[0])}  
                   
                />
                 {image? <img src={URL.createObjectURL(image)} alt="imagem" width="150" height=""/>:<img src={icone} alt="imagem" width="250" height="150"/>} 
                 
                <Input
               
                    type="text"
                    text="Nome do estabelecimento"
                    name="nomeEstabelecimento"
                    placeholder="Digite seu nome do seu estabelecimento"
                    handleOnchange={(e)=>setNomeEstabelecimento(e.target.value)}   
                />
                
                
                <Input
                    type="text"
                    text="CNPJ"
                    name="CNPJ"
                    placeholder="Digite a CNPJ do seu estabelecimento"
                    handleOnchange={(e)=>setCnpj(e.target.value)}
                   
                />
                 
                <Input
                    type="text"
                    text="Endereço do estabelecimento"
                    name="endereco"
                    placeholder="Informe o endereco do estabelecimento"
                    handleOnchange={(e)=>setEndereco(e.target.value)}

                />
                <Input
                    type="number"
                    text="número do estabelecimento"
                    name="numero"
                    placeholder="Informe o número do estabelecimento"
                    handleOnchange={(e)=>setNumero(e.target.value)}

                />
               
               
                <div className={styles.form_select}>
                    <label>Possui Acessibilidade Para Pessoas com Deficiencia fisica:</label>
                    <select name="PCDfisica" value={PCDfisica} onChange={e=>setPCDfisica(e.target.value)} required  >
                        <option value="">Escolha uma opção</option>
                        <option value="0">não</option>
                        <option value="1">sim</option>
                       
                       
                    </select>
                </div>
                <div className={styles.form_select}>
                    <label>Possui Acessibilidade Para Pessoas com Deficiencia Intelectual:</label>
                    <select name="PCDintelectual" value={PCDintelectual}  onChange={e=>setPCDintectual(e.target.value)} required  >
                        <option value="">Escolha uma opção </option>
                        <option value="0">não</option>
                        <option value="1">sim</option>
                       
                       
                    </select>
                </div>
                <div className={styles.form_select}>
                    <label>Possui Acessibilidade Para Pessoas com Deficiencia Visual:</label>
                    <select name="PCDvisual" value={PCDvisual}  onChange={e=>setPCDvisual(e.target.value)}required  >
                        <option value="">Escolha uma opção</option>
                        <option value="0">não</option>
                        <option value="1">sim</option>
                       
                       
                    </select>
                </div>
                <div className={styles.form_select}>
                    <label>Possui Acessibilidade Para Pessoas com Deficiencia Audidiva:</label>
                    <select name="PCDauditiva" value={PCDauditiva}  onChange={e=>setPCDauditiva(e.target.value)} required  >
                        <option value="">Escolha uma opção</option>
                        <option value="0">não</option>
                        <option value="1">sim</option>
                       
                       
                    </select>
                </div>
                <div className={styles.form_select}>
                    <label>Possui vaga para estacionar veiculo perto do local:</label>
                    <select name="estacionamento" value={estacionamento}  onChange={e=>setEstacionamento(e.target.value)} required  >
                        <option value="">Escolha uma opção</option>
                        <option value="0">não</option>
                        <option value="1">sim</option>
                       
                       
                    </select>
                </div>
                <Input
                    type="text"
                    text="Descrição de Acessibilidade do estabelecimento"
                    name="textAccess"
                    placeholder="Descreva a acessibilidade do seu estabelecimento"
                    handleOnchange={(e)=>setTextAccess(e.target.value)}

                />  
                 <Input
                    type="text"
                    text="link do maps do endereço do estabelecimento"
                    name="url"
                    placeholder="Informe o link do maps do endereço do estabelecimento"
                    handleOnchange={(e)=>setUrl(e.target.value)} 
                />  

                
                    <div className={styles.msg}>{msg}</div> 
                
               
                           
                
                <BtnSubmit text={btnText}/>
              
                    
                
                
            </form>
            
           
        </div>
    )

}
export default EstabelecimentoForm