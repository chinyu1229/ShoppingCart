//use mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/circus', { useNewUrlParser: true, useUnifiedTopology: true })

var Schema = mongoose.Schema

var itemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    shopName: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    website: {
        type: Number
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('shoppingCart', itemSchema)


