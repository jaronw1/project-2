const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine, ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/users', require('./controllers/users.js'))


app.listen(PORT, () => {
    console.log(`authenticating user on port ${PORT}`)
})