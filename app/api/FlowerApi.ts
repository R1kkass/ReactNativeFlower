import axios from "axios";
import { domen } from "../const/domen";
import { IData } from "../models/IData";

export interface IFlower{
    _id: string,
    name: string,
    price: string,
    image: string,
    sale?: string,
    status: string,
    description: string    
}

export interface IApiFlower{
    flower: IFlower[]
}

export interface IQuery{
    name: string
}

export class FlowerApi {
    static async getAll(query?:IQuery){
        const res:IData<IApiFlower> = await axios.get(`${domen}/flower/getAll`, {params: query})
        return res.data.flower
    }
}