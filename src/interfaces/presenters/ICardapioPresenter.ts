import Cardapio from "../../entities/cardapio/Cardapio";

export interface ICardapioPresenter {
    getCardapioPresenter(cardapios: Cardapio[]): Cardapio[];
    presenterMensagemParaRespostaHttp(mensagem: string, sucesso: boolean): any;
}
