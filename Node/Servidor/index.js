const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu sistema</h1>")
})

app.get("/blog/:artigo?", function(req,res){
    
    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
        res.send("Bem Vindo, ao meu blog")
    }
})

app.get("/canal", function(req,res){
    res.send("Esse é o meu canal")
})

app.get("/ola/:nome", function(req, res){
    var nome = req.params.nome;
    res.send("<h1>Oi " + nome + " </h1>")
})


app.listen(4000, function(erro){
    if(erro){
        console.log('Ocorreu algum erro')
    } else {
        console.log("Servidor Iniciado com sucesso")
    }
})