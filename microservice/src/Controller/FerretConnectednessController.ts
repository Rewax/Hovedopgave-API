import { Request, Response } from 'express';
import FerretConnectednessRepository from '../Repository/FerretConnectednessRepository.js';

class FerretConnectednessController {
    async getAllFerretConnectedness(req: Request, res: Response): Promise<Response> {
        const ferretConnectednessRepository = new FerretConnectednessRepository();

        const users = await ferretConnectednessRepository.getAllFerretConnectedness();

        return res.status(200).json(users);
    }
}

export default new FerretConnectednessController();