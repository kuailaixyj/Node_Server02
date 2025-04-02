var express = require('express');
var router = express.Router();
var xhs = require('../util/xhs_xs');

router.get('/', function (req, res, next) {
    console.log(req.query )
    const {cook , c, a }  =req.query
    console.log(cook,c,a )
    res.send(xhs(cook,c,a))
    // return

});

module.exports = router;
