const avaliacaoService=require("../services/avaliacaoService");

module.exports={
    buscarTodos: async(req,res)=>{
        let json={error:"",result:[]};
        let avaliacoes=await avaliacaoService.buscarTodos();

        for(let i in avaliacoes){
            json.result.push({
                nomePessoa: avaliacoes[i].nomePessoa,
                nomeEstabelecimento:avaliacoes[i].nomeEstabelecimento,
                comentario: avaliacoes[i].comentario,
                
            });
        }
        res.json(json)
    },

    /*buscarUm: async(req,res)=>{
        let json={error:"",result:{}};

        let codigo=req.params.codigo;
        let usuario=await UsuarioService.buscarUm(codigo);

        if(usuario){
            json.result=usuario;
        }
        res.json(json);
    },*/

    inserir: async(req,res)=>{
        let json={error:"",result:{}};

        
        let nomePessoa= req.body.nomePessoa;
        let nomeEstabelecimento= req.body.nomeEstabelecimento;
        let comentario=req.body.comentario;
        
        
        if(nomePessoa && nomeEstabelecimento && comentario){
            let usuariocodigo=await avaliacaoService.inserir(nomePessoa,nomeEstabelecimento,comentario);

           
                json.result={
               
                    nomePessoa:usuariocodigo,
                    nomeEstabelecimento,
                    comentario,
    
                
                   
                };

           
            
        }else{
            json.error="campos não enviados";
        }
        res.json(json)

       
        console.log(nomePessoa,nomeEstabelecimento,comentario)
    
            
    },

    /*alterar: async(req,res)=>{
        let json={error:"",result:{}};

        let codigo=req.params.codigo;
        let nome= req.body.nome;
        let sobrenome= req.body.sobrenome;
        let email=req.body.email;
        let senha= req.body.senha;
        let confirmaSenha=req.body.confirmaSenha;

        if(codigo && nome && sobrenome && email && senha && confirmaSenha){
           await UsuarioService.alterar(codigo,nome,sobrenome,email,senha,confirmaSenha);
            json.result={
                codigo,
                nome,
                sobrenome,
                email,
                senha,
                confirmaSenha
            };
        }else{
            json.error="campos não enviados";
        }
        res.json(json);
        
    },

    excluir: async(req,res)=>{
        let json={error:"",result:{}};

        await UsuarioService.excluir(req.params.codigo);

        res.json(json);

    }*/
       

}