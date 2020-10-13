const israelCityCollection = [
    {
        name: "Jerusalem",
        image: "https://images.unsplash.com/photo-1466175743059-5393a020726c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Jerusalem is created of the old city and the new city. Within the old city, it is divided into four sections: Jewish, Muslim, Christain, and Armenian Orthadox."
    },
    {
        name: "Tel Aviv",
        image: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
        description: "Tel Aviv is Israel’s largest and most modern city. With a population of about 3 million, it is known for its popular night clubs."
    },
    {
        name:"Haifa",
        image: "https://images.unsplash.com/photo-1541472544680-ccc2e0014462?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        description: "Haifa is a beautiful port city in the northern region of the country. Ruins date the city back over 3000 years ago!"
    }
]
export function getIsraelCity(){
    return israelCityCollection.slice()
}