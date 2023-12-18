import {default as ferret_connectedness_data} from "../ferret_connectedness_data.json";
import {Iferret} from "../Interface/Ferretinterface";
import {Ferret} from "../Model/nkforsyning"

let obj: Ferret = JSON.parse(ferret_connectedness_data as any)

console.log(obj)