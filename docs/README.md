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