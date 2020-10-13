import {landmarksInfo} from "./germanyLandmarksDataProvider.js"
import {createCard} from "../../CreateCard.js"
export const germanyLandmarkList = () => {
    const contentElement = document.querySelector("#Landmarks")
    const landmarks = landmarksInfo()
    let germanyLandmarkHTML = ""
   for (const landmark of landmarks){
        germanyLandmarkHTML += createCard(landmark)
    }
    contentElement.innerHTML += germanyLandmarkHTML
}