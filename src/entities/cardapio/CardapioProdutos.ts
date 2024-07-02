interface CardapioProduto {
    nome: string
    preco: number
}

export default interface CardapioProdutos {
    produtos: CardapioProduto[]
}