import { createCard } from "../../CreateCard.js"
import {useLandmark} from "./indiaLandmarkDataProvider.js"


export const indiaLandmarkList=()=>{
    const elementSelector=document.querySelector("#indiaLandmark")
    const landmarks = useLandmark()
    let indiaLandmarkHTML =""
    for (const item of landmarks){
        indiaLandmarkHTML += createCard(item)
    }
    elementSelector.innerHTML += indiaLandmarkHTML
}