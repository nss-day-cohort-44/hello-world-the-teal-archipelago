const indiaCitiesData = [
    {
        name: "Mumbai The Economical Capital Of India",
        image: "./images/Mumbai-Harbour-coast.jpg",
        description: "In 2008, Mumbai was named an alpha world city. It has the highest number of millionaires and billionaires among all cities in India. Mumbai is home to three UNESCO World Heritage Sites: the Elephanta Caves, Chhatrapati Shivaji Maharaj Terminus, and the city's distinctive ensemble of Victorian and Art Deco buildings."
    },
    {
        name: "Chennai The Cultural capital of India",
        image: "./images/Chennai.jpg",
        description: "Chennai is nicknamed The Detroit of India, with more than one-third of India's automobile industry being based in the city. Home to the Tamil film industry, Chennai is also known as a major film production centre. Chennai is one of the 100 Indian cities to be developed as a smart city under the Smart Cities Mission."
    },
    {
        name: "New Delhi The Capital of India",
        image: "./images/delhi.jpg",
        description: "New Delhi is the capital of India and an administrative district of NCT Delhi. New Delhi is also the seat of all three branches of the Government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India."
    }
]

export const useCities = () => {
    return indiaCitiesData.slice()
}