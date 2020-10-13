import { createCard } from "../../CreateCard.js"
import {useCities} from "./indiaCitiesDataProvider.js"


export const indiaCityList=()=>{
    const elementSelector=document.querySelector("#indiaCities")
    const cities=useCities()
    let indiaCityHTML =""
    for (const item of cities){
        indiaCityHTML += createCard(item)
    }
    elementSelector.innerHTML += indiaCityHTML
}









