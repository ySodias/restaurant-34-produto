import { Produto } from '@/entities/Produto';
import ProdutoRepository from '../external/repositories/ProdutoRepository';
import prisma from './utils/jest.setup';
import { NovoProduto } from '@/entities/NovoProduto';

describe('ProdutoRepository', () => {
    it('deve buscar o produto pelo id', async () => {
        const produtoRepository = new ProdutoRepository(prisma);
        const novoProduto: NovoProduto = {
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
        };
        const responseProduto: Produto = await produtoRepository.create(novoProduto);

        const produto = await produtoRepository.getProdutoPorId(responseProduto.id);

        expect(produto).toBeDefined();
    });

    it('deve buscar o produto pela categoriaProdutoId', async () => {
        const produtoRepository = new ProdutoRepository(prisma);
        const novoProduto: NovoProduto = {
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
        };
        const responseProduto: Produto = await produtoRepository.create(novoProduto);

        const produto = await produtoRepository.get(responseProduto.categoriaProdutoId);

        expect(produto).toBeDefined();
    });

    it('deve criar um produto', async () => {
        const produtoRepository = new ProdutoRepository(prisma);
        const novoProduto: NovoProduto = {
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
        };
        const produto: Produto = await produtoRepository.create(novoProduto);
        expect(produto).toBeDefined();
        expect(produto.categoriaProdutoId).toEqual(3);
        expect(produto.descricao).toEqual('Fanta Laranja');
        expect(produto.preco).toEqual(12.0);
    });

    it('deve deletar o produto pelo id', async () => {
        const produtoRepository = new ProdutoRepository(prisma);

        const novoProduto = await produtoRepository.create({
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
        });

        await produtoRepository.delete(novoProduto.id);

        const produto = await produtoRepository.getProdutoPorId(novoProduto.id);
        expect(produto).toBeNull();
    });

    it('deve atualizar o produto', async () => {
        const produtoRepository = new ProdutoRepository(prisma);

        const novoProduto = await produtoRepository.create({
            categoriaProdutoId: 3,
            descricao: 'Fanta Laranja',
            preco: 12.0,
        });

        await produtoRepository.update({
            id: novoProduto.id,
            categoriaProdutoId: 2,
            descricao: 'Fanta Uva',
            preco: 13.0,
        });

        const produto = await produtoRepository.getProdutoPorId(novoProduto.id);
        expect(produto).toBeDefined();
        expect(produto.categoriaProdutoId).toEqual(2);
        expect(produto.descricao).toEqual('Fanta Uva');
        expect(produto.preco).toEqual(13.0);
    });
});
