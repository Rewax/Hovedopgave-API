import { Request, Response } from 'express';
import LoadflowRepository from '../Repository/LoadflowRepository.js';

class LoadflowController {
    async getAllLoadFlows(req: Request, res: Response): Promise<Response> {
        const loadflowRepository = new LoadflowRepository();

        const data = await loadflowRepository.getAllLoadFlows();

        return res.status(200).json(data);
    }
}

export default new LoadflowController();