const express=require('express');
const server=express();
const atividades=require('./src/data/atividades.json');
const path=require('path');



server.use(express.static(path.join(__dirname, "css")))

server.get('/api',(req,res)=>{
    return res.json(atividades)
})

server.get('/',(req,res)=>{
    return res.sendFile(__dirname+"/")
})

server.get('/api/manha',(req,res)=>{
    return res.json(atividades.manha)
})
server.get('/api/tarde',(req,res)=>{
    return res.json(atividades.tarde)
})
server.get('/api/noite',(req,res)=>{
    return res.json(atividades.noite)
})


server.listen(3001,()=>{
    console.log('Servidor esta funcionando')
});