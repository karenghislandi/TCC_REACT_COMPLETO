const EstabelecimentoService = require("../services/EstabelecimentoService");
const fs = require("fs");
//const multer = require("multer");

const { escape } = require("mysql");
const { url } = require("inspector");
/*const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/uploads/users")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now().toString()+"-"+file.originalname)
    },
    fileFilter:(req,file,cb)=>{
        const extensaoImg=["image/png","image/jpg","image/jpeg"].find
        (formatoAceito=>formatoAceito==file.mimetype);

        if(extensaoImg){
            return cb(null,true);
        }
        return cb(null,false);
    }
})

const upload=multer({storage:storage})*/

module.exports = {


    buscarTodos: async (req, res) => {
        let json = { error: "", result: [] };
        let estabelecimentos = await EstabelecimentoService.buscarTodos();
       
        for (let i in estabelecimentos) {
            if(estabelecimentos[i].PCDfisica===1){
                estabelecimentos[i].PCDfisica="sim"

            }else{
                if(estabelecimentos[i].PCDfisica===0){
                    estabelecimentos[i].PCDfisica="não"
                }
            }
            if(estabelecimentos[i].PCDintelectual===1){
                estabelecimentos[i].PCDintelectual="sim"

            }else{
                if(estabelecimentos[i].PCDintelectual===0){
                    estabelecimentos[i].PCDintelectual="não"
                }
            }
            if(estabelecimentos[i].PCDvisual===1){
                estabelecimentos[i].PCDvisual="sim"

            }else{
                if(estabelecimentos[i].PCDvisual===0){
                    estabelecimentos[i].PCDvisual="não"
                }
            }
            if(estabelecimentos[i].PCDauditiva===1){
                estabelecimentos[i].PCDauditiva="sim"

            }else{
                if(estabelecimentos[i].PCDauditiva===0){
                    estabelecimentos[i].PCDauditiva="não"
                }
            }
            if(estabelecimentos[i].estacionamento===1){
                estabelecimentos[i].estacionamento="sim"

            }else{
                if(estabelecimentos[i].estacionamento===0){
                    estabelecimentos[i].estacionamento="não"
                }
            }
            json.result.push({
                image:estabelecimentos[i].image,
                codEstabelecimento: estabelecimentos[i].codEstabelecimento,
                nomeEstabelecimento: estabelecimentos[i].nomeEstabelecimento,
                CNPJ: estabelecimentos[i].CNPJ,
                endereco: estabelecimentos[i].endereco,
                numero:estabelecimentos[i].numero,
                PCDfisica:estabelecimentos[i].PCDfisica,
                PCDintelectual:estabelecimentos[i].PCDintelectual,
                PCDvisual:estabelecimentos[i].PCDvisual,
                PCDauditiva:estabelecimentos[i].PCDauditiva,
                estacionamento:estabelecimentos[i].estacionamento,
                textAccess: estabelecimentos[i].textAccess,
                url: estabelecimentos[i].url,
                
                

                
            });
        }
           res.json({
            dados:json.result,
            urlImg:"http://localhost:8080/files/"
        })

        },

        
        
   
    

    buscarUm: async (req, res) => {
        let json = { error: "", result: {} };

        let nomeEstabelecimento = req.params.nomeEstabelecimento;
        let estabelecimento = await EstabelecimentoService.buscarUm(nomeEstabelecimento);

      



        if (estabelecimento) {
            json.result = estabelecimento;
        }
        res.json(json);
    },

     inserir: async  (req, res) => {
        let json = { error: "", result: {} };
       
      
        
        let image=req.file.filename;
        let nomeEstabelecimento = req.body.nomeEstabelecimento;
        let CNPJ = req.body.CNPJ;
        let endereco = req.body.endereco;
        let numero=req.body.numero;
        let PCDfisica=req.body.PCDfisica;
        let PCDintelectual=req.body.PCDintelectual;
        let PCDvisual=req.body.PCDvisual;
        let PCDauditiva=req.body.PCDauditiva;
        let estacionamento=req.body.estacionamento;
        let textAccess = req.body.textAccess;
        let url = req.body.url;
     
        

        if (image && nomeEstabelecimento && CNPJ && endereco&&numero &&  PCDfisica && PCDintelectual && PCDvisual && PCDauditiva && estacionamento && textAccess && url ) {
            if(PCDfisica==="sim"){
                PCDfisica=1
            }else{
                if(PCDfisica==="não"){
                    PCDfisica=0

                }
            }
            if(PCDintelectual==="sim"){
                PCDintelectual=1
            }else{
                if(PCDintelectual==="não"){
                    PCDintelectual=0

                }
            }
            if(PCDvisual==="sim"){
                PCDvisual=1
            }else{
                if(PCDvisual==="não"){
                    PCDvisual=0

                }
            }
            if(PCDauditiva==="sim"){
                PCDauditiva=1
            }else{
                if(PCDauditiva==="não"){
                    PCDauditiva=0

                }
            }
            if(estacionamento==="sim"){
                estacionamento=1
            }else{
                if(estacionamento==="não"){
                    estacionamento=0

                }
            }
            
           
            let Estabelecimentocodigo = await EstabelecimentoService.inserir(image,nomeEstabelecimento, CNPJ, endereco,numero,PCDfisica,PCDintelectual,PCDvisual,PCDauditiva,estacionamento,textAccess,url);
            
          
            json.result = {
               
                codEstabelecimento: Estabelecimentocodigo,
                image,
                nomeEstabelecimento,
                CNPJ,
                endereco,
                numero,
                PCDfisica,
                PCDintelectual,
                PCDvisual,
                PCDauditiva,
                estacionamento,
                textAccess,
                url,
               
                
                
            };

        } else {
            json.error = "campos não enviados";
        }
        
       
        res.json(json)
        console.log(image,nomeEstabelecimento,endereco,numero,PCDfisica,PCDauditiva,PCDintelectual,PCDvisual,textAccess,url,estacionamento,CNPJ)
        
        
    },

    alterar: async (req, res) => {
        let json = { error: "", result: {} };

        let codEstabelecimento = req.params.codEstabelecimento;
        let nomeEstabelecimento = req.body.nomeEstabelecimento;
        let CNPJ = req.body.CNPJ;
        let endereco = req.body.endereco;
        let url = req.body.url;
        let textAccess = req.body.textAccess;

        if (codEstabelecimento && nomeEstabelecimento && CNPJ && endereco && url && textAccess) {
            await EstabelecimentoService.alterar(codEstabelecimento, nomeEstabelecimento, CNPJ, endereco, url, textAccess);
            json.result = {
                codEstabelecimento,
                nomeEstabelecimento,
                CNPJ,
                endereco,
                url,
                textAccess
            };

        } else {
            json.error = "campos não enviados";
        }
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: "", result: {} };

        await EstabelecimentoService.excluir(req.params.codEstabelecimento);

        res.json(json);

    }


}