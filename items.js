//use mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/circus', { useNewUrlParser: true, useUnifiedTopology: true })



var itemSchema = new Schema({
    itemName: {
        type: String,
        // required: true
    },
    shopName: {
        type: String,
    },
    website: {
        type: String
    },
    price: {
        type: Number
    }
})


module.exports = mongoose.model('ShoppingCart', itemSchema)

// var mod = mongoose.model('ShoppingCart', itemSchema)
// var item = new mod({
//     itemName: 'ipad',
//     shopName: 'momo',
//     website: 'momo.com',
//     price: 1000
// })

// console.log(item)
// item.save(function (err) {
//     if (err) {
//         console.log(err)
//     }
// })

