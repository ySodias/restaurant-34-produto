import { PrismaClient } from '@prisma/client';
import { ICardapioRepository } from '@/interfaces/repositories/ICardapioRepository';
import Cardapio from '@/entities/cardapio/Cardapio';
import NovoCardapio from '@/entities/cardapio/NovoCardapio';

class CardapioRepository implements ICardapioRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async get(): Promise<Cardapio[]> { 
        try {
            const getResponse = await this.prismaClient.cardapio.findMany()

            const cardapioUnknown: unknown = getResponse;
            const cardapioConvertido = cardapioUnknown as Cardapio[];
            
            return cardapioConvertido;
        }   catch (error) {
            throw error;
        }
    }

    async getCardapioPorId(id: number): Promise<Cardapio> {
        const getResponse = await this.prismaClient.cardapio.findUnique({
            where: {
                id: id,
            },
        })
        const cardapioUnknown: unknown = getResponse;
        const cardapioConvertido = cardapioUnknown as Cardapio;

        return cardapioConvertido;
    }

    /** 
    async create(novoCardapio: NovoCardapio): Promise<Cardapio> {
        try {
            const creationResponse = await this.prismaClient.cardapio.create({
                data: {
                    descricao: novoCardapio.descricao,
                    ativo: novoCardapio.ativo,
                },
            });
            const cardapioUnknown: unknown = creationResponse;
            const cardapioConvertido = cardapioUnknown as Cardapio;

            return cardapioConvertido;
        } catch (error) {
            throw error;
        }
    }

    async update(cardapio: Cardapio): Promise<Cardapio> {
        try {
            const putResponse = await this.prismaClient.cardapio.update({
                where: { id: cardapio.id },
                data: {
                    Cardapio: {
                        connect: cardapio.produtosDoCardapio.map(id => ({  produtoId_cardapioId_id: {
                            id: id,
                            produto: cardapioId,
                            produtoId: 
                            id: id // Use os valores apropriados aqui
                          } })),
                    },
                    descricao: cardapio.descricao,
                    ativo: cardapio.ativo,
                },
            });

            return {
                id: putResponse.id,
                categoriaProdutoId: produto.categoriaProdutoId,
                descricao: produto.descricao,
                preco: produto.preco,
            } as Cardapio;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<Cardapio> {
    }

    async getCardapioPorId(id: number): Promise<Cardapio> {
    }
    */
}

export default CardapioRepository;
