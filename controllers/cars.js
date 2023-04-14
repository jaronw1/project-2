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
    const vehicle = await db.vehicle.findAll()
      res.render('cars/show.ejs', {
          vehicle:vehicle
      })
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2020?format=json`)
    .then(apiResponse => {
        const cars = apiResponse.data
        // console.log(cars)
        // res.render('cars/show', {cars: cars})
        cars.Results.forEach(car => {
            db.vehicle.findOrCreate({
                where: {
                    make_name: car.Make_Name,
                    model_name: car.Model_Name
                }
            })
            
        });
        

        console.log(cars.Make_Name)


        

    })
})


router.get('/', async(req, res) => {
    try{
      const vehicle = await db.vehicle.findAll()
      res.render('cars/show.ejs', {
          vehicle:vehicle,
      })
    }catch(err){
      console.log('Oops That didnt work')
    }
  })
  
  
  
  
  
  
  
  

// router.get('/', async (req, res) => {
//     try{


//     }catch {

//     }
// })






router.post('/', async (req, res) =>{
    try{

    if(!res.locals.user){
        res.redirect('/users/login?message=You are not authorized to view that page. Please authenticate to continue 😎')
    } else {
        // console.log('request', req.body)

        await db.cart.update(
            {vehicleId: req.body.carname},
            {userId: {user_id:foundUser.id}},
            res.redirect('/')
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