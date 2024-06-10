import ProdutosDoCardapio from "../ProdutosDoCardapio";

export default interface Cardapio {
    id: number;
    produtosDoCardapio: ProdutosDoCardapio[];
    descricao: string;
    ativo: boolean;
    createdAt: Date;
    updatedAt: Date;
  }



