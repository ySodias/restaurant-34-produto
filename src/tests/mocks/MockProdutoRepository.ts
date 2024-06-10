import ProdutoRepository from "../../external/repositories/ProdutoRepository";
import { IProdutoRepository } from "@/interfaces/repositories/IProdutoRepository";
import { prismaMock } from "./MockPrisma";
import { NovoProduto } from "../../entities/produto/NovoProduto";
import CategoriaProduto from "../../entities/CategoriaProduto";
import ProdutosDoCardapio from "../../entities/ProdutosDoCardapio";
import { Produto } from "../../entities/produto/produto";

export const mockProdutoRepository: IProdutoRepository = new ProdutoRepository(prismaMock);

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



jest.spyOn(mockProdutoRepository, "create")
    .mockImplementation(async (produto: NovoProduto): Promise<Produto> => {
        return await prismaMock.produto.create({
            data: {
                categoriaProdutoId: produto.categoriaProdutoId,
                descricao: produto.descricao,
                preco: produto.preco,
            },
        }) as Produto;
    }).mockResolvedValue(produtoCriado);

jest.spyOn(mockProdutoRepository, "update")
    .mockImplementation(async (produto: Produto): Promise<Produto> => {
        produtoCriado = produto
        return await prismaMock.produto.update(
            {
                where: { id: produto.id },
                data: {
                    categoriaProdutoId: produto.categoriaProdutoId,
                    descricao: produto.descricao,
                    preco: produto.preco,
                },
            }
        ) as Produto;
}).mockResolvedValue(produtoEditado);

jest.spyOn(mockProdutoRepository, "delete")
    .mockImplementation(async (id: number): Promise<Produto> => {
        prismaMock.produto.deleteMany
        return await prismaMock.produto.delete(
            { where: {
                id: id,
            }}
        ) as Produto;
}).mockResolvedValue(produtoDeletado);

jest.spyOn(mockProdutoRepository, "getProdutoPorId")
    .mockImplementation(async (id: number): Promise<Produto> => {
        return await prismaMock.produto.findUnique({
            where: {
                id: id,
            },
        }
        ) as Produto;
}).mockResolvedValue(produtoCriado);

jest.spyOn(mockProdutoRepository, "get")
    .mockImplementation(async (categoriaProdutoId: number): Promise<Produto[]> => {
        return await prismaMock.produto.findMany({
            where: {
                categoriaProdutoId: categoriaProdutoId,
            }
        }) as Produto[];
}).mockResolvedValue([produtoCriado]);
