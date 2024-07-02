import { Produto } from "@/entities/produto/produto";
import CardapioRepository from "@/external/repositories/CardapioRepository";
import { CardapioGateway } from "@/gateways/cardapio";
import { ProdutoGateway } from "@/gateways/produto";
import { ProdutosDoCardapioGateway } from "@/gateways/produtosDoCardapio";
import { ICardapioController } from "@/interfaces/controllers/ICardapioController";
import { ICardapioGateway } from "@/interfaces/gateway/ICardapioGateway";
import { IProdutoGateway } from "@/interfaces/gateway/IProdutoGateway";
import { IProdutosDoCardapioGateway } from "@/interfaces/gateway/IProdutosDoCardapio";
import { ICardapioUseCase } from "@/interfaces/usecases/ICardapioUseCase";
import { CardapioPresenter } from "@/presenters/cardapio";
import { CardapioUseCase } from "@/usecases/cardapio/CardapioUseCase";
import { Cardapio } from "@prisma/client";

import { Request, Response } from 'express';
export default class CardapioController implements ICardapioController {
    private cardapioUseCase: ICardapioUseCase;
    private cardapioGateway: ICardapioGateway;
    private produtosDoCardapioGateway: IProdutosDoCardapioGateway;
    private produtoGateway: IProdutoGateway
    private cardapioPresenter = new CardapioPresenter()

    constructor(cardapioRepository: CardapioRepository, produtosDoCardapioGateway: ProdutosDoCardapioGateway, produtoGateway: ProdutoGateway) {
        this.cardapioGateway = new CardapioGateway(cardapioRepository)
        this.cardapioUseCase = new CardapioUseCase(this.cardapioGateway)
        this.produtosDoCardapioGateway = produtosDoCardapioGateway
        this.produtoGateway = produtoGateway

    }

    async getCardapio(req: Request, res: Response) {
        try {
            const getCardapio: Cardapio[] = await this.cardapioUseCase.executeGetCardapio(
            );
            const responseCardapio = getCardapio
            return res.status(200).json({responseCardapio});
        } catch (error: any) {
            return res.status(400).json({ message: error?.message });
        }
        
    }

    async getProdutosCardapio(req: Request, res: Response) {
        const { cardapioId } = req.params;
        try {
            const getCardapio: Produto[] = await this.cardapioUseCase.executeGetCardapioProdutos(Number(cardapioId), this.produtosDoCardapioGateway, this.produtoGateway);
            const responseCardapio = this.cardapioPresenter.getCardapioProdutosPresenter(getCardapio);
            return res.status(200).json({responseCardapio});
        } catch (error: any) {
            return res.status(400).json({ message: error?.message });
        }
    }

    async createCardapio(req: Request, res: Response) {

    }

    async updateCardapio(req: Request, res: Response) {

    }

    async deleteCardapio(req: Request, res: Response) {

    }
}