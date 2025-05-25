require('dotenv').config()

const morgan = require ('morgan');
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');



//creating the express app ;
const app = express();


//middleware
app.use(express.json()) // helps us get the request body


app.use(morgan('tiny'));

app.use(express.json());



//route

app.use('/api/workouts',workoutRoutes);




//connecting to db 

mongoose.connect(process.env.MONGO_URI)
.then(() => {


//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('listing on port ' , process.env.PORT);
})

})
.catch((err) =>{
    console.log(err)
})




