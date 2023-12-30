import { Request, Response } from 'express';
import StationRepository from '../Repository/StationRepository.js';

class FerretCountController {
    async getAllStations(req: Request, res: Response): Promise<Response> {
        const stationRepository = new StationRepository();

        const users = await stationRepository.getAllStations();

        return res.status(200).json(users);
    }
}

export default new FerretCountController();