import NovoCardapio from "@/entities/cardapio/NovoCardapio";
import Cardapio from "../../entities/cardapio/Cardapio";

export interface ICardapioGateway {
    //createCardapioGateway(cardapioData: NovoCardapio): Promise<Cardapio>;
   // updateCardapioGateway(cardapioData: Cardapio): Promise<Cardapio>;
    //deleteCardapioGateway(id: number): Promise<Cardapio>;
    getCardapioGateway(): Promise<Cardapio[]>;
    getCardapioPorId(id: number): Promise<Cardapio>;
}