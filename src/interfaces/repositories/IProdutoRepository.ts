import { NovoProduto } from '@/entities/produto/NovoProduto';
import { Produto } from '../../entities/produto/produto';

export interface IProdutoRepository {
    create(novoProduto: NovoProduto): Promise<Produto>;
    update(novoProduto: Produto): Promise<Produto>;
    delete(id: number): Promise<Produto>;
    get(categoriaProdutoId: number): Promise<Produto[]>;
    getProdutoPorId(id: number): Promise<Produto>;
}
