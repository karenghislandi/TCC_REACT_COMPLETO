const bd=require("../bd");
const { inserir } = require("../controllers/EstabelecimentoController");




module.exports={
    buscarTodos:()=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("SELECT * FROM  estabelecimentos",(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },

    buscarUm:(nomeEstabelecimento)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("SELECT * FROM estabelecimentos WHERE nomeEstabelecimento=? ",[nomeEstabelecimento],(error,results)=>{
                if (error){rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }

            });
           
        });
    },

    inserir:(image,nomeEstabelecimento, CNPJ,endereco,numero, PCDfisica,PCDintelectual,PCDvisual,PCDauditiva,estacionamento,textAccess,url)=>{
                return new Promise((aceito,rejeitado)=>{

            bd.query("INSERT INTO estabelecimentos (image,nomeEstabelecimento,CNPJ,endereco,numero,PCDfisica,PCDintelectual,PCDvisual,PCDauditiva,estacionamento,textAccess,url) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ",
                [image,nomeEstabelecimento,CNPJ,endereco,numero,PCDfisica,PCDintelectual,PCDvisual,PCDauditiva,estacionamento,textAccess,url],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results.insertcodigo);
                   
                },
               
            );
        });
    

    },
        

    alterar:(codEstabelecimento,nomeEstabelecimento, CNPJ,endereco,url,textAccess)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("UPDATE estabelecimentos SET nomeEstabelecimento=?, CNPJ=?, endereco=?  url=? textAccess=? WHERE codEstabelecimento=?",
                [nomeEstabelecimento,CNPJ,endereco,url,textAccess,codEstabelecimento],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results);
                },
                console.log(res.json)
            );
        });
           

    },

    excluir:(codEstabelecimento)=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("DELETE  FROM  estabelecimentos WHERE codEstabelecimento=?",[codEstabelecimento] ,(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },



   
};
    
        