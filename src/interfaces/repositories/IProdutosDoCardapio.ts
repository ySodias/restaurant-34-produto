import ProdutosDoCardapio from "@/entities/ProdutosDoCardapio";



export interface IProdutosDoCardapioRepository {
    getByIdCardapio(cardapioId: number): Promise<ProdutosDoCardapio[]>;
}
