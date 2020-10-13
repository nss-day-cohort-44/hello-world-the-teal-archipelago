import {citizenInfo} from "./germanyCitizensDataProvider.js"
import {createCard} from "../../CreateCard.js"
export const germanyCitizenList = () => {
    const contentElement = document.querySelector("#Citizens")
    const citizens = citizenInfo()
    let germanyCitizenHTML = ""
   for (const citizen of citizens){
        germanyCitizenHTML += createCard(citizen)
    }
    contentElement.innerHTML += germanyCitizenHTML
}