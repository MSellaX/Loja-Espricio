const {produtoModel} = require("../models/produtomodel");

const produtoController = {
    // -----------------------//
    //LISTAR TODOS OS PRODUTOR//
    //GET /produtos-----------//
    //------------------------//

    listarProdutos: async (req, res)=>{
        try{
            const produtos = await produtoModel.buscarTodos();
            
            res.status(200).json(produtos)
        } catch (error){
            console.error('erro ao listar produtos:', error);
            res.status(500).json({message: 'Error ao buscar produto'})
        }
    }
}

module.exports = {produtoController};