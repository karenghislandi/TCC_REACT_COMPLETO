import React,{useEffect,useState} from 'react'
import styles from './Comentario.module.css';
import LinkButton from '../layout/LinkButton';
import PaginationComponent from '../pagination/PaginationComponent';
import PaginationSelect from '../pagination/PaginationSelect';
import apiAvaliacao from '../../config/apiAvaliacao';

const Comentarios=()=> {
    
    const [avaliacoes, setAvaliacoes]=useState([]);
    const [itensPorPag, setItensPorPag]=useState(3);
    const [correntPag,setCorrentPag]=useState(0)
    const pages =Math.ceil(avaliacoes.length /itensPorPag)
    const startIndex=correntPag * itensPorPag
    const endIndex= startIndex+itensPorPag
    const currentItens=avaliacoes.slice(startIndex,endIndex)


    const getAvaliacoes=async()=>{
        try {
            const response=await apiAvaliacao.get("/avaliacoes");
            const avaliacoes =response.data.result
            console.log(avaliacoes)
            setAvaliacoes(avaliacoes)
            //console.log(response)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        getAvaliacoes();
        setCorrentPag(0)
    },[itensPorPag])
   

   //async componentDidMount(){
   // const response=await api.get("/estabelecimentos");
    //console.log(response.data)
    //this.setState({estabelecimentos:response.data})
   //}


  
    return (
            <div className={styles.comentario_container}>
                <div className={styles.pagination_container}>
                    <PaginationSelect  itensPorPag={itensPorPag} setItensPorPag={setItensPorPag}/>
                    <PaginationComponent pages={pages} correntPag={correntPag} setCorrentPag={setCorrentPag}/>
                </div>

                <div className={styles.title_container}>
                    <h1>Compartilhamento de experiencias </h1>
                    <LinkButton to="/avaliacao" text="Avaliar Estabelecimento"/>
                </div>
                
                {avaliacoes.length===0 ? <p>Não possui Avaliações...</p>:(
                   // <p> carregado</p>
                   currentItens.map((avaliacao)=>(
                        <li key={avaliacao.nomePessoa}>
                            <h2>
                                <strong>Nome: </strong>
                                {avaliacao.nomePessoa}
                            </h2>
                            <p>
                                <strong>Nome do Estabelecimento: </strong>
                                {avaliacao.nomeEstabelecimento}    
                            </p>
                            <p>
                                <strong>Comentario/experiencia: </strong>
                                {avaliacao.comentario}  

                            </p>
                            
                            


                        </li>
                   ))
                )}
            </div>
    )
}



        
    



export default Comentarios;