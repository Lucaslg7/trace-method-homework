const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    console.log('olá')
    res.send();
});

router.get('/json', (req, res) => {
    
    res.send('ola mundo');
}) 

module.exports = router;
