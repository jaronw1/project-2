const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
require('dotenv').config()


//GET USER/ signup
router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})
//post
router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        const [newUser, created] = await db.user.findOrCreate({
            where: {
                email: req.body.email
            }
        })
        if(!created){
            res.redirect('/users/login?message=Please login to your account to continue 🐵')
        } else {
            const hashedPassword = bcrypt.hashSync(req.body.password, 12)
            //
            newUser.password = hashedPassword
            await newUser.save()
            //
            const encryptedPk = cryptoJs.AES.encrypt(newUser.id.toString(), process.env.ENC_KEY)
            //
            res.cookie('userId', encryptedPk.toString())
            //
            res.redirect('/users/profile')
        }

    } catch(error){
        console.log(error)
        res.redirect('/')
    }
}
)
//get
router.get('/login', (req, res) => {
    console.log(req.query)
    res.render('users/login.ejs', {
        message: req.query.message ? req.query.message : null
    })
})
//post
router.post('/login', async (req, res) => {
    try {
        const foundUser = await db.user.findOne({
            where: { 
                email: req.body.email
            }
        })
        const failedLoginMessage = 'Incorrect email or password ☹️'
        if (!foundUser) {
            res.redirect('/users/login?message=' + failedLoginMessage)
        } else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            console.log('incorrect pass')

            res.redirect('/users/login?message=' + failedLoginMessage)
        } else {
            const encryptedPk = cryptoJs.AES.encrypt(foundUser.id.toString(), process.env.ENC_KEY)
            //
            res.cookie('userId', encryptedPk.toString())
            //
            res.redirect('/users/profile')
        }
    } catch(error) {
        console.log(error)
        res.redirect('/')
    }

})



//get
router.get('/logout', (req, res) => {
    console.log('loggin user out')
    res.clearCookie('userId')
    res.redirect('/')
    
})
//get
router.get('/profile', (req, res) => {
    if(!res.localuser) {
        res.redirect('/users/login?message="You are not authorized to view that page. Please authenticate to continue 😎')
    } else {
        res.render('user/profiles.ejs')
    }
})


module.exports = router