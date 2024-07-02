import { Produto } from '../entities/produto/produto';
import ProdutoRepository from '../external/repositories/ProdutoRepository';
import { NovoProduto } from '@/entities/produto/NovoProduto';
import { IProdutoRepository } from '@/interfaces/repositories/IProdutoRepository';
import { prismaMock } from './mocks/MockPrisma';
import ProdutosDoCardapio from '../entities/ProdutosDoCardapio';
import CategoriaProduto from '@/entities/CategoriaProduto';

describe('ProdutoRepository', () => {

    let produtoRepository: IProdutoRepository

    beforeAll(async () => {
        produtoRepository = new ProdutoRepository(prismaMock);        
    });


    it('deve buscar o produto pelo id', async () => {
        const mockProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        let categoriaProdutoId = 3
        prismaMock.produto.findUnique.mockResolvedValue(mockProduto)
        const produto = await produtoRepository.getProdutoPorId(categoriaProdutoId);

        expect(produto).toBeDefined();
    });

    it('deve buscar o produto pelo id com falha', async () => {
        let categoriaProdutoId = 3
        prismaMock.produto.findUnique.mockRejectedValue(new Error('Error'))
        await expect(
            produtoRepository.getProdutoPorId(categoriaProdutoId)
           ).rejects.toThrow()
    });

    it('deve criar o produto', async () => {
        const novoProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        prismaMock.produto.create.mockResolvedValue(novoProduto)
        const produto: Produto = await produtoRepository.create(novoProduto);

        expect(produto).toBeDefined();
    });

    it('deve criar o produto com falha', async () => {
        const novoProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        prismaMock.produto.create.mockRejectedValue(new Error('Error'))
        await expect(
            produtoRepository.create(novoProduto)
           ).rejects.toThrow()
    });


    it('deve buscar um produto por categoria', async () => {
        const mockProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        const categoriaProdutoId = 3;
        prismaMock.produto.findMany.mockResolvedValue([mockProduto]);
        const produto = await produtoRepository.get(categoriaProdutoId);
        expect(produto).toBeDefined();
        expect(produto[0].categoriaProdutoId).toEqual(3);
        expect(produto[0].descricao).toEqual('Fanta Laranja');
        expect(produto[0].preco).toEqual(12.0);
    });

    it('deve buscar um produto por categoria com falha', async () => {
        const categoriaProdutoId = 3;
        prismaMock.produto.findMany.mockRejectedValue(new Error('Error'))
        await expect(
            produtoRepository.get(categoriaProdutoId)
           ).rejects.toThrow()
    });

    it('deve deletar o produto pelo id', async () => {
        const mockProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        const idProduto = 1;
        prismaMock.produtosDoCardapio.deleteMany;
        prismaMock.produto.delete.mockResolvedValue(mockProduto);
        const produto = await produtoRepository.delete(idProduto);

        expect(produto).toBeDefined();
    });

    it('deve deletar o produto pelo id com falha', async () => {
        const idProduto = 1;
        prismaMock.produtosDoCardapio.deleteMany.mockRejectedValue(new Error('Error'));
        await expect(
            produtoRepository.delete(idProduto)
           ).rejects.toThrow()
    });


    it('deve atualizar o produto', async () => {

        const mockProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Uva',
            preco: 13.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;

        prismaMock.produto.update.mockResolvedValue(mockProduto);
        const produto = await produtoRepository.update(mockProduto);

        expect(produto).toBeDefined();
        expect(produto.categoriaProdutoId).toEqual(3);
        expect(produto.descricao).toEqual('Fanta Uva');
        expect(produto.preco).toEqual(13.0);
    });
    
    it('deve atualizar o produto com falha', async () => {
        const mockProduto  = {
            id: 1,
            categoriaProdutoId: 3,
            descricao: 'Fanta Uva',
            preco: 13.0,
            produtosDoCardapio: [{}] as ProdutosDoCardapio[],
            categoriaProduto: {} as CategoriaProduto,
            createdAt: new Date() as Date,
            updatedAt: new Date() as Date
        } as Produto;
        prismaMock.produtosDoCardapio.update.mockRejectedValue(new Error('Error'));
        await expect(
            produtoRepository.update(mockProduto)
           ).rejects.toThrow()
    });
});
