import { IProdutoUseCase } from "@/interfaces/usecases/IProdutoUseCase";
import { ProdutoUseCase } from "@/usecases/produto/ProdutoUseCase";
import { mockProdutoGateway } from "./mocks/MockProdutoGateway";
import ProdutosDoCardapio from "@/entities/ProdutosDoCardapio";
import CategoriaProduto from "@/entities/CategoriaProduto";

describe("ProdutoUseCases - deve criar um produto", () => {

    let produtoUseCases: IProdutoUseCase;

    beforeAll(async () => {
        produtoUseCases = new ProdutoUseCase(mockProdutoGateway);        
    });

    it("get", async () => {
        const idProduto = 3
        const produto = await produtoUseCases.executeGetProdutoPorId(idProduto);

        expect(produto).toBeDefined();
    });

    it("get produto categoria", async () => {
        const categoriaProdutoId = 3
        const produto = await produtoUseCases.executeGetProdutoCategoria(categoriaProdutoId);

        expect(produto).toBeDefined();
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
        const produto = await produtoUseCases.executeCreation(novoProduto);

        expect(produto).toBeDefined();
    });

    it("update", async () => {
        const novoProduto = {
            id: 1,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProdutoId: 1,
            categoriaProduto: {} as CategoriaProduto,
            descricao: 'Teste 1',
            preco: 1,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        }
        const produto = await produtoUseCases.executeUpdate(novoProduto);

        expect(produto).toBeDefined();
    });

    it("delete", async () => {
        const idProduto = 3
        const produto = await produtoUseCases.executeDelete(idProduto);

        expect(produto).toBeDefined();
    });
})