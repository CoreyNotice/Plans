// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const planSchema = new Schema({
    firstName: { type: String, required:true,uniqueCaseInsensitive: true },
    lastName: { type: String, required:true,uniqueCaseInsensitive: true },
    todo: { type: String,uniqueCaseInsensitive: true },
   todoone: { type: String, required:true,uniqueCaseInsensitive: true  },
   todotwo: { type: String,uniqueCaseInsensitive: true },
   todothree: { type: String,uniqueCaseInsensitive: true },
   todofour: { type: String,uniqueCaseInsensitive: true }
  
})

const Plans = mongoose.model('Plans', planSchema)

module.exports = Plans