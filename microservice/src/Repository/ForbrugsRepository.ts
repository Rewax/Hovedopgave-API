import { ForbrugsModel } from '../Model/ForbrugsModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class ForbrugsRepository {
    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllForbrug() {
        try {
            const data = await ForbrugsModel.findAll({
                attributes: [
                    'Id',
                    'time',
                    'installation_number_hash',
                    'value',
                    'unit'
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
export default ForbrugsRepository;