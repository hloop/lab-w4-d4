const express = require('express');
const router  = express.Router();
const Plant   = require('../models/plant');

router.get('/plants', (req, res, next) => {
    Plant.find()
    .then((listOfPlants)=>{
        res.render('plants', {plantsArray: listOfPlants});
    })
    .catch((err)=>{
        next(err); 
     })
});

router.get('/plants/new', (req, res, next) =>{
    res.render('newPlant');
});

router.post('/plants/create', (req, res, next)=>{
   const newplant = new Plant ({
    species: req.body.species,
    family: req.body.family,
    subclass: req.body.subclass,
   })

   newPlant.save()
   .then((response)=>{
       res.redirect('/plants')
   })
   .catch((err)=>{
       next(err);
   }) 

})

router.get('/plants/:id/edit', (req, res, next)=>{
   Plant.findById(req.params.id)
   .then((thePlant)=>{
       res.render('editPlant', {thePlant})
   })
   .catch((err)=>{
       next(err);
   })
})


router.post('/plants/:id/update', (req, res, next)=>{
    Plant.findByIdAndUpdate(req.params.id, {
      species: req.body.species,
      family: req.body.family,
      subclass: req.body.subclass,
    })
    .then((thePlant)=>{
        res.redirect('/plants/'+thePlant._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

router.post('/plants/:id/delete', (req, res, next)=>{
    Plant.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/plants');
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/plants/:id', (req, res, next) => {
    const id = req.params.id;
    Plant.findById(id)
    .then((thePlant)=>{    
        res.render('plantsInfo', {plant: thePlant});
    })
    .catch((err)=>{
       next(err); 
    })
});



module.exports = router;

