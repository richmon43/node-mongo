const { Router } = require('express');
const router = Router();

const {
    renderIndex,
    renderVendedores,
    renderVentas,
    renderRastrear
} = require('../controllers/index.controller')

router.get('/', renderIndex);
router.get('/vendedores', renderVendedores);
router.get('/ventas', renderVentas);
router.get('/rastrear', renderRastrear);

module.exports = router;