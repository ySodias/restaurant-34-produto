import NovoCardapio from "@/entities/cardapio/NovoCardapio";
import Cardapio from "../../entities/cardapio/Cardapio";
import { IProdutosDoCardapioGateway } from "../gateway/IProdutosDoCardapio";
import { IProdutoGateway } from "../gateway/IProdutoGateway";
import { Produto } from "@/entities/produto/produto";

export interface ICardapioUseCase {
    executeGetCardapio(): Promise<Cardapio[]>;
    executeGetCardapioProdutos(id: number, produtosDoCardapioGateway: IProdutosDoCardapioGateway, produtoGateway: IProdutoGateway): Promise<Produto[]>;
    /**
    executeCreation(cardapioData: NovoCardapio): Promise<Cardapio>;
    executeDelete(id: number): Promise<Cardapio>;
    executeUpdate(cardapioData: Cardapio): Promise<Cardapio>;
    executeGetCardapioPorId(id: number): Promise<Cardapio>;
     */
}