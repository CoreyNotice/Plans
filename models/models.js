// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

const seedSchema = new Schema({
    name: { type: String, required:true,uniqueCaseInsensitive: true },
    city: { type: String, required:true,uniqueCaseInsensitive: true },
    state: { type: String,uniqueCaseInsensitive: true },
   street_address: { type: String, required:true,uniqueCaseInsensitive: true  },
   about: { type: String,uniqueCaseInsensitive: true },
   image: { type: String,uniqueCaseInsensitive: true },
   free:{type:Boolean},
   date:{type:Date},
   time:{type:String}


  
})

const Data = mongoose.model('Data', seedSchema)

module.exports = Data