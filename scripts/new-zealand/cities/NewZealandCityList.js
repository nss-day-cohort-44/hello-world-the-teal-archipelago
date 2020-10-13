//1) define the selector area to play the text. - document.querySelector
// 2) definite a variable with the data from the provider
// 3) create an empty string to hold html
// 4) go through the array from step 2 with the  += and the function from the html page
//5) put the location area from step 1 with a .innerhtml

import { useCityData } from "./NewZealandCityDataProvider.js"
import { createCard } from "../../CreateCard.js"

export const CitiesList = () => {

    const contentElement = document.querySelector("#newZealandCities")

    const cities = useCityData()

    let citiesHTMLRep = ""

    for (const cityObj of cities) {
        citiesHTMLRep += createCard(cityObj)
    }

    contentElement.innerHTML += citiesHTMLRep
}