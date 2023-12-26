import { Request, Response } from 'express';
import ForbrugsRepository from '../Repository/ForbrugsRepository.js';

class ForbrugsController {
    async getAllForbrug(req: Request, res: Response): Promise<Response> {
        const forbrugsRepository = new ForbrugsRepository();

        const users = await forbrugsRepository.getAllForbrug();

        return res.status(200).json(users);
    }
}

export default new ForbrugsController();