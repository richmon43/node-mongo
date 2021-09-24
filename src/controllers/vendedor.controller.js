const vendedorCtrl = {};

const Vendedor = require('../models/Vendedor');

vendedorCtrl.renderVendedorForm = (req, res) => {
    res.render('vendedores/add-vendedor');
};

vendedorCtrl.createNewVendedor = (req, res) => {
    const { title, description } = req.body;

    res.send('New Vendedor');
};

vendedorCtrl.renderVendedores = (req, res) => {
    res.send('Render Vendedores');
};

vendedorCtrl.renderEditForm = (req, res) => {
    res.send('Render Edit Form');
};

vendedorCtrl.updateVendedor = (req, res) => {
    res.send('Actualizar vendedor');
};

vendedorCtrl.deleteVendedor = (req, res) => {
    res.send('Eliminar Vendedor');
};

module.exports = vendedorCtrl;