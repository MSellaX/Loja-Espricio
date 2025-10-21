const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async ()=>{
        try{

            const pool = await getConnection(); //cria conexão com o BD

            let sql = 'SELECT * FROM produtos';

            const result = await pool.request().query(sql);

            return result.recordset;

            } catch (error) {
                console.error('error ao buscar produtos', error)
                throw error; //passa o erro para controller tratar
        }
    },

    buscarUm: async (idProduto) => {
        try {
            const pool = await getConnection();

            const querySQL = 'SELECT * FROM produtos WHERE idProduto = @idProduto';

            const result = await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL);
                return result.recordset;

        } catch (error) {
            console.error('erro ao buscar o produto:', error);
            throw error;
        }
    },

    inserirProduto: async (nomeProduto, precoProdutor)=>{
        try {

            const pool = await getConnection();

            let querySQL = 'INSERT INTO produtos(nomeProduto, precoProdutor) VALUES (@nomeProduto, @precoProdutor)';

            await pool.request()
            .input('nomeProduto', sql.VarChar(100), nomeProduto)
            .input('precoProdutor', sql.Decimal(10,2), precoProdutor)
            .query(querySQL);
            
        } catch (error) {
            console.error('Erro ao inserir o produto', error);
            throw error; //passa o erro para controller tratar
        }
    },

    atualizarProduto: async (idProduto, nomeProduto, precoProdutor) =>{
        try {
            const pool = await getConnection();

            const querySQL = `
                UPDATE produtos 
                SET nomeProduto = @nomeProduto,
                    precoProdutor = @precoProdutor
                WHERE idProduto = @idProduto
            `
            await pool.request()
            .input('idProduto', sql.UniqueIdentifier, idProduto)
            .input('nomeProduto', sql.VarChar(100), nomeProduto)
            .input('precoProdutor', sql.Decimal(10,2), precoProdutor)
            .query(querySQL);

        } catch (error) {
            console.error('Error ao atualizar produto:', error);
            throw error;
        }
    },

    deletarProduto: async (idProduto) => {
        try {
            const pool = await getConnection();

            const querySQL = 'DELETE FROM produtos WHERE idProduto = @idProduto';

            await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL);

        } catch (error) {
            console.error('erro ao deletar o produto:', error);
            throw error;
        }
    }
}

module.exports = {produtoModel};