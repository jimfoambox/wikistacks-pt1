const router = require("express").Router();
const layout = require('../views/layout');
const models = require('../models')
const { main, addPage, editPage, wikiPage } = require("../views");
const Page = models.Page;
const User = models.User;

router.get('/', async (req, res, next) => {
    try {

        const pages = await Page.findAll();
        res.send(main());
    } catch(error) {
        next(error);
    }
});

router.post('/', async (req,res, next) => {
    try {
        res.json(req.body);
        }
        
    catch(error) {
        next(error);
    }
});

router.get('/add', (req,res, next) =>{
    try {
        res.send(addPage());
    } catch(error) {
        next(error);
    }
})


module.exports = router;