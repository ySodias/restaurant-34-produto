/* eslint-disable */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    // CategoriaProduto
    const categoriaProduto1 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Lanche' },
        update: {},
        create: {
            enumerador: 'Lanche',
        },
    });

    const categoriaProduto2 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Acompanhamento' },
        update: {},
        create: {
            enumerador: 'Acompanhamento',
        },
    });

    const categoriaProduto3 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Bebida' },
        update: {},
        create: {
            enumerador: 'Bebida',
        },
    });

    const categoriaProduto4 = await prisma.categoriaProduto.upsert({
        where: { enumerador: 'Sobremesa' },
        update: {},
        create: {
            enumerador: 'Sobremesa',
        },
    });

    // Produtos
    const produto1 = await prisma.produto.upsert({
        where: { id: 1 },
        update: {},
        create: {
            descricao: 'Hamburguer de bacon',
            preco: 10.99,
            categoriaProdutoId: categoriaProduto1.id,
        },
    });

    const produto2 = await prisma.produto.upsert({
        where: { id: 2 },
        update: {},
        create: {
            descricao: 'Hamburguer de costela',
            preco: 12.99,
            categoriaProdutoId: categoriaProduto1.id,
        },
    });

    const produto3 = await prisma.produto.upsert({
        where: { id: 3 },
        update: {},
        create: {
            descricao: 'Hot dog',
            preco: 7.99,
            categoriaProdutoId: categoriaProduto1.id,
        },
    });

    const produto4 = await prisma.produto.upsert({
        where: { id: 4 },
        update: {},
        create: {
            descricao: 'Batata frita rustica',
            preco: 6.99,
            categoriaProdutoId: categoriaProduto2.id,
        },
    });

    const produto5 = await prisma.produto.upsert({
        where: { id: 5 },
        update: {},
        create: {
            descricao: 'Batata frita palito',
            preco: 6.99,
            categoriaProdutoId: categoriaProduto2.id,
        },
    });

    const produto6 = await prisma.produto.upsert({
        where: { id: 6 },
        update: {},
        create: {
            descricao: 'Refrigerante lata',
            preco: 5.99,
            categoriaProdutoId: categoriaProduto3.id,
        },
    });

    const produto7 = await prisma.produto.upsert({
        where: { id: 7 },
        update: {},
        create: {
            descricao: 'Refrigerante 600ml',
            preco: 8.50,
            categoriaProdutoId: categoriaProduto3.id,
        },
    });

    // Cardápio
    const cardapio = await prisma.cardapio.upsert({
        where: { id: 1 },
        update: {},
        create: {
            descricao: 'Cardápio Principal',
            ativo: true,
        },
    });

    // Produtos do Cardápio (associando produtos existentes aos cardápios)
    const produtosDoCardapio = [
        { id: 1, produtoId: produto1.id, cardapioId: cardapio.id },
        { id: 2, produtoId: produto2.id, cardapioId: cardapio.id },
        { id: 3, produtoId: produto3.id, cardapioId: cardapio.id },
        { id: 4, produtoId: produto4.id, cardapioId: cardapio.id },
        { id: 5, produtoId: produto5.id, cardapioId: cardapio.id },
        { id: 6, produtoId: produto6.id, cardapioId: cardapio.id },
        { id: 7, produtoId: produto7.id, cardapioId: cardapio.id }
    ];

    for (const produtoDoCardapio of produtosDoCardapio) {
        await prisma.produtosDoCardapio.upsert({
            where: {
                produtoId_cardapioId: {
                    produtoId: produtoDoCardapio.produtoId,
                    cardapioId: produtoDoCardapio.cardapioId,
                },
            },
            update: {},
            create: {
                produtoId: produtoDoCardapio.produtoId,
                cardapioId: produtoDoCardapio.cardapioId,
            },
        });
    }

    console.log('Seed data upserted.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });