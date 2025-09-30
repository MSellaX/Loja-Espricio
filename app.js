const express = require("express");
const app = express();
const {produtosRoutes} = require("./SRC/routes/produtoRoutes")
const PORT = 8081;

app.use(express.json());

app.use('/', produtosRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});