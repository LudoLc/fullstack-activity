const Product = require('../models/product');


exports.createProduct = (req, res, next) => {
    const product = new Product ({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        inStock: req.body.inStock,
    })
    product.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.updateProduct = (req, res, next) => {
    Product.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(201).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }))
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id})
    .then(() => res.status(201).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id})
    .then((product) => res.status(201).json({ product }))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllProduct = (req, res, next) => {
    Product.find()
    .then((products) => res.status(201).json({products}))
    .catch(error => res.status(400).json({ error }));
}