'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductShema = Shema({
    name: String,
    picture: String,
    price: { type: Number, default: 0},
    category: { type: String, enum: ['computers', 'phones', 'accesories' ]  },
    description: String
})

mongoose.model('Product', ProductShema)