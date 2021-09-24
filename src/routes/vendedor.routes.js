const { Router } = require("express");
const router = Router();

const {
  renderVendedorForm,
  createNewVendedor,
  renderVendedores,
  renderEditForm,
  updateVendedor,
  deleteVendedor
} = require("../controllers/vendedor.controller");

// Nuevo Vendedor
router.get("/vendedores/add", renderVendedorForm);
router.post("/vendedores/new-vendedor", createNewVendedor);

// Obtener todos vendedores
router.get("/vendedores", renderVendedores);

// Editar vendedor
router.get("/vendedores/edit/:id", renderEditForm);
router.put("/vendedores/edit/:id", updateVendedor);

// Eliminar vendedor
router.delete("/vendedores/delete/:id", deleteVendedor);

// Exportamos el modulo
module.exports = router;
