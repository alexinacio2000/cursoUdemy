const express = require('express');
const app = express();
const port = 3000;

let userRoute = require('./userRouter')
app.use('./', userRoute);
app.listen(port, function(){
    console.log('Servidor Rodando')
})