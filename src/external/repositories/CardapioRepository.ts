import { NovoProduto } from '@/entities/produto/NovoProduto';
import { Produto } from '../../entities/produto/produto';
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
    }
    async create(novoCardapio: NovoCardapio): Promise<Cardapio> {
    }

    async update(cardapio: Cardapio): Promise<Cardapio> {
    }

    async delete(id: number): Promise<Cardapio> {
    }

    async getCardapioPorId(id: number): Promise<Cardapio> {
    }
}

export default CardapioRepository;
