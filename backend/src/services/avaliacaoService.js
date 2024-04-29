const bd=require("../bd");
const { inserir } = require("../controllers/avaliacaoController");


module.exports={
    buscarTodos:()=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("SELECT * FROM  avaliacoes",(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },

    /*buscarUm:(codigo)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("SELECT * FROM usuarios WHERE codigo=? ",[codigo],(error,results)=>{
                if (error){rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }

            });
           
        });
    },*/

    inserir:(nomePessoa, nomeEstabelecimento,comentario)=>{
        return new Promise((aceito,rejeitado)=>{
            
            bd.query("INSERT INTO avaliacoes (nomePessoa,nomeEstabelecimento,comentario) VALUES (?,?,?) ",
                [nomePessoa,nomeEstabelecimento,comentario],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results.inserirID);
                }
               
            );
        });
    },

    /*  alterar:(codigo,nome, sobrenome,email,senha,confirmaSenha)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("UPDATE usuarios SET nome=?, sobrenome=?, email=?, senha=?, confirmaSenha=? WHERE codigo=?",
                [nome,sobrenome,email,senha,confirmaSenha,codigo],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results);
                }
               
            );
        });
           

    },

    excluir:(codigo)=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("DELETE * FROM  usuarios WHERE codigo=?",[codigo] ,(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },



 */  
};
    
        