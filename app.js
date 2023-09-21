const express = require('express');
const routerController = require('./src/routes/routerController');

const app = express();

app.use(express.json());
app.use('/', routerController);

app.listen(3000, () => {
    console.log('pegou');
});
