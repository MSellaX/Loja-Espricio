const express = require("express");
const router = express.Router();
const {produtoController} = require("../controllers/produtoController");

//GET /produtos -> Lista todos os produtos
router.get("/produtos", produtoController.listarProdutos);

module.exports = {produtosRoutes: router};