import ProdutosDoCardapio from "@/entities/ProdutosDoCardapio";
import { IProdutosDoCardapioGateway } from "@/interfaces/gateway/IProdutosDoCardapio";
import { IProdutosDoCardapioRepository } from "@/interfaces/repositories/IProdutosDoCardapio";


export class ProdutosDoCardapioGateway implements IProdutosDoCardapioGateway {
    private produtosDoCardapioRepository: IProdutosDoCardapioRepository;

    constructor(ProdutosDoCardapioRepository: IProdutosDoCardapioRepository) {
        this.produtosDoCardapioRepository = ProdutosDoCardapioRepository;
    }
    async getProdutosDoCardapioGateway(cardapioId: number): Promise<ProdutosDoCardapio[]> {
        return await this.produtosDoCardapioRepository.getByIdCardapio(cardapioId);   
    }
}   