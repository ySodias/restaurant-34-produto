import { Produto } from "./produto";

interface CategoriaProduto {
    id: number;
    produto?: Produto[];
    enumerador: string;
    createdAt: Date;
    updatedAt: Date;
}

export default CategoriaProduto;