const express = require('express');
const router = express.Router();
const db = require('../models')
const axios = require('axios')


router.get('/', (req, res) => {
    // if the user comes and is not logged -- they lack authorization
    if(!res.locals.user) {
        // redirect them ot the login
        res.redirect('/users/login?message=You are not authorized to view that page. Please authenticate to continue 😎')
    } else {
        // if they are allowed to be here, show them their profile
        res.render('users/profile.ejs')
    }
})


router.put('/cart', async (req, res)=>{
    try{
        if(!res.locals.user) {
            // redirect them ot the login
            res.redirect('/users/login?message=You are not authorized to view that page. Please authenticate to continue 😎')
        } else {
            const cart = await db.cart.findAll({
                where:{ 
                    userId: res.locals.user.id
                }
             })
             
            const vCartName = await db.vehicle.findAll({
            where: {
                 id: cart.vehicleId
             }
             })

             
          res.render('../views/cart.ejs', {
              cart:vCartName
          })
          console.log(cart)

        }

    // res.render('../views/cart.ejs')
    // // const cart = await db.carts.findAll()
    // await db.cart.findOne
    } catch(error){
        console.error
    }

})




router.delete('/cart', (req, res)=>{
    res.render('/cart')

})

// router.put('/cart', (req, res) => {
//     if() {


//     } else {
//         res.send('')

//     }

// })




module.exports = router;