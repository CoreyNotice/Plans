const express =require ('express')
const plans=express.Router()
const Seed=require('../models/seeds.js')
const Data=require('../models/models.js')
// const data=require('../models/models')
// EDIT
plans.get('/:id/edit', (req, res) => {
    Data.findById(req.params.id)
        .then(foundData => {
            res.render('edit', {
                seeds: foundData,
                title: 'Edit Event'
            })
        })
})
plans.get('/seed',(req,res)=>{
  Data.insertMany(Seed)
    .then((done) => {
      console.log(done);
      res.status(303).redirect('/plans');
    })
    .catch((err) => console.log(err))
})

//New
plans.get('/new', (req, res) => {
    res.render('new',{
      title:'New Event'
    })
})
// home
plans.get('/', (req, res) => {
  Data.find()
  .then(foundData=>{
    res.render('home',
    {
      seeds:foundData,
      title:"Plan it Out"
  })
    
    })
})
//show
plans.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        seeds: foundBread,
        title:'Plan it Out'
      
      })
    })
    .catch(err => {
      res.send('404')
    })
})

  
// UPDATE
plans.put('/:id', (req, res) => {
    if(req.body.free === 'on'){
      req.body.free = true
    } else {
      req.body.free = false
    }
    Data.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(updatedData=>{
      console.log(updatedData)
    res.redirect(`/plans/${req.params.id}`)
  })
  })
  
// CREATE
plans.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.free === 'on') {
      req.body.free = true
    } else {
      req.body.free = false
    }
    Data.create(req.body)
    res.redirect('/plans')
  })

  // DELETE
plans.delete('/:id', (req, res) => {
    Data.findByIdAndDelete(req.params.id)
    .then(deletedData=>{
      res.status(303).redirect('/plans')
    })
  })
  
  
  



module.exports=plans;