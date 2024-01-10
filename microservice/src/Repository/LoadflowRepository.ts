import { LoadflowModel } from '../Model/LoadflowModel.js';
import { ObjectToReturn } from '../Types/ObjectToReturnModel.js';

class LoadflowRepository {
    Id: number;
    primary_substation: string;
    period: Date;
    n_timestamps: number;
    n_failed: number;
    success_percentage: number;
    simulation_id: number;
    version_id: number;
    name: string;

    objectToReturn = new ObjectToReturn({}, true, "", 200);

    async getAllLoadFlows() {
        try {
            const data = await LoadflowModel.findAll({
                attributes: [
                    'Id',
                    'primary_substation',
                    'period',
                    'n_timestamps',
                    'n_failed',
                    'n_successful',
                    'success_percentage',
                    'simulation_id',
                    'version_id',
                    'name'
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
export default LoadflowRepository;