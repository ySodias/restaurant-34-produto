import Cardapio from "../../entities/cardapio/Cardapio";
import NovoCardapio from "../../entities/cardapio/NovoCardapio";


export interface ICardapioRepository {
    get(): Promise<Cardapio[]>;
    getCardapioPorId(id: number): Promise<Cardapio>;
    /*
    update(cardapio: Cardapio): Promise<Cardapio>;
    delete(id: number): Promise<Cardapio>;
    create(novoCardapio: NovoCardapio): Promise<Cardapio>;
    getCardapioPorId(id: number): Promise<Cardapio>;
    */
}
