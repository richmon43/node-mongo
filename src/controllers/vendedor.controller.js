const vendedorCtrl = {};

vendedorCtrl.renderVendedorForm = (req, res) => {
    res.send('vendedor add');
};

vendedorCtrl.createNewVendedor = (req, res) => {
    res.send('New Vendedor');
}

module.exports = vendedorCtrl;