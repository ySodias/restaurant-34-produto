import { expect } from 'chai';
import { Given, Then, When, AfterAll} from '@cucumber/cucumber';
import server from '../../../../dist/server.js';


let response;
let produtoRequest;

Given('Eu tenho um produto válido', function () {
    produtoRequest = {
      id: 1,
      categoriaProdutoId: 3,
      descricao: 'Fanta Laranja',
      preco: 12.0,
      produtosDoCardapio: [{}],
      categoriaProduto: {},
      createdAt: new Date(),
      updatedAt: new Date()
  };
});

When('Eu submeto os dados para criar o produto', async function () {

    response = await server.default.post('/api/produto').send(produtoRequest)

});

Then('o produto deve ser criado com sucesso', function () {
    expect(response.status).to.equal(200);
});