import { NovoProduto } from '@/entities/produto/NovoProduto';
import { Produto } from '../../entities/produto/produto';
import { IProdutoRepository } from '@/interfaces/repositories/IProdutoRepository';
import { PrismaClient } from '@prisma/client';

class ProdutoRepository implements IProdutoRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async get(categoriaProdutoId: number): Promise<Produto[]> {
        try {
            const getResponse = await this.prismaClient.produto.findMany({
                where: {
                    categoriaProdutoId: categoriaProdutoId,
                },
            });

            const produtoUnknown: unknown = getResponse;
            const produtosConvertidos = produtoUnknown as Produto[];

            return produtosConvertidos;
        } catch (error) {
            throw error;
        }
    }
    async create(produto: NovoProduto): Promise<Produto> {
        try {
            const creationResponse = await this.prismaClient.produto.create({
                data: {
                    categoriaProdutoId: produto.categoriaProdutoId,
                    descricao: produto.descricao,
                    preco: produto.preco,
                },
            });

            const produtoUnknown: unknown = creationResponse;
            const produtoConvertido = produtoUnknown as Produto;

            return produtoConvertido;
        } catch (error) {
            throw error;
        }
    }

    async update(produto: Produto): Promise<Produto> {
        try {
            const putResponse = await this.prismaClient.produto.update({
                where: { id: produto.id },
                data: {
                    categoriaProdutoId: produto.categoriaProdutoId,
                    descricao: produto.descricao,
                    preco: produto.preco,
                },
            });

            return {
                id: putResponse.id,
                categoriaProdutoId: produto.categoriaProdutoId,
                descricao: produto.descricao,
                preco: produto.preco,
            } as Produto;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<Produto> {
        try {
            await this.prismaClient.produtosDoCardapio.deleteMany({
                where: {
                    produtoId: id,
                },
            });

            const deleteResponse = await this.prismaClient.produto.delete({
                where: {
                    id: id,
                },
            });

            const produtoUnknown: unknown = deleteResponse;
            const produtoAtualizado = produtoUnknown as Produto;

            return produtoAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async getProdutoPorId(id: number): Promise<Produto> {
        try {
            const produtoBuscado = await this.prismaClient.produto.findUnique({
                where: {
                    id: id,
                },
            });

            const produtoUnknown: unknown = produtoBuscado;
            const produtoConvertido = produtoUnknown as Produto;

            return produtoConvertido;
        } catch (error) {
            throw error;
        }
    }
}

export default ProdutoRepository;
