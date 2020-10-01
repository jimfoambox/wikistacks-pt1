const { Router } = require('express');
const router = require("express").Router();
const layout = require('../views/layout');

// router.get('/',(req,res) => {
//     res.send(layout(''))
// })

const wikiRoutes = router.get('/wiki', (req, res, next) => {
    try {
        res.send(layout(''));
    } catch(error) {
        next(error);
    }
})
module.exports = wikiRoutes;