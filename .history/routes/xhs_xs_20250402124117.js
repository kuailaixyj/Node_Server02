var express = require('express');
var router = express.Router();
var xhs = require('../util/xhs_xs');

router.post('/', function (req, res, next) {

    const {cook , c, a }  = req.body
    res.send(xhs(cook,c,a))
    return

});

module.exports = router;
