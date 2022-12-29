const express = require("expr"); // Importando o Express
const app = express();  // Iniciando o Express

app.listen(4000, function(erro){
    if(erro){
        console.log("Aconteceu algum erro")
    } else {
        console.log("Servidor iniciado, com sucesso")
    }
})