import { FerretCountModel } from '../Model/FerretCountModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class FerretCountRepository {
    Id: number;
    Email: string;
    Password: string;
    Firstname: string;
    Lastname: string;

    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllFerretCounts() {
        try {
            const data = await FerretCountModel.findAll({
                include: [
                    { model: FerretCountModel, as: 'ferret_count' },
                ]
            });

            this.objectToReturn.object = data;

            return this.objectToReturn;
        } catch (error) {
            this.objectToReturn.success = false;
            this.objectToReturn.errorMsg = "OOPS, something went wrong while trying to get ferret counts" + error;
            this.objectToReturn.status = 405;

            return this.objectToReturn;
        }
    }
}
export default FerretCountRepository;