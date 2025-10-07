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
    },

    // -----------------------//
    //Criar um novo produto---//
    //Post /produtos----------//
    /*
        {
            "nomeProduto": "valor",
            "precoProduto": 0.00
        }
    */
    //------------------------//

    criarProduto: async (req, res)=>{
        try {
            
            const {nomeProduto, precoProdutor} = req.body;
            
            if(nomeProduto == undefined || precoProdutor == undefined || isNaN(precoProdutor)){
                return res.status(400).json({erro: 'campos OBRIGATÓRIOS não preenchidos'})
            }
   
            await produtoModel.inserirProduto(nomeProduto, precoProdutor);

            res.status(201).json({message: 'produto cadastrado com sucesso!'});

        } catch (error) {
            console.error('erro ao cadastrar o produto!', error)
            res.status(500).json({error:'erro no servidor ao cadastrar o produto'});
        }
    }
}

module.exports = {produtoController};