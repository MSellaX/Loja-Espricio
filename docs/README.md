## API Reference 

### Produtos


#### GET /produtos
- **Descrição**: Obtém uma lista de produtos
- **Response**: Array de Produtos

#### POST /Produtos
- **Descrição**: Cia um novo produto
- **Body**: 
```
{
    "nomeProduto": "produtoExemplo",
    "precoProdutor": 0.00
}
``` 
- **Response**: 
```
{
    "messagem": "Produto cadastrado com sucesso"
}
```

## API reference

### Clientes

#### GET /clientes
- **Descrição**: Gera a lista de clientes
- **Response**: Array de clientes

#### POST /Clientes
- **Descrição**: registra um novo Cliente
- **Body**: 
```
{
    "nomeCliente": "clienteExemplo",
    "cpfCliente": "cpfExemplo"
}
``` 
- **Response**: 
```
{
    "messagem": "cliente cadastrado com sucesso!"
}
```