import { Produto } from "@/entities/Produto";

export interface IProdutoUseCase {
    executeGetProdutoCategoria(categoriaProdutoId: number): Promise<Produto[]>;
    executeCreation(produtoData: Produto): Promise<Produto>;
    executeDelete(id: number): Promise<Produto>;
    executeUpdate(produtoData: Produto): Promise<Produto>;
    executeGetProdutoPorId(id: number): Promise<Produto>;
}
