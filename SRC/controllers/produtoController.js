const { produtoModel } = require("../models/produtoModel");

const produtoController = {
    // -----------------------//
    //LISTAR TODOS OS PRODUTOR//
    //GET /produtos-----------//
    //------------------------//

    listarProdutos: async (req, res) => {
        try {
            const { idProduto } = req.query;
          
            const produtos = await produtoModel.buscarTodos();

            if (idProduto) {
                if (idProduto.length != 36) {
                    return res.status(404).json({ erro: 'ID do Produto não é valido!' });
                }
                const produto = await produtoModel.buscarUm(idProduto);

                return res.status(200).json(produto);


            }


            res.status(200).json(produtos);
        } catch (error) {
            console.error('erro ao listar produtos:', error);
            res.status(500).json({ message: 'Error ao buscar produto' })
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

    criarProduto: async (req, res) => {
        try {

            const { nomeProduto, precoProdutor } = req.body;

            if (nomeProduto == undefined || precoProdutor == undefined || isNaN(precoProdutor)) {
                return res.status(400).json({ erro: 'campos OBRIGATÓRIOS não preenchidos' })
            }

            await produtoModel.inserirProduto(nomeProduto, precoProdutor);

            res.status(201).json({ message: 'produto cadastrado com sucesso!' });

        } catch (error) {
            console.error('erro ao cadastrar o produto!', error)
            res.status(500).json({ error: 'erro no servidor ao cadastrar o produto' });
        }
    },

    // ---------------------------------------//
    //atualizar um produto--------------------//
    //PUT /produtos/idProduto-----------------//
    //nomeProduto e precoProduto são opcionais//
    /*
        {
            "nomeProduto": "valor",
            "precoProduto": 0.00
        }
    */
    //----------------------------------------//

    atualizarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;
            const { nomeProduto, precoProdutor } = req.body;

            const produto = await produtoModel.buscarUm(idProduto);

            if (idProduto.length != 36) {
                return res.status(404).json({ erro: 'Produto não encontrado!' });
            }

            const produtoAtual = produto[0];

            const nomeAtualizado = nomeProduto ?? produtoAtual.nomeProduto;

            const precoAtualizado = precoProdutor ?? produtoAtual.precoProdutor;

            await produtoModel.atualizarProduto(idProduto, nomeAtualizado, precoAtualizado)

            res.status(200).json({ message: 'Produto atualizado com sucesso!' })
        } catch (error) {
            console.error('Erro ao atualizar o produto:', error);
            res.status(500).json({ erro: 'Erro no servidor ao atualizar o produto' });
        }
    },

    deletarProduto: async (req, res) => {
        try {

            const { idProduto } = req.params;

            if (idProduto.length != 36) {
                return res.status(404).json({ erro: 'ID do Produto não é valido!' });
            }

            const produto = await produtoModel.buscarUm(idProduto);
            if (!produto || produto.length !== 1) {
                return res.status(404).json({ erro: 'Produto não encontrado!' })
            }

            await produtoModel.deletarProduto(idProduto);

            res.status(200).json({ message: "Produto deletado com sucesso!" })

        } catch (error) {
            console.error('Erro ao deletar produto', error);
            res.status(500).json({ erro: "Erro no servidor ao deletar o produto" });
        }
    }
}

module.exports = { produtoController };