const express =require ('express')
const plans=express.Router()
const Plans=require('../models/seeds.js')
const Seed=require('../models/seeds.js')
// const data=require('../models/models')

// INDEX
plans.get('/', (req, res) => {
    res.render('index',
    {
      seeds:Seed,
      title:"This is the index page"
    })
})
//show
plans.get('/:arrayIndex',(req,res)=>{
     if(Seed[req.params.arrayIndex]){
        res.render('show',{
            seeds:Seed[req.params.arrayIndex]
        })
     }else{
        res.send('404')
     }
})



module.exports=plans;