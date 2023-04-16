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





//  router.get('/cart', async (req, res) => {
//     try {
//       // Your code to retrieve the cart data from the database goes here
//       const vcart = db.cart.findAll({
//         where: {
//           userId: res.locals.user.id
//         }
//       })
//       const cart = await db.vehicle.findAll({
//         where: {
//           id: vcart.map((item) => item.vehicleId)
//         }
//       }); 

//       // Render the cart template with the cart data
//       res.render('cart', { cart:cart });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('An error occurred while processing your request.');
//     }
//   });
router.get('/cart', async (req, res) => {
    try {
      // Retrieve the cart data from the database
      const vcart = await db.cart.findAll({
        where: {
          userId: res.locals.user.id
        }
      });
  
      // Retrieve the associated vehicle records for the cart
      const cart = await db.vehicle.findAll({
        where: {
          id: vcart.map((item) => item.vehicleId)
        }
      });
  
      // Render the cart template with the cart data
      res.render('cart', { cart: cart });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while processing your request.');
    }
  });
  




// router.put('/cart', async (req, res)=>{
//     try{
//         if(!res.locals.user) {
//             // redirect them ot the login
//             res.redirect('/users/login?message=You are not authorized to view that page. Please authenticate to continue 😎')
//         } else {
//             const cartLink = await db.cart.findAll({
//                 where:{ 
//                     userId: res.locals.user.id
//                 }
//              })
             
            // const cart = await db.vehicle.findAll({
            // where: {
            //      id: cartLink.vehicleId
            //  }
            //  })          
//           res.render('cart.ejs', {
//               cart:cart
//           })
//           console.log(cart)

//         }

//     // res.render('../views/cart.ejs')
//     // // const cart = await db.carts.findAll()
//     // await db.cart.findOne
//     } catch(error){
//         console.error
//     }

// })




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