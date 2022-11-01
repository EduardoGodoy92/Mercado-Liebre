const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('servidor corriendo en el puerto ' + port)
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
});

