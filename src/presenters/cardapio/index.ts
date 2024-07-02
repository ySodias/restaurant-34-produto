import Cardapio from "@/entities/cardapio/Cardapio";
import CardapioProdutos from "@/entities/cardapio/CardapioProdutos";
import { Produto } from "@/entities/produto/produto";
import { ICardapioPresenter } from "@/interfaces/presenters/ICardapioPresenter";


export class CardapioPresenter implements ICardapioPresenter {
    getCardapiosPresenter(cardapios: Cardapio[]): Cardapio[] {
        return cardapios
    }
    getCardapioProdutosPresenter(produtos: Produto[]): CardapioProdutos{
        let data = {
            produtos: produtos.map((produto)=>{
                return {
                    nome: produto.descricao,
                    preco: produto.preco
                }
            })
        }
        return data
    }
    presenterMensagemParaRespostaHttp(mensagem: string, sucesso: boolean): any {
        return {
            status: sucesso ? "sucesso" : "erro",
            mensagem: mensagem,
        };
    }
}