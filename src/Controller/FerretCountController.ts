import { Request, Response } from 'express';
// import UserInterface from '../Models/Interface/UserInterface.js';
import FerretCountRepository from '../Repository/FerretCountRepository.js';
// import { ObjectToReturn } from 'Models/Types/ObjectToReturnModel.js';

class FerretCountController {
    async getAllFerretCounts(req: Request, res: Response): Promise<Response> {
        const ferretCountRepository = new FerretCountRepository();

        const users = await ferretCountRepository.getAllFerretCounts();

        return res.status(200).json(users);
    }
}

export default new FerretCountController();