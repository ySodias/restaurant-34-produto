import { Produto } from "../../entities/produto/produto";

export interface IProdutoPresenter {
    getProdutosPresenter(produtos: Produto[]): Produto[];
    presenterMensagemParaRespostaHttp(mensagem: string, sucesso: boolean): any;
}
