import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Nick Saindon',
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
            imageOne: '/images/maeng-da1.jpg',
            imageTwo: '/images/maeng-da2.jpg',
            imageThree: '/images/maeng-da3.jpg',
            imageFour: '/images/maeng-da-powder.jpg',
            price: 15.00,
            countInTons: 100,
            isAvailable: true,
            description: 'This is about Maeng Da',
            benefits: 'These are the benefits to Yak Yai Maeng Da'
        },
        {
            name: 'Hang Kang Maeng Da',
            slug: 'hang-kang-maeng-da-green',
            color: 'Green',
            imageOne: '/images/maeng-da1.jpg',
            imageTwo: '/images/maeng-da2.jpg',
            imageThree: '/images/maeng-da3.jpg',
            imageFour: '/images/maeng-da-powder.jpg',
            price: 15.00,
            countInTons: 100,
            isAvailable: true,
            description: 'This is about Maeng Da',
            benefits: 'These are the benefits to Hang Kang Maeng Da Green'
        },
        {
            name: 'Hang Kang Maeng Da',
            slug: 'hang-kang-maeng-da-white',
            color: 'White',
            imageOne: '/images/maeng-da1.jpg',
            imageTwo: '/images/maeng-da2.jpg',
            imageThree: '/images/maeng-da3.jpg',
            imageFour: '/images/maeng-da-powder.jpg',
            isAvailable: true,
            description: 'This is about Maeng Da',
            benefits: 'These are the benefits to Hang Kang Maeng Da White'
        },
        {
            name: 'Gan Kheaw',
            slug: 'gan-kheaw-green',
            color: 'Green',
            imageOne: '/images/gan-dang1.jpg',
            imageTwo: '/images/gan-dang2.jpg',
            imageThree: '/images/gan-dang3.jpg',
            imageFour: '/images/gan-dang-powder.jpg',
            isAvailable: true,
            description: 'This is about Gan Kheaw',
            benefits: 'These are the benefits to Gan Kheaw'
        },
        {
            name: 'Gan Dang',
            slug: 'gan-dang-red',
            color: 'Red',
            imageOne: '/images/gan-dang1.jpg',
            imageTwo: '/images/gan-dang2.jpg',
            imageThree: '/images/gan-dang3.jpg',
            imageFour: '/images/gan-dang-powder.jpg',
            isAvailable: true,
            description: 'This is about Gan Dang',
            benefits: 'These are the benefits to Gan Kheaw'
        },
        {
            name: 'Tang Qua',
            slug: 'tang-qua-white',
            color: 'White',
            imageOne: '/images/tang-qua1.jpg',
            imageTwo: '/images/tang-qua2.jpg',
            imageThree: '/images/tang-qua3.jpg',
            imageFour: '/images/tang-qua1.jpg',
            isAvailable: true,
            description: 'This is about Tang Qua',
            benefits: 'These are the benefits to Tang Qua'
        },
        {
            name: 'Leon Tong',
            slug: 'leon-tong-red-and-white',
            color: 'Red & White',
            imageOne: '/images/leon-tong1.jpg',
            imageTwo: '/images/leon-tong2.jpg',
            imageThree: '/images/leon-tong1.jpg',
            imageFour: '/images/leon-tong2.jpg',
            isAvailable: true,
            description: 'This is about Leon Tong',
            benefits: 'These are the benefits to Leon Tong'
        }
    ]
};

export default data;