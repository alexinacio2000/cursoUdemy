var http = require("http");

http.createServer(function(requisiao,resposta){
    resposta.end("<h1>Bem vindo ao meu sistema</h1><br><h3>Alex Inacio</h3>")
}).listen(8181);
console.log("Meu servidor está funcionando")