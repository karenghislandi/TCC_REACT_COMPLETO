const express = require("express");
const router=express.Router();
//const multer=require("multer")
const bodyParser = require('body-parser')
const upload=require("./uploadMulter/UploadImgs")


const EstabelecimentoController=require("./controllers/EstabelecimentoController");
const avaliacaoController = require("./controllers/avaliacaoController");

//rotas do estabelecimento


router.get("/estabelecimentos", EstabelecimentoController.buscarTodos);
router.get("/estabelecimento/:codEstabelecimento", EstabelecimentoController.buscarUm);
router.post("/estabelecimento",upload.single("image"),EstabelecimentoController.inserir);
router.put("/estabelecimento/:codEstabelecimento", EstabelecimentoController.alterar);
router.delete("/estabelecimento/:codEstabelecimento",EstabelecimentoController.excluir);

//rotas avaliação

router.get("/avaliacoes", avaliacaoController.buscarTodos);
router.post("/avaliacao",avaliacaoController.inserir);

module.exports=router;
