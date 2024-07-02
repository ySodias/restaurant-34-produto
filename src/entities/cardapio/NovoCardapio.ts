import ProdutosDoCardapio from "../ProdutosDoCardapio";

export default interface NovoCardapio {
    produtosDoCardapio: ProdutosDoCardapio[];
    descricao: string;
    ativo: boolean;
  }