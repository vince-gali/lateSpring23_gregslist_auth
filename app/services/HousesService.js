import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"



class HousesService{

    async getHousesFromApi(){
        const res = await api.get('api/houses')
        AppState.houses = res.data.map(h => new House(h))
    }


    async createHouse(formData){
        const res = await api.post('api/house', formData)
    }

}







export const housesService = new HousesService()