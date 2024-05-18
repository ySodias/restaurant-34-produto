import ProdutoRepository from '../external/repositories/ProdutoRepository';
import prisma from './utils/jest.setup';

describe("ProdutoRepository", () => {
    it("deve buscar o produto pelo id", async () => {
        const produtoRepository = new ProdutoRepository(prisma);
        const produto = await produtoRepository.getProdutoPorId(1);
        expect(produto).toBeDefined();
    });
});