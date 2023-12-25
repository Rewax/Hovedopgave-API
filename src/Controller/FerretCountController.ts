import { Request, Response } from 'express';
import FerretCountRepository from '../Repository/FerretCountRepository.js';

class FerretCountController {
    async getAllFerretCounts(req: Request, res: Response): Promise<Response> {
        const ferretCountRepository = new FerretCountRepository();

        const users = await ferretCountRepository.getAllFerretCounts();

        return res.status(200).json(users);
    }
}

export default new FerretCountController();