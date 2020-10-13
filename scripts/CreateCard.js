
export const createCard=(myArray)=>{
    return `<div class="card">
        <h2>${myArray.name}</h2>
        <img src=${myArray.image} >
        <p>${myArray.description}</p>
    </div>`
}