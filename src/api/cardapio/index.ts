import { IBuildRoutes } from "@/interfaces/api/IBuildRoutes";
import { ICardapioController } from "@/interfaces/controllers/ICardapioController";

class CardapioRoutes implements IBuildRoutes {
    private express: any;
    private cardapioController: ICardapioController;
    private BASE_URL: string;

    constructor(
        express: any,
        cardapioController: ICardapioController,
        BASE_URL: string
    ) {
        this.express = express;
        this.cardapioController = cardapioController;
        this.BASE_URL = BASE_URL;
    }
    buildRoutes() {
        this.express.get(
            `${this.BASE_URL}/cardapio`,

            this.cardapioController.getCardapio.bind(
                this.cardapioController
            )
        );
        this.express.get(
            `${this.BASE_URL}/cardapio/listar-produtos/:cardapioId`,
            this.cardapioController.getProdutosCardapio.bind(
                this.cardapioController
            )
        );
    }
};

export default CardapioRoutes;