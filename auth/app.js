require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors =require("cors");
const auth = require("./middleware/auth");
const bodyParser=require("body-parser")

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//models

const usuario = require("./models/Usuario");
const { json } = require("express");
//rota publica

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo" });
});
//rota privada
app.get("/usuarios/:id", auth, async (req, res) => {
    const id = req.params.id;
    const Usuario = await usuario.findById(id, "-senha");

    if (!Usuario) {
        return res.status(404).json({ msg: "Usuario não encontrdo!" });
    }
    res.status(200).json({ Usuario });
});

//registrar usuarios
app.post("/auth/registro", async (req, res) => {
    const { nome, sobrenome, email, senha, confirmaSenha } = req.body;
    //validações

    if (!nome) {
        return res.status(422).json({ msg: "nome obrigatório" });
    }
    if (!sobrenome) {
        return res.status(422).json({ msg: "sobrenome obrigatório" });
    }
    if (!email) {
        return res.status(422).json({ msg: "email obrigatório" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "é obrigatório inserir uma senha" });
    }
    if (senha.length <6) {
        return res.status(422).json({ msg: "Senha muito pequena,tem que ter no minimo 6 digitos" });
    }
    if (senha !== confirmaSenha) {
        return res.status(422).json({ msg: "senhas diferentes!" });
    }
    //verificar se usuario existe
    const usuarioExiste = await usuario.findOne({ email: email });
    if (usuarioExiste) {
        return res.status(422).json({ msg: "Utilize outro email" });
    }
    //criar senha
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    //criar usuario

    const user = new usuario({
        nome,
        sobrenome,
        email,
        senha: senhaHash,
    });
    try {
        await user.save();
        res.status(201).json({ msg: "Usuario cadastrado com sucesso!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Aconteceu um problema,tente novamente mais tarde!",
        });
    }
    console.log(user)
});


//login user

app.post("/auth/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "email obrigatório" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "é obrigatório inserir uma senha" });
    }
    //ver se usuario já ta cadastrado

    const user = await usuario.findOne({ email: email });

    if (!user) {
       
        return res.status(404).json({ msg: "Usuario não encontrado" });
        //return document.getElementById("usuario").textContent="senha ou email incorretos"
      
    }

    //verifica se a senha bate com o do cadastro

    const compararSenha = await bcrypt.compare(senha, user.senha);

    if (!compararSenha) {
        return res.status(404).json({ msg: "Senha invalida" });
    }
    

    try {
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret
        );

        res.status(200).json({
            msg: "Autenticação realizada com sucesso! ",
            user: {
                nome: user.nome,
                email: user.email,
            },
            token,
        });
        console.log(user)
        console.log(token)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Aconteceu um problema,tente novamente mais tarde!",
        });
    }
});

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.JWT_PORT

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0.r3n3dle.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(PORT);
        console.log("conectou o banco na porta " + PORT);
    })
    .catch((err) => console.log(err));
