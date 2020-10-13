const israelCitizenCollection = [
    {
        name: "Natalie Portman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg/220px-Natalie_Portman_%2848470988352%29_%28cropped%29.jpg",
        description: "Natalie Portman is an Israeli actress who has appeared in many popular movies like Pirates of the Carribean and Star Wars.</"
    },
    {
        name: "Golda Meir",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Golda_Meir_03265u.jpg/220px-Golda_Meir_03265u.jpg",
        description: "Golda Meir was the first female prime minister of Israel. She was known for her grit and helped the country through the Yom Kippur War."
    },
    {
        name:"Gal Gadot",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg/220px-Gal_Gadot_cropped_lighting_corrected_2b.jpg",
        description: "Gal Gadot is an Israeli actress who is famous for her portal of Wonder Women in the D.C extended universe"
    }
]
export function getIsraelCitizen(){
    return israelCitizenCollection.slice()
}