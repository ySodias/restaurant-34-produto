
import { Produto } from "@/entities/produto/produto";
import Cardapio from "../../entities/cardapio/Cardapio";

export interface ICardapioPresenter {
    getCardapiosPresenter(cardapios: Cardapio[]): Cardapio[];
    getCardapioProdutosPresenter(produtos: Produto[]): any;
    presenterMensagemParaRespostaHttp(mensagem: string, sucesso: boolean): any;
}
