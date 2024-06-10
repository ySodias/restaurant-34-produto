import Cardapio from "../../entities/cardapio/Cardapio";

export interface ICardapioGateway {
    createCardapioGateway(cardapioData: Cardapio): Promise<Cardapio>;
    updateCardapioGateway(cardapioData: Cardapio): Promise<Cardapio>;
    deleteCardapioGateway(id: number): Promise<Cardapio>;
    getCardapioGateway(): Promise<Cardapio[]>;
    getCardapioPorId(id: number): Promise<Cardapio>;
}