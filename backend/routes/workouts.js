const express = require ('express')
const {
    createWorkout ,
    getAllWorkouts,
    getWorkouts,
    delWorkouts,
    updateWorkouts

} = require('../controllers/workoutController')


// THIS authorizes all the routes 
const requireAuth = require ('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

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