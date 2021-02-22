const router = require('express').Router();
let Product = require('../models/product.model');

router.router('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(4000).json('Error' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const weight = req.body.weight;
    const sellerId = req.body.sellerId;
    const description = req.body.description;

    const newStore = new Store({
        name,
        price,
        weight,
        sellerId,
        description,
    })

    newStore.save()
        .then(() => res.json('Store Created! '))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;