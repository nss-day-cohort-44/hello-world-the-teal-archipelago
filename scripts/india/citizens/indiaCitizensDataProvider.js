const indiaCitizensData = [
    {
        name: "Gautama Buddha",
        image: "./images/Gautam-Buddha.jpg",
        description: "Siddhartha Gautama, the founder of Buddhism who later became known as “the Buddha,” lived during the 5th century B.C. Gautama was born into a wealthy family as a prince in present-day Nepal. ... After six years of searching, Buddhists believe Gautama found enlightenment while meditating under a Bodhi tree."
    },
    {
        name: "Swami Vivekananda",
        image: "./images/Swami-Vivekananda.jpg",
        description: "Swami Vivekananda (1863–1902) is best known in the United States for his groundbreaking speech to the 1893 World's Parliament of Religions in which he introduced Hinduism to America and called for religious tolerance and an end to fanaticism."
    },
    {
        name: "Rabindranath Tagore",
        image: "./images/Ravindranath-Tagore.jpg",
        description: "Rabindranath Tagore is best known as a poet but he was a man of many talents. ... Tagore was a painter who played an important role in modernising Bengali art. And he was a nationalist who gave up his knighthood to protest British policies in colonial India after the Jallianwala Bagh massacre."
    }
]

export const useCitizens = () => {
    return indiaCitizensData.slice()
}