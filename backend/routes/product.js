const express = require('express');
const productControllers = require('../controllers/product.js');

const router = express.Router();

// routes CRUD 

router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);
router.get('/:id', productControllers.getOneProduct);
router.get('/', productControllers.getAllProduct);



module.exports = router; // exporte les routers du fichier product