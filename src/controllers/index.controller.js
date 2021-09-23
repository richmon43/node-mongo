const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderVendedores = (req, res) => {
    res.render('vendedores');
};

indexCtrl.renderVentas = (req, res) => {
    res.render('ventas');
};

indexCtrl.renderRastrear = (req, res) => {
    res.render('rastrear');
};

module.exports = indexCtrl;