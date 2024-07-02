import ProdutosDoCardapio from '@/entities/ProdutosDoCardapio';
import { IProdutosDoCardapioRepository } from '@/interfaces/repositories/IProdutosDoCardapio';
import { PrismaClient } from '@prisma/client';

class ProdutosDoCardapioRepository implements IProdutosDoCardapioRepository {
    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async getByIdCardapio(cardapioId: number): Promise<ProdutosDoCardapio[]> { 
        try {
            const getResponse = await this.prismaClient.produtosDoCardapio.findMany(
                { where: {
                    cardapioId: cardapioId,
                },}
            )

            const ProdutosDoCardapioUnknown: unknown = getResponse;
            const ProdutosDoCardapioConvertido = ProdutosDoCardapioUnknown as ProdutosDoCardapio[];
            
            return ProdutosDoCardapioConvertido;
        }   catch (error) {
            throw error;
        }
    }
}

export default ProdutosDoCardapioRepository;