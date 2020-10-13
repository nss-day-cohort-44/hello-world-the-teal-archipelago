const indiaLandmarkData = [
    {
        name: "The Statue of Unity",
        image: "./images/statue-of-unity.jpg",
        description: "The Statue of Unity, built as a tribute to Sardar Vallabhbhai Patel is not only the tallest statue in the world, it also has the unique distinction of being among the fastest to be completed -just 33 months unlike China's Spring Temple Buddha which took 11 years."
    },
    {
        name: "The India Gate",
        image: "./images/The-Gateway-of-India.jpg",
        description: "India Gate, an important monument of the city, is a memorial built in commemoration of more than 80,000 Indian soldiers who were killed during World War I. The monument is an imposing 42 meters high arch and was designed by the famous architect Edwin Lutyens. India gate was earlier named All India War Memorial."
    },
    {
        name: "The Golden Temple",
        image: "./images/Golden temple.webp",
        description: "Sri Harmandir Sahib (Golden Temple ) The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure."
    }
]

export const useLandmark = () => {
    return indiaLandmarkData.slice()
}