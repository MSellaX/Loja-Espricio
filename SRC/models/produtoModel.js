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
    }
}

module.exports = {produtoModel};