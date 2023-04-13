const db = require('./models');

const crud = async() => {
    try {
        //CREATE
        const newDino = await db.dino.create({
            name: 'Mr. T Rex',
            type: "a-type dinosaur",
        })

        const newCreature = await db.creature.create({

            type: "squirrel",
            img_url: "squirrel.com"
        })
    }}