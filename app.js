const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));


    

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
});

app.listen(process.env.PORT || 3000,()=>{ // SI EN CONSOLA TIRA  LO DEL CONSOLE.LOG, VA TODO PERFECTO
    console.log("Servidor corriendo en host 3000")
});