const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const foodRouter = require('./routes/food.route');
const mongoose = require('mongoose');

app.get('/food', (req, res) => {
    res.send({name: 'pasta', deliciousness_rating: 9, is_hot: 'yes'})
})



app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/food', foodRouter);

//---------- Connection to Database---------//
const databaseUrl = 'mongodb://localhost:27017/kitchen';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('mongoose connected on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection failed', error);
}); 

//---------- Connection to Database END---------//

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
