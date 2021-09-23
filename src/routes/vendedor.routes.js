const { Router } = require('express');
const router = Router();

const { renderVendedorForm, createNewVendedor } = require('../controllers/vendedor.controller');

// New Vendedor
router.get('/vendedor/add', renderVendedorForm);
router.post('/vendedor/add', createNewVendedor);

// Get all vendedor

module.exports = router;