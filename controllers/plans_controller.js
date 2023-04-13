const express =require ('express')
const plans=express.Router()
const Seed=require('../models/seeds.js')
// const data=require('../models/models')
// EDIT
plans.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
      seeds: Seed[req.params.indexArray],
      index: req.params.indexArray
    })
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
plans.get('/:arrayIndex',(req,res)=>{
     if(Seed[req.params.arrayIndex]){
        res.render('show',{
            seeds:Seed[req.params.arrayIndex],
            index:req.params.arrayIndex,
        })
     }else{
        res.send('404')
     }

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
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/plans')
  })

  // DELETE
plans.delete('/:indexArray', (req, res) => {
    Seed.splice(req.params.indexArray, 1)
    res.status(303).redirect('/plans')
  })
  
  
  



module.exports=plans;