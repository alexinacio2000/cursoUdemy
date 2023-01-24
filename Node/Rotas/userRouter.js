const express = require('express');
const router = express.Router();

router.get('/user', (req,res)=>{
    res.send('Lista de Usuários');
})

router.post('/user', (req,res)=>{
    res.send('Incluir um usuário');
})

router.put('/user/:id', (req,res)=>{
    res.send(`Editar o usuário ${req.params.id}`);
})

router.delete('/user/:id', (req,res)=>{
    res.send(`Excluir o usuário ${req.params.id}`);
})

module.exports = router;