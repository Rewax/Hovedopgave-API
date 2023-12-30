import { FerretCountModel } from '../Model/FerretCountModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class FerretCountRepository {
    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllFerretCounts() {
        try {
            const data = await FerretCountModel.findAll({
                attributes: [
                    'count',
                    'version_id',
                    'tenant',
                    'version_time_finished',
                    'data_uploaded',
                    'asset_category',
                    'asset_type',
                    'asset_type_id'
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