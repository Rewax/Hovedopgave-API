import Iferret from "Interface/Ferretinterface";
import { Model } from "sequelize";


export class Ferret extends Model<Iferret>{
  public Id!: number;
  public name!: string;
  public version_id!: number;
  public overall_connectedness!: number;
  public time_finished!: Date;
  public time_started!: Date;
  public values_by_station!: number;
}



module.exports = Ferret;
