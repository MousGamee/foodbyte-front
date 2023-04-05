import images from "./images"


const homeItem = [
    {
        _id : 1,
        name : 'Happy Bones',
        location : '394 Broome St, New York, NY 10013, USA',
        isOpen : true,
        rating : 3,
        image : images.food1,
        category : 'italian',
        distance : 5
    },
    {
        _id : 2,
        name : 'Uncle Boons',
        location : '394 Broome St, New York, NY 10013, USA',
        isOpen : true,
        rating : 3,
        image : images.food2,
        category : 'libanais',
        distance : 5


    },
    {
        _id : 3,
        name : 'The Modern',
        location : '394 Broome St, New York, NY 10013, USA',
        isOpen : true,
        rating : 3,
        image : images.food3,
        category : 'chinois',
        distance : 5

    },
]

export default {
    homeItem
}