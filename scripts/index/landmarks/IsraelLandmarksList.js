import { getIsraelLandmark }  from './IsraelLandmarksDataProvider.js'

import { createCard } from "../../CreateCard.js"
//5) put the location area from step 1 with a .innerhtml
export const israelLankmarksList=()=>{
    const elementSelector=document.querySelector("#israelLankmarks")
    const landmarks=getIsraelLandmark()
    let israelLandmarkHTML=""
    for (const item of landmarks){
        israelLandmarkHTML += createCard(item)
    }
    elementSelector.innerHTML+=israelLandmarkHTML
}