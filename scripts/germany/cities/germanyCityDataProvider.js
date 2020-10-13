const cityCollection = [
    {
        name: "Berlin",
        image: "./images/Berlin.jpg",
        description: "Berlin has the largest train station in Europe. Berlin is also nine times bigger than Paris."
    },
    {
        name: "Munich",
        image: "./images/Munich.jpg",
        description: "The oldest building in Munich is a bathroom. Munich is furhter north than any major US city (excluding Alaska).",
    },
    {
        name: "Frankfurt",
        image: "./images/frankfurt.jpg",
        description: "Frankfurt is Germany's financial capital, along with being one of the largest airports in Europe.",
    },
]
export const cityInfo = () => {
    return cityCollection.slice()
}