import {cityInfo} from "./germanyCityDataProvider.js"
import {createCard} from "../../CreateCard.js"
export const germanyCityList = () => {
    const contentElement = document.querySelector("#cities")
    const cities = cityInfo()
    let germanyCityHTML = ""
   for (const city of cities){
        germanyCityHTML += createCard(city)
    }
    contentElement.innerHTML += germanyCityHTML
}