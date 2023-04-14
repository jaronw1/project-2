const express = require('express');
const router = express.Router();
const db = require('../models')
const axios = require('axios');
const user = require('../models/user');



// router.get('/', async (req, res) => {
//     let allCartedCars= await db.cart.findAll()
//     res.render('')
    

// })





router.get('/', async (req, res) =>{
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2020?format=json`)
    .then(apiResponse => {
        const cars = apiResponse.data
        // console.log(cars)
        res.render('cars/show', {cars: cars})
        // let vehicles = db.vehicles.findOrCreate({
        //     where: {
        //         make_name:cars,
        //         make_id:cars
        //     }
        // })

    })
})


router.post('/', async (req, res) =>{
    try{

    if(!res.locals.user){
        res.redirect('/users/login?message=You are not authorized to view that page. Please authenticate to continue 😎')
    } else {
        // console.log('request', req.body)


        let foundUser = await db.user.findOne({
            where: {
                id: res.locals.user.id,
                //cart: req.body.carname
            }
        })


        await db.cart.update(
            {userId: user.id},
            {vehicleId: }
        )

        await db.vehicle.findOne(
            {cart: req.body.carname},
            {where: {user_id:foundUser.id}}
        )
    }


    // res.send(req.body.carname)
} catch(error) {
    console.log(error)
}
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