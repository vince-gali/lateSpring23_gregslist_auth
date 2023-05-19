import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


function _drawHouses(){
    console.log('the houses are drawing..');
    let template = ''
    AppState.houses.forEach(h => {
        template += h.HouseCard
    })
    setHTML('app', template)
    // 


}

function _drawHouseButton(){
    if(AppState.account){
        setHTML('the-place-to-put-the-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id">List Your Home</button>')
    }
}

export class HousesController{
    constructor() {
        setHTML('app', '<h1>Building Houses</h1>')
        // console.log('hello from the houses controller')
        setHTML('modal-guts', House.HouseForm())
        _drawHouseButton()

        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouseButton)
        this.getHousesFromApi()

    }


    async getHousesFromApi(){
        try {
            await housesService.getHousesFromApi()
        } catch (error) {
            Pop.error(error)
        }
    }


    async createHouse(){
        try {
            window.event?.preventDefault()
            const form = window.event?.target
            const formData = getFormData(form)
            console.log('what is in the house formData', formData)
            await housesService.createHouse(formData)
            // @ts-ignore
            form.reset()
            bootstrap.Modal.getOrCreateInstance('#the-target').hide()
        } catch (error) {
            Pop.error(error)
            
        }
    }
}