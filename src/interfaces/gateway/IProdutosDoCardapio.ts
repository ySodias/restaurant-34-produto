import { ProdutosDoCardapio } from "@prisma/client";

export interface IProdutosDoCardapioGateway {
    getProdutosDoCardapioGateway(cardapioId: number): Promise<ProdutosDoCardapio[]>;
}