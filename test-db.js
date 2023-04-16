const db = require('./models');

db.cart.findAll({
    where:{ 
        userId: 1
    }
 })
 console.log(cart)