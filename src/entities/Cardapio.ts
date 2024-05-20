import ProdutosDoCardapio from "./ProdutosDoCardapio";

interface Cardapio {
    id: number;
    produtosDoCardapio: ProdutosDoCardapio[];
    descricao: string;
    ativo: boolean;
    createdAt: Date;
    updatedAt: Date;
  
  }

export default Cardapio;