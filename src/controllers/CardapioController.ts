import { ICardapioController } from "@/interfaces/controllers/ICardapioController";
import { ICardapioGateway } from "@/interfaces/gateway/ICardapioGateway";
import { ICardapioUseCase } from "@/interfaces/usecases/ICardapioUseCase";

export default class CardapioController implements ICardapioController {
    private cardapioUseCase: ICardapioUseCase;
    private cardapioGateway: ICardapioGateway;
    private cardapioPresenter: new CardapioPresenter();

    constructor(cardapioRepository: CardapioRepository) {
        this.cardapioGateway = new CardapioGateway(cardapioRepository)
        this.cardapioUseCase = new CardapioUseCase(this.cardapioGateway)
    }

    async getCardapio(req: Request, res: Response) {
        
    }

    async getCardapioById(req: Request, res: Response) {

    }

    async createCardapio(req: Request, res: Response) {

    }

    async updateCardapio(req: Request, res: Response) {

    }

    async deleteCardapio(req: Request, res: Response) {

    }
}