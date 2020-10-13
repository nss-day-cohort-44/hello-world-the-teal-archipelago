import { getIsraelCitizen} from './IsraelCitizensDataProvider.js'

import { createCard } from "../../CreateCard.js"
//5) put the location area from step 1 with a .innerhtml
export const israelCitizenList=()=>{
    const elementSelector=document.querySelector("#israelCitizen")
    const citizen=getIsraelCitizen()
    let israelCitizenHTML=""
    for (const item of citizen){
        israelCitizenHTML += createCard(item)
    }
    elementSelector.innerHTML+=israelCitizenHTML
}