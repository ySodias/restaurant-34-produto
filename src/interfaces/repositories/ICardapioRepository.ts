import Cardapio from "../../entities/cardapio/Cardapio";
import NovoCardapio from "../../entities/cardapio/NovoCardapio";


export interface ICardapioRepository {
    create(novoCardapio: NovoCardapio): Promise<Cardapio>;
    update(cardapio: Cardapio): Promise<Cardapio>;
    delete(id: number): Promise<Cardapio>;
    get(): Promise<Cardapio[]>;
    getCardapioPorId(id: number): Promise<Cardapio>;
}
