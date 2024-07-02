import { ICardapioUseCase } from "@/interfaces/usecases/ICardapioUseCase";
import { ICardapioGateway } from "@/interfaces/gateway/ICardapioGateway";
import Cardapio from "../../entities/cardapio/Cardapio";
import NovoCardapio from "@/entities/cardapio/NovoCardapio";
import CardapioRepository from "@/external/repositories/CardapioRepository";
import ProdutosDoCardapioRepository from "@/external/repositories/ProdutosDoCardapioRepository";
import { IProdutosDoCardapioGateway } from "@/interfaces/gateway/IProdutosDoCardapio";
import { IProdutoGateway } from "@/interfaces/gateway/IProdutoGateway";
import { Produto } from "@/entities/produto/produto";

export class CardapioUseCase implements ICardapioUseCase {
    private cardapioGateway: ICardapioGateway; 

    constructor(CardapioGateway: ICardapioGateway) {
        this.cardapioGateway = CardapioGateway;
    }

    async executeGetCardapio(): Promise<Cardapio[]> {
        try {
            return await this.cardapioGateway.getCardapioGateway();
        } catch (error) {
            throw error;
        }
    }

    async executeGetCardapioProdutos(id: number, produtosDoCardapioGateway: IProdutosDoCardapioGateway, produtoGateway: IProdutoGateway): Promise<Produto[]> {
        try {
            let cardapio = await this.executeGetCardapioById(id)
            let produtosDoCardapio = await produtosDoCardapioGateway.getProdutosDoCardapioGateway(cardapio.id)
            let produtos = await Promise.all(
                produtosDoCardapio.map(async (produtoDoCardapio) => {
                  return await produtoGateway.getProdutoPorId(produtoDoCardapio.produtoId);
                })
              );
            return produtos
        } catch (error) {
            throw error;
        }
    }

    async executeGetCardapioById(id: number): Promise<Cardapio> {
        try {
            let cardapio = await this.cardapioGateway.getCardapioPorId(id);
            if (!cardapio) {
                throw new Error('Cardapio nao encontrado')
            }
            return cardapio
        } catch (error) {
            throw error;
        }
    }

    /** 

    async executeCreation(CardapioData: NovoCardapio): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioGateway.createCardapioGateway(
                CardapioData
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeUpdate(CardapioData: Cardapio): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioGateway.updateCardapioGateway(
                CardapioData
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeDelete(id: number): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioGateway.deleteCardapioGateway(
                id
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeGetCardapioPorId(id:number): Promise<Cardapio> {
        try {
            return await this.CardapioGateway.getCardapioPorId(id);
        } catch (error) {
            throw error;
        }
    }
    */
}
