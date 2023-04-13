const express =require ('express')
const plans=express.Router()
const Plans=require('../models/seed.js')
// const data=require('../models/models')

//Index
plans.get('/',(req,res)=>{
res.send('welcome')
})
plans.get('/:arrayIndex',(req,res)=>{
res.send(Plans[req.params.arrayIndex])
})
module.exports=plans;