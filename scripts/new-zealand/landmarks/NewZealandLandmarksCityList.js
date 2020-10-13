//1) define the selector area to play the text. - document.querySelector
// 2) definite a variable with the data from the provider
// 3) create an empty string to hold html
// 4) go through the array from step 2 with the  += and the function from the html page
//5) put the location area from step 1 with a .innerhtml

import { createCard } from "../../CreateCard.js"
import { useLandmarkData } from "./NewZealandLandmarksDataProvider.js"


export const LandmarksList = () => {

    const contentElement = document.querySelector("#newZealandLandmarks")

    const landmarks = useLandmarkData()

    let landmarksHTMLRep = ""

    for (const landObj of landmarks) {
        landmarksHTMLRep += createCard(landObj)
    }

    contentElement.innerHTML += landmarksHTMLRep
}