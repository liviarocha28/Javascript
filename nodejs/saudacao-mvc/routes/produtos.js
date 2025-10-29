const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.produtos);
router.get('/camiseta',siteController.camiseta);
router.get('/cadastrar',siteController.formCadastrar);
router.post('/cadastrar',siteController.cadastrar);


module.exports = router;