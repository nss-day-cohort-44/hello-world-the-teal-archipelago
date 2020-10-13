// data and exported function that returns a new array

const landmarkData = [
    {
        name: "Cape Palliser Lighthouse",
        image: '"https://www.newzealand.com/assets/Tourism-NZ/Wairarapa/41403b63cb/img-1536979700-5422-7264-p-F90A9732-BB39-B394-2711A732876237AA-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNDUsMzYsNzUsInBuZyIsNjUsMi41XQ.png""https://www.newzealand.com/assets/Tourism-NZ/Wairarapa/41403b63cb/img-1536979700-5422-7264-p-F90A9732-BB39-B394-2711A732876237AA-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNDUsMzYsNzUsInBuZyIsNjUsMi41XQ.png"',
        description: "Cape Palliser Lighthouse is a lighthouse at Cape Palliser in the Wellington region of the North Island of New Zealand. It is owned and operated by Maritime New Zealand. The light was built in 1897 and was originally fueled by oil.Cape Palliser Lighthouse is a lighthouse at Cape Palliser in the Wellington region of the North Island of New Zealand. It is owned and operated by Maritime New Zealand. The light was built in 1897 and was originally fueled by oil."
    },
    {
        name: "Kiwi Birdlife Park",
        image: '"https://media-cdn.tripadvisor.com/media/photo-o/15/57/c8/b3/kiwi-birdlife-park-admission.jpg"',
        description: "Observe more than 20 native bird species —including New Zealand’s namesake, the kiwi — with admission to Kiwi Birdlife Park in central Queenstown. See wildlife shows, nature exhibits and daily keeper presentations, and catch a rare sight of the flightless kiwi in a nocturnal enclosure. In addition to these feathered stars, take a look at critters such as the Auckland green gecko, the kea and a prehistoric tuatara."
    },
    {
        name: "Sky Tower",
        image: '"https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/135249_Auckland_AucklandSkyTower_427.jpg"',
        description: "The Sky Tower is a telecommunications and observation tower in Auckland, New Zealand. Located at the corner of Victoria and Federal Streets within the city's CBD, it is 328 metres (1,076 ft) tall, as measured from ground level to the top of the mast, making it the tallest freestanding structure in the Southern Hemisphere and the 27th tallest tower in the world. It has become an iconic landmark in Auckland's skyline due to its height and unique design."
    }
]

export const useLandmarkData = () => {
    return landmarkData.slice()
}