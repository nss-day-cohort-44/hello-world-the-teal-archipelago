//1) define the selector area to play the text. - document.querySelector
// 2) definite a variable with the data from the provider
// 3) create an empty string to hold html
// 4) go through the array from step 2 with the  += and the function from the html page

import { getIsraelCity } from "./IsraelCityDataProvider.js"
import {createCard} from "../../CreateCard.js"
console.log("hello!")
//5) put the location area from step 1 with a .innerhtml
export const israelCityList=()=>{
    const elementSelector=document.querySelector("#israelCity")
    const cities=getIsraelCity()
    let israelCityHTML=""
    for (const item of cities){
        israelCityHTML += createCard(item)
    }
    elementSelector.innerHTML+=israelCityHTML
}