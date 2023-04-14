const express =require ('express')
const plans=express.Router()
const Seed=require('../models/seeds.js')
const Data=require('../models/models.js')
// const data=require('../models/models')
// EDIT
plans.get('/', (req, res) => {
    Data.find()
        .then(foundData => {
            res.render('index', {
                seeds: foundData,
                title: 'Index Page'
            })
        })
})

plans.get('/seed',(req,res)=>{
  Data.insertMany(Seed)
  .then(()=>res.status(303).redirect('/plans'))
  .catch((err) => console.log(err))
})

//New
plans.get('/new', (req, res) => {
    res.render('new')
})
// INDEX
plans.get('/', (req, res) => {
    res.render('index',
    {
      seeds:Seed,
      title:"This is the index page"
    })
})
//show
plans.get('/:id', (req, res) => {
  Data.findById(req.params.id)
      .then(foundData => {
          res.render('show', {
              seeds: foundData
          })
      })
})

  
// UPDATE
plans.put('/:arrayIndex', (req, res) => {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Seed[req.params.arrayIndex] = req.body
    res.redirect(`/plans/${req.params.arrayIndex}`)
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
    Data.push(req.body)
    res.redirect('/plans')
  })

  // DELETE
plans.delete('/:indexArray', (req, res) => {
    Seed.splice(req.params.indexArray, 1)
    res.status(303).redirect('/plans')
  })
  
  
  



module.exports=plans;