import NovoCardapio from "@/entities/cardapio/NovoCardapio";
import Cardapio from "../../entities/cardapio/Cardapio";
import { ICardapioGateway } from "@/interfaces/gateway/ICardapioGateway";
import { ICardapioRepository } from "@/interfaces/repositories/ICardapioRepository";

export class CardapioGateway implements ICardapioGateway {
    private cardapioRepository: ICardapioRepository;

    constructor(CardapioRepository: ICardapioRepository) {
        this.cardapioRepository = CardapioRepository;
    }
    async getCardapioGateway(): Promise<Cardapio[]> {
        return await this.cardapioRepository.get();   
    }

    async getCardapioPorId(id: number): Promise<Cardapio> {
        return await this.cardapioRepository.getCardapioPorId(id)
    }
    /** 
    async createCardapioGateway(CardapioData: NovoCardapio): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioRepository.create(
                CardapioData
            );

            return novoCliente;
        } catch (error) {
            throw new Error("Erro ao criar Cardapio!");
        }
    }

    async updateCardapioGateway(CardapioData: Cardapio): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioRepository.update(
                CardapioData
            );

            return novoCliente;
        } catch (error) {
            throw new Error("Erro ao atualizar o Cardapio!");
        }
    }

    async deleteCardapioGateway(id: number): Promise<Cardapio> {
        try {
            const novoCliente = await this.CardapioRepository.delete(id);
            return novoCliente;
        } catch (error) {
            console.log("error", error);
            throw new Error("Erro ao excluir o Cardapio!");
        }
    }
    */

    /**
    async getCardapioPorId(id:number): Promise<Cardapio> {
        return await this.CardapioRepository.getCardapioPorId(id);
    }
     */
}
