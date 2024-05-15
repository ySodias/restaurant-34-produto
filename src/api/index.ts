import { Application } from "express";
import ProdutoRoutes from "./produto";
import ProdutoController from "@/controllers/ProdutoController";
import { PrismaClient } from "@prisma/client";
import ProdutoRepository from "@/external/repositories/ProdutoRepository";

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
    }
}
