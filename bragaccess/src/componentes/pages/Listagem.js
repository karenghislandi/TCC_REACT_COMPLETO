import React,{useEffect,useState} from 'react'
import styles from './Listagem.module.css';
import apiEstabelecimento from "../../config/apiEstabelecimento";
import PaginationComponent from '../pagination/PaginationComponent';
import PaginationSelect from '../pagination/PaginationSelect';
import LinkButton from '../layout/LinkButton'
import icone from '../../../src/imgs/estabelecimento.jpg'






const Listagem=()=> {
    

   
    
    const [estabelecimentos, setEstabelecimento]=useState([]);
    const[urlImg,setUrlImg]=useState('')
    const [itensPorPag, setItensPorPag]=useState(1);
    const [correntPag,setCorrentPag]=useState(0)
    const pages =Math.ceil(estabelecimentos.length /itensPorPag)
    const startIndex=correntPag * itensPorPag
    const endIndex= startIndex+itensPorPag
    const currentItens=estabelecimentos.slice(startIndex,endIndex)

    const getEstabelecimento=async()=>{
        try {
            const response=await apiEstabelecimento.get("/estabelecimentos");
            const estabelecimentos =response.data.dados
            
            console.log(estabelecimentos)
            setEstabelecimento(estabelecimentos)
            //setUrlImg(estabelecimentos.urlImg)
            console.log(" url "+response.data.urlImg)
            setUrlImg(response.data.urlImg)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        getEstabelecimento();
        setCorrentPag(0)
    },[itensPorPag])


    
   

   //async componentDidMount(){
   // const response=await api.get("/estabelecimentos");
    //console.log(response.data)
    //this.setState({estabelecimentos:response.data})
   //}


  
    return (
        <div>
           
           
            <div className={styles.listagem_container}>
                <div className={styles.pagination_container}>
                    <PaginationSelect  itensPorPag={itensPorPag} setItensPorPag={setItensPorPag}/>
                    <PaginationComponent pages={pages} correntPag={correntPag} setCorrentPag={setCorrentPag}/>
                </div>
                <div className={styles.title_container}>
                    <h1>Lista de estabelecimentos</h1>
                    <LinkButton to="/cadastrar_estabelecimento" text="Cadastrar Estabelecimento"/>
                </div>
                {estabelecimentos.length===0 ? <p>Nenhum Estabelecimento Cadastrado...</p>:(
                   // <p> carregado</p>
                        currentItens.map((estabelecimento)=>(
                        <li key={estabelecimento.codEstabelecimentos}>
                             <p>
                                {estabelecimento.image ?<img src={urlImg + estabelecimento.image} alt="imagem"height="150" width="300"/>: <img src={icone} alt="imagem" height="150"  width="300"/> }
                                
                            </p>
                            <p>
                                <strong>Nome: </strong>
                                {estabelecimento.nomeEstabelecimento}
                            </p>
                            <p>
                                <strong>CNPJ: </strong>
                                {estabelecimento.CNPJ}    
                            </p>
                            <p>
                                <strong>Endereço: </strong>
                                {estabelecimento.endereco},{estabelecimento.numero} 

                            </p>
                            <p>
                                <strong>Accessibilidade para pessoa com deficiencia fisica: </strong>
                                {estabelecimento.PCDfisica}

                            </p>
                            <p>
                                <strong>Accessibilidade para pessoa com deficiencia Intelectual: </strong>
                                {estabelecimento.PCDintelectual}

                            </p>
                            <p>
                                <strong>Accessibilidade para pessoa com deficiencia Visual: </strong>
                                {estabelecimento.PCDvisual}

                            </p>
                            <p>
                                <strong>Accessibilidade para pessoa com deficiencia Audidiva: </strong>
                                {estabelecimento.PCDauditiva}

                            </p>
                            <p>
                                <strong>Possui vaga para estacionar perto do local ou no local: </strong>
                                {estabelecimento.estacionamento}

                            </p>
                            <p>
                                <strong>Descrição da Acessibilidade: </strong>
                                {estabelecimento.textAccess}  
                            </p>
                            <p>
                                <strong>localização maps: </strong>
                               <a href= {estabelecimento.url}> localização do local aqui</a>
                            </p>
                           
                               


                        </li>
                   ))
                )}    
                
                        </div>
            </div>
          
    )
}



        
    



export default Listagem;