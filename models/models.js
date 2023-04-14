// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

const seedSchema = new Schema({
    name: { type: String,uniqueCaseInsensitive: true },
    city: { type: String,uniqueCaseInsensitive: true },
    state: { type: String,uniqueCaseInsensitive: true },
   street_address: { type: String,uniqueCaseInsensitive: true  },
   about: { type: String,uniqueCaseInsensitive: true },
   image: { type: String,uniqueCaseInsensitive: true },
   free:{type:Boolean,uniqueCaseInsensitive: true},
   date:{type:Date,uniqueCaseInsensitive: true},
   time:{type:String,uniqueCaseInsensitive: true}


  
})

const Data = mongoose.model('Data', seedSchema)

module.exports = Data