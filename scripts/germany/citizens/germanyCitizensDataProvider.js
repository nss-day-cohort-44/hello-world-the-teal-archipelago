const citizenCollection = [
    {
        name: "Albert Einstein",
        image: "./images/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        text: "Albert Einstein renounced his German citizenship when he was 16. He also married the only female student in his physics class.",

    },
    {
        name: "Arthur Schopenhaur",
        image: "./images/220px-Schopenhauer.jpg",
        text: `He is best known for his work "The World as Will and Representation, which characterizes the phenomenal world as the product of a blind and insatiable metaphysical will".`,

    },
    {
        name: "Johann Sebastian Bach",
        image: "./images/Johann_Sebastian_Bach.jpg",
        text: `Johannn was a muscian and composer best known for "Brandenburg Concertos, and Goldberg Variations".`,

    },
    
]
export const citizenInfo = () => {
    return citizenCollection.slice()
}