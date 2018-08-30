const express = require('express');
const router = express.Router();
const factories = require('../DataAccsess/factories');


router.get('/', (req, res) => { 
    console.log("entrei no get")
    factories.getAll().then(data => {
        console.log('gggg'+ data)
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});



module.exports = router;