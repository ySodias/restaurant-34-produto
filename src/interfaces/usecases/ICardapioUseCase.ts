import Cardapio from "../../entities/cardapio/Cardapio";

export interface ICardapioUseCase {
    executeGetCardapio(): Promise<Cardapio[]>;
    executeCreation(cardapioData: Cardapio): Promise<Cardapio>;
    executeDelete(id: number): Promise<Cardapio>;
    executeUpdate(cardapioData: Cardapio): Promise<Cardapio>;
    executeGetCardapioPorId(id: number): Promise<Cardapio>;
}