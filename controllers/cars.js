const express = require('express');
const router = express.Router();
const db = require('../models')
const axios = require('axios')



// router.get('/', async (req, res) => {
//     let allCartedCars= await db.cart.findAll()
//     res.render('')
    

// })





router.get('/', async (req, res) =>{
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2020?format=json`)
    .then(apiResponse => {
        const cars = apiResponse.data
        console.log(cars)
        res.render('cars/show', {cars: cars})
    })
})


router.post('/', async (req, res) =>{
    let cart = await db.user.findOrCreate({
        where: {
            cart: req.body.cart
        }
    })
    res.redirect('/cart')
    res.send(req.body)
})

    
        // .catch(error => {
        //     console.log(error)
        // })

 
        
   


// router.post('/', async (req, res) => {
//     let newCar = await db.cars.create({name: req.body.Make_Name})
//     res.redirect('/car')
//     res.send(req.body)
// })



// router.get('/', async (req, res) => {
//     let allCars = await 
// })




module.exports = router;