const express = require('express');
const router = express.Router();
const year_models = require('../DataAccsess/year_models');


router.get('/:id', (req, res) => { 

    console.log("entrei no get")
    year_models.getYearsbyFactory(req.params.id).then(data => {
        console.log('gggg'+ data)
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});



module.exports = router;