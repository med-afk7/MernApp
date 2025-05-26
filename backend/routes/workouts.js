const express = require ('express')
const {
    createWorkout ,
    getAllWorkouts,
    getWorkouts,
    delWorkouts,
    updateWorkouts

} = require('../controllers/workoutController')


const router = express.Router()

//get all workouts
router.get('/', getAllWorkouts)

//get a single workout
router.get('/:id', getWorkouts)

//post a workout
router.post('/', createWorkout)

//Delete
router.delete('/:id', delWorkouts)

//update a workout
router.patch('/:id', updateWorkouts)



module.exports = router 