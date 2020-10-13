const israelLandmarkCollection = [
    {
        name: "The Dead Sea",
        image: "https://images.unsplash.com/photo-1529066516367-36973222c957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "The Dead Sea is the lowest point on Earth. Filled with salt, it is impossible to sink in it. One is more boyant than in regular water."
    },
    {
        name: "The Dome of the Rock",
        image: "https://images.unsplash.com/photo-1523131108800-e6b0e492bad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "The Dome of the Rock is a mosque located over the place where Abraham nearly sacrificed his child in the Bible. It is considered a holy site by Islam, Judaism, and Christianity. "
    },
    {
        name:"The Western Wall",
        image: "https://images.unsplash.com/photo-1539978411915-9f883018db6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1711&q=80",
        description: "The Western Wall is the holiest site in Judaism. It used to be the retaining wall of Hadrian's Second Temple which was destroyed in 72CE."
    }
]
export function getIsraelLandmark(){
    return israelLandmarkCollection.slice()
}