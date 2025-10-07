const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async ()=>{
        try{

            const pool = await getConnection(); //cria conexão com o BD

            let sql = 'SELECT * FROM Produtos';

            const result = await pool.request().query(sql);

            return result.recordset;

            } catch (error) {
                console.error('error ao buscar produtos', error)
                throw error; //passa o erro para controller tratar
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
    }
}

module.exports = {produtoModel};