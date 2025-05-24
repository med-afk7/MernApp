const express = require ('express')
const Workout=require('../models/workoutModel')

const router = express.Router()



//get all workouts
router.get('/', (req, res)=>{
    res.json({mssg: 'Gett all workouts'})

})

//get a single workout

router.get('/:id', (req,res)=>{
    res.json({mssg: 'Gett a single workout'})

})

//post a workout
router.post('/', async (req,res)=>{

    const{title,reps,load}= req.body


try{
    const workout = await Workout.create({title,reps,load}); 
    res.status(200).json(workout) 
    console.log(req.body)

}catch(error){
    res.status(400).json({error:error.message})

}


})

//Delete
router.delete('/:id', (req,res)=>{
    res.json({mssg:'Delete a workout'})
})

//update a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg:'Update a workout'})
})








module.exports = router 