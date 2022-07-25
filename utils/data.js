import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Test Admin',
            email: 'admin@example.com',
            phone: '(555) 555-5555',
            companyName: 'Remedy',
            address: '123 Testing St',
            city:  'Test City',
            state: 'GA',
            zipCode: '30047',
            password: bcrypt.hashSync('admin12345'),
            isAdmin: true,
            isVendor: false
        },
        {
            name: 'John Smith',
            email: 'user@example.com',
            phone: '(555) 555-5555',
            companyName: 'Sample Kratom',
            address: '123 Testing Dr',
            city: 'Kratom City',
            state: 'GA',
            zipCode: '30047',
            password: bcrypt.hashSync('vendor12345'),
            isAdmin: false,
            isVendor: true
        }
    ],
    products: [
        {
            name: 'Yak Yai Maeng Da',
            slug: 'yak-yai-maeng-da',
            color: 'Red',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645129305/dzfm1xozgbyfdmkwvcde.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645129312/ejntjzkazalkgbbkq1wu.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645129329/s9kvhfwawvssswnmx0m5.jpg',
            imageFour: 'https://res.cloudinary.com/remedy/image/upload/v1645129336/id9htsrzhdej2lo8xpa6.jpg',
            price: 12,
            countInTons: 100,
            description: 'At Remedy we like feel that the best Kratom comes from Thailand but that is not just because we say so. The humid air, the acidic soil which is rich in all the right nutrients make it the perfect place for the Kratom tree to grow.  This is why one of the most popular strains of Kratom called Maeng Da kratom was developed in Thailand in the early 1900’s. At that time consumers were mainly laborers and farmers. The Thai name “Maeng Da” translates to the word “crayfish” in English. Many people believe that this strain is the most intense potency of all the Kratom variants.',
            benefits: 'Yak Yai is the biggest leaf in the Maeng Da strain. The leaf can be as large as a human face. Yak Yai only comes in red vein.'
        },
        {
            name: 'Hang Kang Maeng Da',
            slug: 'hang-kang-maeng-da-green',
            color: 'Green',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645130004/ndql3so9ks8gcydl0y0k.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645130011/xwrzd4mh4paypt5wz7ix.jpg',
            imageThree: '/images/maeng-da3.jpg',
            imageFour: '/images/maeng-da-powder.jpg',
            price: 12,
            countInTons: 100,
            description: 'This is about Maeng Da',
            benefits: 'Is a cross between the red and white variants. As an energizer and moderate pain reliever. One of the unique aspects of this variant is it can provide a sense of active relaxation. Making this variant popular for relieving social anxiety with a slight sedative effect that will not disrupt your work routine.'
        },
        {
            name: 'Hang Kang Maeng Da',
            slug: 'hang-kang-maeng-da-white',
            color: 'White',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645129407/co2yf2afj4ogoj0wz6en.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645129419/lu1osf1cyagmaozzysnm.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645129426/qgpu9sbg3pkrzauywajz.jpg',
            imageFour: 'https://res.cloudinary.com/remedy/image/upload/v1645129432/usebn1scgfvxk5l4snt3.jpg',
            price: 12,
            countInTons: 100,
            description: 'At Remedy we like feel that the best Kratom comes from Thailand but that is not just because we say so. The humid air, the acidic soil which is rich in all the right nutrients make it the perfect place for the Kratom tree to grow.  This is why one of the most popular strains of Kratom called Maeng Da kratom was developed in Thailand in the early 1900’s. At that time consumers were mainly laborers and farmers. The Thai name “Maeng Da” translates to the word “crayfish” in English. Many people believe that this strain is the most intense potency of all the Kratom variants. ',
            benefits: 'Is known as one of the best energizers. Can improve focus and clear your mind to concentrate on the task you face throughout the day. While this variant provides some level of pain relieve effects, it does not carry the same sedative effects as the red vein variety. '
        },
        {
            name: 'Kan Kheaw',
            slug: 'kan-kheaw-green',
            color: 'Green',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645128337/lf5wwluuxwdsvkrrcxih.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645128345/j0ifmyoa5pzrrsguflua.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645128354/oycnbzyd7org778iar22.jpg',
            imageFour: 'https://res.cloudinary.com/remedy/image/upload/v1645128362/tekeliw0v9ywoojtuckb.jpg',
            price: 12,
            countInTons: 100,
            description: 'There is three main types of Thai Kratom: white vein, green vein and red vein. The difference between the strains’ colors and effects has to do with the age of the plant and sunlight exposure. White vein is the young plant, green vein is the plant as its maturing, and red vein is the fully mature plant. As a Kratom plant matures, different levels of alkaloids build within the leaves. The different alkaloids determine what effect the Kratom will have and also gives the veins their unique properties.',
            benefits: 'Tends to be euphoric, bringing positivity and chattiness to the user.'
        },
        {
            name: 'Kan Dang',
            slug: 'kan-dang-red',
            color: 'Red',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645129633/bydr3jl3zlxznhs1hnvp.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645129642/tcgspqfxfskwpkbzlpch.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645129648/x9srlrxdpxwrobgyoawl.jpg',
            imageFour: 'https://res.cloudinary.com/remedy/image/upload/v1645129655/k36sqgwiotpib2xethnr.jpg',
            price: 12,
            countInTons: 100,
            description: 'There is three main types of Thai Kratom: white vein, green vein and red vein. The difference between the strains’ colors and effects has to do with the age of the plant and sunlight exposure. White vein is the young plant, green vein is the plant as its maturing, and red vein is the fully mature plant. As a Kratom plant matures, different levels of alkaloids build within the leaves. The different alkaloids determine what effect the Kratom will have and also gives the veins their unique properties.',
            benefits: ' Is the more potent of the smaller Kratom, tends to be mildly sedating, relaxing and pleasant to the user, with pain relief qualities.'
        },
        {
            name: 'Tang Qua',
            slug: 'tang-qua-white',
            color: 'White',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645129686/tanc67gz0tauv4626m49.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645129691/bn3jy9z4mj4wt1xg4clj.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645129698/zymyquac7mf8fg9xcmlp.jpg',
            imageFour: '/images/tang-qua1.jpg',
            price: 12,
            countInTons: 100,
            description: 'There is three main types of Thai Kratom: white vein, green vein and red vein. The difference between the strains’ colors and effects has to do with the age of the plant and sunlight exposure. White vein is the young plant, green vein is the plant as its maturing, and red vein is the fully mature plant. As a Kratom plant matures, different levels of alkaloids build within the leaves. The different alkaloids determine what effect the Kratom will have and also gives the veins their unique properties.',
            benefits: 'Tends to be energizing, uplifting and focusing to the user.'
        },
        {
            name: 'Leon Tong',
            slug: 'leon-tong-red-and-white',
            color: 'Red & White',
            imageOne: 'https://res.cloudinary.com/remedy/image/upload/v1645129686/tanc67gz0tauv4626m49.jpg',
            imageTwo: 'https://res.cloudinary.com/remedy/image/upload/v1645129691/bn3jy9z4mj4wt1xg4clj.jpg',
            imageThree: 'https://res.cloudinary.com/remedy/image/upload/v1645129698/zymyquac7mf8fg9xcmlp.jpg',
            imageFour: '/images/leon-tong2.jpg',
            price: 12,
            countInTons: 100,
            description: 'There is three main types of Thai Kratom: white vein, green vein and red vein. The difference between the strains’ colors and effects has to do with the age of the plant and sunlight exposure. White vein is the young plant, green vein is the plant as its maturing, and red vein is the fully mature plant. As a Kratom plant matures, different levels of alkaloids build within the leaves. The different alkaloids determine what effect the Kratom will have and also gives the veins their unique properties.',
            benefits: 'Effects are between red and white vein kratom, giving energy and pain relieve. Thai farmers like to dip while working their farms, helping with productivity and pain relieve from sun and manual labor.'
        }
    ]
};

export default data;


