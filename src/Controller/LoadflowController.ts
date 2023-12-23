import { Request, Response } from 'express';
// import UserInterface from '../Models/Interface/UserInterface.js';
import LoadflowRepository from '../Repository/LoadflowRepository.js';
// import { ObjectToReturn } from 'Models/Types/ObjectToReturnModel.js';

class LoadflowController {
    async getAllLoadFlows(req: Request, res: Response): Promise<Response> {
        const loadflowRepository = new LoadflowRepository();

        const data = await loadflowRepository.getAllLoadFlows();

        return res.status(200).json(data);
    }
}

export default new LoadflowController();