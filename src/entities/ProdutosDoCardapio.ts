
import Cardapio from "./cardapio/Cardapio";
import { Produto } from "./produto/produto";


interface ProdutosDoCardapio {
    id: number;
    produto: Produto;
    produtoId: number;
    cardapio: Cardapio;
    cardapioId: number;
    createdAt: Date;
    updatedAt: Date;
}

export default ProdutosDoCardapio;