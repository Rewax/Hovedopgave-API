import { StationsModel } from '../Model/StationsModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class StationRepository {
    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllStations() {
        try {
            const data = await StationsModel.findAll({
                attributes: [
                    'Id',
                    'id',
                    'position'
                ]
            });

            this.objectToReturn.object = data;

            return this.objectToReturn;
        } catch (error) {
            this.objectToReturn.success = false;
            this.objectToReturn.errorMsg = "OOPS, something went wrong while trying to get stations" + error;
            this.objectToReturn.status = 405;

            return this.objectToReturn;
        }
    }
}
export default StationRepository;