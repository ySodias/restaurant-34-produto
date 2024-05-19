import { NovoProduto } from '@/entities/NovoProduto';
import ProdutoRepository from '@/external/repositories/ProdutoRepository';
import { prisma } from '../utils/jest.setup';
import { IProdutoRepository } from '@/interfaces/repositories/IProdutoRepository';

const mockProdutoRepository: IProdutoRepository = new ProdutoRepository(prisma);

jest.spyOn(mockProdutoRepository, 'create').mockImplementation(async (novoProduto: NovoProduto) => {
    return await mockProdutoRepository.create(novoProduto);
});
