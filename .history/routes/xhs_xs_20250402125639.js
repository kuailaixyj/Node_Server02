var express = require('express');
var router = express.Router();
var xhs = require('../util/xhs_xs');

router.post('/', function (req, res, next) {
    console.log(req.body )
    const {cook , c, a }  =req.body
    console.log(cook,c,a )
    res.send(xhs(cook,c,a))
    // return

});

module.exports = router;
