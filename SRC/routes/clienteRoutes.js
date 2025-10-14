const express = require("express");
const router = express.Router();
const {clienteController} = require("../controllers/clienteController");

//GET /clientes -> Lista todos os clientes
router.get("/clientes", clienteController.listarClientes);

//POST /clientes -> registra um novo cliente
router.post("/clientes", clienteController.registrarCliente);

module.exports = {clienteRoutes: router};