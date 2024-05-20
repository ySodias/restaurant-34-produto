
import Cardapio from "./Cardapio";
import { Produto } from "./produto";


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