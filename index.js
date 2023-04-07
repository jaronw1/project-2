const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const cryptoJs = require('crypto-js')
const db = require('./models')


const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine, ejs')

app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}]: ${req.method} ${req.url}`)
    console.log('request body:', req.body)
    // res.locals.myData = 'hi 👋'
    next()
})



app.use(async (req, res, next) => {
    try {
        if (req.cookies.userID) {
            const decryptedPk = cryptoJsAES.decrypt(req.cookies.userId, process.env.ENC_KEY)
            const decryptedPkString = decryptedPk.toString(cryptoJs.enc.Utf8)
            const user = await db.user.findByPk(decryptedPkString)
            res.locals.user = user

        } else {
            res.locals.user = null

        }

    } catch(error) {
        console.log(error)

        res.locals.user = null
    } finally {

        next()

    }
})


app.get('/', (req, res) => {
    console.log(res.locals)
    res.render('index.ejs')
    })


app.use('/users', require('./controllers/users.js'))


app.listen(PORT, () => {
    console.log(`authenticating user on port ${PORT}`)
})