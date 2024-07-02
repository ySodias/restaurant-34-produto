import { Application } from "express";
import ProdutoRoutes from "./produto";
import ProdutoController from "../controllers/ProdutoController";
import { PrismaClient } from "@prisma/client";
import ProdutoRepository from "../external/repositories/ProdutoRepository";
import CardapioRepository from "@/external/repositories/CardapioRepository";
import CardapioController from "@/controllers/CardapioController";
import CardapioRoutes from "./cardapio";
import ProdutosDoCardapioRepository from "@/external/repositories/ProdutosDoCardapioRepository";
import { ProdutosDoCardapioGateway } from "@/gateways/produtosDoCardapio";
import { ProdutoGateway } from "@/gateways/produto";

const BASE_URL = "/api";

export class routes {
    private app: Application;
    private prisma: PrismaClient;

    constructor(app: Application, prisma: PrismaClient) {
        this.app = app;
        this.prisma = prisma;
        this.setupRoutes();
    }
    private setupRoutes() {
        const produtoRepository = new ProdutoRepository(this.prisma);
        const produtoController = new ProdutoController(produtoRepository);
        const produtoRoutes = new ProdutoRoutes(
            this.app,
            produtoController,
            BASE_URL
        );
        produtoRoutes.buildRoutes();
        const cardapioRepository = new CardapioRepository(this.prisma);
        const produtosDoCardapioRepository = new ProdutosDoCardapioRepository(this.prisma)
        const produtosDoCardapioGateway = new ProdutosDoCardapioGateway(produtosDoCardapioRepository);
        const produtoGateway = new ProdutoGateway(produtoRepository)
        const cardapioController = new CardapioController(cardapioRepository, produtosDoCardapioGateway, produtoGateway);
        const cardapioRoutes = new CardapioRoutes(
            this.app,
            cardapioController,
            BASE_URL
        );
        cardapioRoutes.buildRoutes();
    }
}
