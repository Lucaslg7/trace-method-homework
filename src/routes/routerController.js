const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<p>olá mundo</p>')
})