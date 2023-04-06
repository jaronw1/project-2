const express = require('express')
const router = express.Router()


//GET USER/ signup
router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})
//post
router.post('/', (req, res) => {
    console.log(req.body)



    res.send('create a new user if they dont exist, log them in')
})
//get
router.get('/login', (req, res) => {
    res.send('show a form that lets the user login')
})
//post
router.post('/login', (req, res) => {
    res.send('verify credentials that are given by the user to login')
})
//get
router.get('/logout', (req, res) => {
    res.send('log a user out')
})
//get
router.get('/profile', (req, res) => {
    res.send('show the current user their profile page')
})


module.exports = router