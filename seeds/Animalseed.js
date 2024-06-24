const {Animal} = require('../models');

const animalData = [
    {
        name: 'Fluffy',
        typeid: 1,
        breedid: 2,
        adoptdate:'2024-06-21',
        picUrl:"https://public.oed.com/wp-content/uploads/MicrosoftTeams-image-1-e1663849645910-1130x400.jpg",
        desc:"Fluffy was found at a Texaco early last year"
        
    },
    {
        name: 'Max',
        typeid: 1,
        breedid: 1,
        adoptdate:'2023-06-21',
        picUrl:"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.webp?w=768&h=432",
        desc: "Max was found behind Eats on Ponce"
        
    },
    {
        name: 'Eeyore',
        typeid: 2,
        breedid: 3,
        adoptdate:'2023-08-21',
        picUrl: "https://cdn.mos.cms.futurecdn.net/3edtiu5BmNmLSyrgiWrdAM-1200-80.jpg.webp",
        desc: "Eeyore was found behind the Earl"
        
    },
    {
        name: 'Matilda',
        typeid: 2,
        breedid: 4,
        adoptdate:'2023-09-30',
        picUrl: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Mixed-Breed-Cat-2.jpg",
        desc: "Matilda was found behind Taqueria Del Sol"
    
    },
    {
        name: 'Floetry',
        typeid: 3,
        breedid: 5,
        adoptdate:'2023-07-21',
        picUrl: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/3nationalgeographic_2758699.webp?w=1600&h=900",
        desc: "Floetry description"
    
    },
    {
        name: 'Triples - Nick, Nicole and Nancy',
        typeid: 3,
        breedid: 6,
        adoptdate:'2023-08-14',
        picUrl: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/poy1.webp?w=1600&h=900",
        desc: "Nick and Nicole description"
    
    },
    {
        name: 'Mickey',
        typeid: 1,
        breedid: 7,
        adoptdate:'2023-08-14',
        picUrl: "https://i.pinimg.com/564x/03/3c/bf/033cbfcb49143c62454190b9f0b39543.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Sandy',
        typeid: 1,
        breedid: 8,
        adoptdate:'2023-08-14',
        picUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CaneCorso_%2823%29.jpg/330px-CaneCorso_%2823%29.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Charlie',
        typeid: 1,
        breedid: 9,
        adoptdate:'2023-08-14',
        picUrl: "https://hips.hearstapps.com/hmg-prod/images/brown-boykin-spaniel-lying-on-grass-royalty-free-image-1679335725.jpg?crop=0.428xw:1.00xh;0.178xw,0&resize=980:*",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Luna',
        typeid: 1,
        breedid: 10,
        adoptdate:'2023-08-14',
        picUrl: "https://scx1.b-cdn.net/csz/news/800a/2019/4-dog.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Duke',
        typeid: 1,
        breedid: 11,
        adoptdate:'2023-08-14',
        picUrl: "https://images.newscientist.com/wp-content/uploads/2021/07/20164548/gettyimages-171117216_web.jpg?width=900",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Cleo',
        typeid: 2,
        breedid: 12,
        adoptdate:'2023-08-14',
        picUrl: "https://www.petfinder.com/static/66513b2643c2df2117b235d12f059e72/0c5b9/birman-card-large.webp",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Felix',
        typeid: 2,
        breedid: 13,
        adoptdate:'2023-08-14',
        picUrl: "https://www.petfinder.com/static/688cf17eb9072ca995a6585f45404a5b/0c5b9/bombay-card-large.webp",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Pepper',
        typeid: 2,
        breedid: 14,
        adoptdate:'2023-08-14',
        picUrl: "https://www.petfinder.com/static/f2e74818958274249ee14f04cdbd58f4/bb36c/japanese-bobtail-card-large.webp",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Tony',
        typeid: 2,
        breedid: 15,
        adoptdate:'2023-08-14',
        picUrl: "https://www.petfinder.com/static/6960a477725fe5c581f5728dd7d5679a/bb36c/scottish-fold-card-large.webp",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Angie',
        typeid: 2,
        breedid: 16,
        adoptdate:'2023-08-14',
        picUrl: "https://www.petfinder.com/static/8b0307d055d246a25b9f0e7506242032/bb36c/siberian-card-large_0.webp",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Bean',
        typeid: 3,
        breedid: 17,
        adoptdate:'2023-08-14',
        picUrl: "https://www.thesprucepets.com/thmb/MkTAW9faOk_elvx7EJTgyoTQplo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-529793714-58ad8e775f9b58a3c97a1ca9.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Henry',
        typeid: 3,
        breedid: 18,
        adoptdate:'2023-08-14',
        picUrl: "https://www.thesprucepets.com/thmb/UQ9MD_Lt4sjE1M9OnNy9VC0WzFQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hyacinth-macaw-992080286-6467fdc394964be2b413370d69df49fe.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Jugs',
        typeid: 3,
        breedid: 19,
        adoptdate:'2023-08-14',
        picUrl: "https://www.thesprucepets.com/thmb/B8VFmwdT4VFhBsW75QTPL20ORVY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-975973306-5c42a582c9e77c0001cacafb.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Quincy',
        typeid: 3,
        breedid: 20,
        adoptdate:'2023-08-14',
        picUrl: "https://www.thesprucepets.com/thmb/yfZIGX4b22MzmC-Ie9BFOubRBbU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blue-winged-parrotlet--forpus-xanthopterygius--975726340-8017056da1bf47d283d6b4c7a75b5f0b.jpg",
        desc: "Nick and Nicole description"
    },
    {
        name: 'Tito',
        typeid: 3,
        breedid: 21,
        adoptdate:'2023-08-14',
        picUrl: "https://www.thesprucepets.com/thmb/0baIbYj8NaAKtrJHT9Bxhae33MQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-501591421-5b1187718e1b6e0036e940bf.jpg",
        desc: "Nick and Nicole description"
    },
]

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports = animalSeeds;