import { ProdutoGateway } from "@/gateways/produto";
import { IProdutoGateway } from "@/interfaces/gateway/IProdutoGateway";
import { mockProdutoRepository } from "./MockProdutoRepository";
import CategoriaProduto from "@/entities/CategoriaProduto";
import ProdutosDoCardapio from "@/entities/ProdutosDoCardapio";
import { Produto } from "@/entities/produto/produto";

export const mockProdutoGateway: IProdutoGateway = new ProdutoGateway(mockProdutoRepository);

let produtoCriado  = {
    id: 1,
    categoriaProdutoId: 1,
    categoriaProduto: {} as CategoriaProduto,
    produtosDoCardapio: [{}] as ProdutosDoCardapio[],
    descricao: 'teste',
    preco: 1,
    createdAt: new Date() as Date,
    updatedAt: new Date() as Date,
};

let produtoEditado = {
    id: 2,
    categoriaProdutoId: 1,
    categoriaProduto: {} as CategoriaProduto,
    produtosDoCardapio: [{}] as ProdutosDoCardapio[],
    descricao: 'Teste 1',
    preco: 1,
    createdAt: new Date() as Date,
    updatedAt: new Date() as Date,
};

let produtoDeletado  = {
    id: 3,
    categoriaProdutoId: 1,
    categoriaProduto: {} as CategoriaProduto,
    produtosDoCardapio: [{}] as ProdutosDoCardapio[],
    descricao: 'teste',
    preco: 1,
    createdAt: new Date() as Date,
    updatedAt: new Date() as Date,
};

jest.spyOn(mockProdutoGateway, "getProdutoPorId")
    .mockImplementation(async (id:number): Promise<Produto> => {
        return await mockProdutoRepository.getProdutoPorId(id)
    }).mockResolvedValue(produtoCriado);

jest.spyOn(mockProdutoGateway, "getProdutosCategoriaGateway")
    .mockImplementation(async (id:number): Promise<Produto[]> => {
    return await mockProdutoRepository.get(id)
}).mockResolvedValue([produtoCriado, produtoEditado]);

jest.spyOn(mockProdutoGateway, "createProdutoGateway")
    .mockImplementation(async (produtoData: Produto): Promise<Produto> => {
    return await mockProdutoRepository.create(produtoData)
}).mockResolvedValue(produtoCriado);

jest.spyOn(mockProdutoGateway, "updateProdutoGateway")
    .mockImplementation(async (produtoData: Produto): Promise<Produto> => {
    return await mockProdutoRepository.update(produtoData)
}).mockResolvedValue(produtoCriado);

jest.spyOn(mockProdutoGateway, "deleteProdutoGateway")
    .mockImplementation(async (id: number): Promise<Produto> => {
    return await mockProdutoRepository.delete(id)
}).mockResolvedValue(produtoDeletado);