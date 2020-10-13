import { createCard } from "../../CreateCard.js";
import {useCitizens} from "./indiaCitizensDataProvider.js";


export const indiaCitizensList=()=>{
    const elementSelector=document.querySelector("#indiaCitizen")
    const landmarks = useCitizens()
    let indiaCitizensHTML =""
    for (const item of landmarks){
        indiaCitizensHTML += createCard(item)
    }
    elementSelector.innerHTML += indiaCitizensHTML
}
