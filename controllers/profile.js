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


router.put('/cart', (req, res) => {
    if() {


    } else {
        res.send('')

    }

})


router.delete('/', (req, res) => {

})


module.exports = router;