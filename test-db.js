const db = require('./models');
const axios = require('axios')

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
        
    })
    
})
