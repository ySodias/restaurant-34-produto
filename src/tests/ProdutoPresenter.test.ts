import { IProdutoPresenter } from "@/interfaces/presenters/IProdutoPresenter";
import { ProdutoPresenter } from "@/presenters/produto";
import CategoriaProduto from "@/entities/CategoriaProduto";
import ProdutosDoCardapio from "@/entities/ProdutosDoCardapio";

describe("ProdutoUseCases - deve criar um produto", () => {

    let produtoPresenter: IProdutoPresenter;

    beforeAll(async () => {
        produtoPresenter = new ProdutoPresenter();        
    });

    it("get", async () => {
        const novoProduto = {
            id: 1,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProdutoId: 1,
            categoriaProduto: {} as CategoriaProduto,
            descricao: 'Teste',
            preco: 1,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        }
        const produto = await produtoPresenter.getProdutosPresenter([novoProduto]);

        expect(produto).toBeDefined();
    });

    it("httpResposta", async () => {
        const message = 'Teste'
        const sucesso = true
        const produto = await produtoPresenter.presenterMensagemParaRespostaHttp(message, sucesso);

        expect(produto).toBeDefined();
    });

    it("httpResposta Fail", async () => {
        const message = 'Teste'
        const sucesso = false
        const produto = await produtoPresenter.presenterMensagemParaRespostaHttp(message, sucesso);

        expect(produto).toBeDefined();
    });
})