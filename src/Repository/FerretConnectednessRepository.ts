import { FerretConnectednessModel } from '../Model/FerretConnectednessModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class FerretConnectednessRepository {
    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllFerretConnectedness() {
        try {
            const data = await FerretConnectednessModel.findAll({
                attributes: [
                    'name',
                    'version_id',
                    'overall_connectedness',
                    'time_finished',
                    'time_started',
                    'values_by_station'
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
export default FerretConnectednessRepository;