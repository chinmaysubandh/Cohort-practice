import express from "express"

const app = express();

app.get('/api/products', (req, res) => {

    const products = [
        {
            "name": "Awesome Soft Hat",
            "price": "114.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "1"
        },
        {
            "name": "Fantastic Concrete Soap",
            "price": "342.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "2"
        },
        {
            "name": "Bespoke Granite Salad",
            "price": "382.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "3"
        },
        {
            "name": "Handmade Soft Computer",
            "price": "452.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "4"
        },
        {
            "name": "Elegant Plastic Chicken",
            "price": "520.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "5"
        },
        {
            "name": "Refined Rubber Pants",
            "price": "143.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "6"
        },
        {
            "name": "Handmade Concrete Towels",
            "price": "592.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "7"
        },
        {
            "name": "Recycled Metal Chips",
            "price": "965.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "8"
        },
        {
            "name": "Refined Rubber Shirt",
            "price": "124.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "9"
        },
        {
            "name": "Fantastic Bronze Shirt",
            "price": "684.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "10"
        },
        {
            "name": "Elegant Steel Bacon",
            "price": "696.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "11"
        },
        {
            "name": "Sleek Fresh Shoes",
            "price": "787.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "12"
        },
        {
            "name": "Handmade Steel Chair",
            "price": "989.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "13"
        },
        {
            "name": "Generic Frozen Towels",
            "price": "653.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "14"
        },
        {
            "name": "Sleek Concrete Sausages",
            "price": "103.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "15"
        },
        {
            "name": "Small Granite Ball",
            "price": "930.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "16"
        },
        {
            "name": "Luxurious Granite Gloves",
            "price": "407.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "17"
        },
        {
            "name": "Generic Bronze Chair",
            "price": "955.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "18"
        },
        {
            "name": "Awesome Metal Salad",
            "price": "130.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "19"
        },
        {
            "name": "Sleek Rubber Hat",
            "price": "6.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "20"
        },
        {
            "name": "Rustic Fresh Sausages",
            "price": "19.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "21"
        },
        {
            "name": "Refined Metal Pizza",
            "price": "334.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "22"
        },
        {
            "name": "Handmade Rubber Sausages",
            "price": "162.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "23"
        },
        {
            "name": "Refined Cotton Car",
            "price": "955.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "24"
        },
        {
            "name": "Electronic Metal Car",
            "price": "195.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "25"
        },
        {
            "name": "Awesome Fresh Cheese",
            "price": "359.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "26"
        },
        {
            "name": "Fantastic Granite Salad",
            "price": "132.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "27"
        },
        {
            "name": "Oriental Metal Gloves",
            "price": "998.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "28"
        },
        {
            "name": "Electronic Plastic Soap",
            "price": "176.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "29"
        },
        {
            "name": "Generic Frozen Pizza",
            "price": "904.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "30"
        },
        {
            "name": "Practical Soft Fish",
            "price": "550.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "31"
        },
        {
            "name": "Tasty Wooden Chicken",
            "price": "569.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "32"
        },
        {
            "name": "Unbranded Frozen Salad",
            "price": "298.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "33"
        },
        {
            "name": "Incredible Metal Gloves",
            "price": "809.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "34"
        },
        {
            "name": "Elegant Concrete Shirt",
            "price": "198.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "35"
        },
        {
            "name": "Recycled Soft Keyboard",
            "price": "341.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "36"
        },
        {
            "name": "Awesome Wooden Shirt",
            "price": "252.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "37"
        },
        {
            "name": "Rustic Frozen Mouse",
            "price": "522.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "38"
        },
        {
            "name": "Recycled Concrete Ball",
            "price": "911.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "39"
        },
        {
            "name": "Recycled Concrete Cheese",
            "price": "87.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "40"
        },
        {
            "name": "Generic Wooden Tuna",
            "price": "852.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "41"
        },
        {
            "name": "Sleek Granite Cheese",
            "price": "172.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "42"
        },
        {
            "name": "Ergonomic Steel Soap",
            "price": "123.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "43"
        },
        {
            "name": "Handcrafted Wooden Chips",
            "price": "250.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "44"
        },
        {
            "name": "Intelligent Metal Cheese",
            "price": "389.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "45"
        },
        {
            "name": "Refined Soft Shirt",
            "price": "584.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "46"
        },
        {
            "name": "Unbranded Concrete Table",
            "price": "77.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "47"
        },
        {
            "name": "Incredible Rubber Table",
            "price": "528.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "48"
        },
        {
            "name": "Practical Cotton Pizza",
            "price": "740.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "49"
        },
        {
            "name": "Awesome Wooden Shoes",
            "price": "568.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "50"
        },
        {
            "name": "Modern Metal Shirt",
            "price": "172.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "51"
        },
        {
            "name": "Modern Wooden Car",
            "price": "767.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "52"
        },
        {
            "name": "Practical Frozen Computer",
            "price": "572.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "53"
        },
        {
            "name": "Bespoke Bronze Shoes",
            "price": "312.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "54"
        },
        {
            "name": "Oriental Steel Chicken",
            "price": "457.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "55"
        },
        {
            "name": "Rustic Metal Chicken",
            "price": "276.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "56"
        },
        {
            "name": "Handcrafted Cotton Bike",
            "price": "847.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "57"
        },
        {
            "name": "Tasty Soft Tuna",
            "price": "172.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "58"
        },
        {
            "name": "Sleek Cotton Chicken",
            "price": "414.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "59"
        },
        {
            "name": "Licensed Cotton Salad",
            "price": "530.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "60"
        },
        {
            "name": "Incredible Metal Bacon",
            "price": "525.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "61"
        },
        {
            "name": "Rustic Metal Shirt",
            "price": "564.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "62"
        },
        {
            "name": "Intelligent Bronze Bike",
            "price": "672.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "63"
        },
        {
            "name": "Generic Plastic Pizza",
            "price": "158.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "64"
        },
        {
            "name": "Electronic Rubber Chips",
            "price": "517.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "65"
        },
        {
            "name": "Recycled Fresh Table",
            "price": "350.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "66"
        },
        {
            "name": "Oriental Steel Hat",
            "price": "431.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "67"
        },
        {
            "name": "Recycled Bronze Tuna",
            "price": "437.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "68"
        },
        {
            "name": "Incredible Wooden Hat",
            "price": "834.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "69"
        },
        {
            "name": "Bespoke Frozen Table",
            "price": "577.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "70"
        },
        {
            "name": "Gorgeous Bronze Pants",
            "price": "93.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "71"
        },
        {
            "name": "Luxurious Wooden Chips",
            "price": "866.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "72"
        },
        {
            "name": "Practical Steel Shoes",
            "price": "373.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "73"
        },
        {
            "name": "Modern Wooden Towels",
            "price": "998.00",
            "image": "https://loremflickr.com/640/480/business",
            "id": "74"
        }
    ]
    if (req.query.search) {
        const filterproducts = products.filter(products => products.name.includes(req.query.search))
        res.send(filterproducts)
        return;
    }
    setTimeout(() => {
        res.send(products)
    }, 2000);

})




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
