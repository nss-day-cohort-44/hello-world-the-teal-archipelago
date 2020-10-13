const landmarkCollection = [
    {
        name: "Sanssouci Palace",
        image: "./images/Sanssouci_Palace.jpg",
        text: "Despite Frederick the Great’s wish to be buried in Sanssouci in 1786, his wish only came true in 1991, 205 years after his death. Sanssouci Palace also hosted many prominent philosophers and artists of that period.",

    },
    {
        name: "Monument to the Battle of the Nations",
        image: "./images/Monument_Battle_of_the_Nations.jpg",
        text: `The monument commemorates the defeat of Napoleon's French army at Leipzig, was paid mostly by the donations and the city of Leipzig.`,

    },
    {
        name: "The Nuremberg Christmas Market",
        image: "./images/Nuremberg_Christmas_Market.jpg",
        text: `The Nuremberg Christmas Market is one of the oldest Christmas Markets in Germany. It has been around since 1969.`,

    },
    
]
export const landmarkInfo = () => {
    return landmarkCollection.slice()
}