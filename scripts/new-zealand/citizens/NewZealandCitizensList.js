

import { useCitizenData } from "./NewZealandCitizensDataProvider.js"
import { createCard } from "../../CreateCard.js"


export const CitizensList = () => {

    const contentElement = document.querySelector("#newZealandCitizens")

    const citizens = useCitizenData()

    let citizensHTMLRep = ""

    for (const citizensObj of citizens) {
        citizensHTMLRep += createCard(citizensObj)
    }

    contentElement.innerHTML += citizensHTMLRep
}