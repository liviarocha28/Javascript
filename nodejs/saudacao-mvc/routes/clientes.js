const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.clientes);
router.post('/login', clientesController.login);
router.get('/login', clientesController.formlogin);



module.exports = router;