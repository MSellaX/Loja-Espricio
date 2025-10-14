const {clienteModel} = require ("../models/clienteModel");

const clienteController = {
    //DOCUMENTAÇÃO!

    listarClientes: async (req, res)=>{
        try{
            const clientes = await clienteModel.buscarTodos();
            
            res.status(200).json(clientes)
        } catch (error){
            console.error('erro ao listar os clientes:', error);
            res.status(500).json({message: 'Error ao consultar o cliente'})
        }
    },

//DOCUMENTAÇÃO!

    registrarCliente: async (req, res)=>{
        try {

            const{nomeCliente,cpfCliente} = req.body;

            if(nomeCliente == undefined || cpfCliente == undefined || isNaN(cpfCliente)){
                return res.status(400).json({erro: 'campos OBRIGATÓRIOS não preenchidos'})
            }

            const result = await clienteModel.buscarCPF (cpfCliente);
            if (result.length > 0) {
                return res.status(409).json({ message: 'CPF ja cadastrado'})
            }
   
            await clienteModel.inserirClientes(nomeCliente, cpfCliente);

            res.status(201).json({message: 'cliente cadastrado com sucesso!'});

        } catch (error) {
            console.error('erro ao cadastrar o cliente!', error);
            res.status(500).json({error:'erro no servidor ao cadastrar o cliente'});
        
        }
    }
}

module.exports = {clienteController};