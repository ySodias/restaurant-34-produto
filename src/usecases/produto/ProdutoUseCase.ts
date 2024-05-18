import { IProdutoUseCase } from "@/interfaces/usecases/IProdutoUseCase";
import { IProdutoGateway } from "@/interfaces/gateway/IProdutoGateway";
import { Produto } from "@/entities/Produto";

export class ProdutoUseCase implements IProdutoUseCase {
    private produtoGateway: IProdutoGateway;

    constructor(produtoGateway: IProdutoGateway) {
        this.produtoGateway = produtoGateway;
    }

    async executeGetProdutoCategoria(categoriaProdutoId: number): Promise<Produto[]> {
        try {
            return await this.produtoGateway.getProdutosCategoriaGateway(categoriaProdutoId);
        } catch (error) {
            throw error;
        }
    }

    async executeCreation(produtoData: Produto): Promise<Produto> {
        try {
            const novoCliente = await this.produtoGateway.createProdutoGateway(
                produtoData
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeUpdate(produtoData: Produto): Promise<Produto> {
        try {
            const novoCliente = await this.produtoGateway.updateProdutoGateway(
                produtoData
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeDelete(id: number): Promise<Produto> {
        try {
            const novoCliente = await this.produtoGateway.deleteProdutoGateway(
                id
            );

            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async executeGetProdutoPorId(id:number): Promise<Produto> {
        try {
            return await this.produtoGateway.getProdutoPorId(id);
        } catch (error) {
            throw error;
        }
    }
}
