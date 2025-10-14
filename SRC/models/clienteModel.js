const {sql, getConnection} = require("../config/db")

const clienteModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection(); //cria conexão com o BD em config

            let sql = 'SELECT * FROM clientes'; 

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('error ao buscar produtos', error)
            throw error; 
        }
    },


    buscarCPF: async (cpfCliente) => {
        try {
            
            const pool = await getConnection();

            const querySQL = 'SELECT * FROM clientes WHERE cpfCliente = @cpfCliente;';

            const result = await pool.request()
                .input('cpfCliente', sql.Char(14), cpfCliente)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error('ERRO ao buscar produtos:', error);
            throw error; // Passa o erro para o CONTROLLER tratar
        }
    },


    inserirClientes: async (nomeCliente, cpfCliente)=>{
        try{

        const pool = await getConnection();

        let querySQL = 'INSERT INTO clientes(nomeCliente, cpfCliente) VALUES (@nomeCliente, @cpfCliente)'

        await pool.request()
        .input('nomeCliente', sql.VarChar(100), nomeCliente)
        .input('cpfCliente', sql.VarChar(13), cpfCliente)
        .query(querySQL);

        } catch (error){
            console.error('Error cadastrar novo cliente', error);
            throw error; //passar o erro para controller tratar
        }
    }
}

module.exports = {clienteModel}