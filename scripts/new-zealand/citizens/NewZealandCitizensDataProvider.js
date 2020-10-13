// data and exported function that returns a new array

const citizenData = [
    {
        name: "Flight of the Conchords",
        image: '"https://hbomax-images.warnermediacdn.com/images/GVU2fVwUV4FFvjSoJAUAV/tile.jpeg?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=960"',
        description: "Flight of the Conchords is a New Zealand comedy duo composed of musicians Bret McKenzie and Jemaine Clement. The duo's comedy and music became the basis of a BBC radio series and then an American television series that aired for two seasons on HBO."

    },
    {
        name: "Sir Ernest Rutherford",
        image: '"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ernest_Rutherford_LOC.jpg/220px-Ernest_Rutherford_LOC.jpg""https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ernest_Rutherford_LOC.jpg/220px-Ernest_Rutherford_LOC.jpg"',
        description: "Ernest Rutherford, 1st Baron Rutherford of Nelson, OM, FRS, HonFRSE was a New Zealand–born British physicist who came to be known as the father of nuclear physics. Encyclopædia Britannica considers him to be the greatest experimentalist since Michael Faraday.",
    },
    {
        name: "Russell Crowe",
        image: '"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Russell_Crowe_%2833994020424%29.jpg/220px-Russell_Crowe_%2833994020424%29.jpg"',
        description: "Russell Ira Crowe was born in Wellington, New Zealand, to Jocelyn Yvonne (Wemyss) and John Alexander Crowe, both of whom catered movie sets. His maternal grandfather, Stanley Wemyss, was a cinematographer. Crowe's recent ancestry includes Welsh (where his paternal grandfather was born, in Wrexham), English, Irish, Scottish, Norwegian, Swedish, Italian, and Maori (one of Crowe's maternal great-grandmothers, Erana Putiputi Hayes Heihi, was Maori)."
    }
]

export const useCitizenData = () => {
    return citizenData.slice()
}