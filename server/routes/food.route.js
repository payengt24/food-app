const router = require('express').Router();
const Food = require('../models/food.schema');


// Send back all the foods.
router.get('/', (req, res) => {
    Food.find({})
        .then((databaseResults) => {
            // good things happened!
            res.send(databaseResults);
        })
        .catch((error) => {
            console.log('error make food find', error);
            res.sendStatus(500);
        });
});

// Add a new food. 
router.post('/', (req, res) => {
    const foodToAdd = req.body; // body.name & body.cost
    console.log('Food to add:', foodToAdd);
    Food.create(foodToAdd)
        .then((databaseResults) => {
            // good things happened!
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error make food find', error);
            res.sendStatus(500);
        });
});

module.exports = router;