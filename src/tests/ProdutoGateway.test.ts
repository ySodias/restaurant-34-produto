import { ProdutoGateway } from "@/gateways/produto";
import { IProdutoGateway } from "@/interfaces/gateway/IProdutoGateway";
import { mockProdutoRepository } from "./mocks/MockProdutoRepository";
import ProdutosDoCardapio from "../entities/ProdutosDoCardapio";
import CategoriaProduto from "@/entities/CategoriaProduto";



describe("ProdutoGateway - deve criar um produto", () => {
    let produtoGateway: IProdutoGateway;

    beforeAll(async () => {
        produtoGateway = new ProdutoGateway(mockProdutoRepository);        
    });


    it("create", async () => {
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
        const produto = await produtoGateway.createProdutoGateway(novoProduto);

        expect(produto).toBeDefined();
    });

    it("update", async () => {
        const editProduto = {
            id: 1,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProdutoId: 1,
            categoriaProduto: {} as CategoriaProduto,
            descricao: 'Teste 1',
            preco: 1,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        }
        const produto = await produtoGateway.updateProdutoGateway(editProduto);

        expect(produto).toBeDefined();
    });

    it("delete", async () => {
        const idProduto = 3
        const produto = await produtoGateway.deleteProdutoGateway(idProduto);

        expect(produto).toBeDefined();
    });

    it("get", async () => {
        const idProduto = 3
        const produto = await produtoGateway.getProdutosCategoriaGateway(idProduto);

        expect(produto).toBeDefined();
    });

    it("get", async () => {
        const idProduto = 3
        const produto = await produtoGateway.getProdutoPorId(idProduto);

        expect(produto).toBeDefined();
    });
})