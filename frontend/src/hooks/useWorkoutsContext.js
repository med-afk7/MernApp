import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkout context must be used inside a workoutcontext provider')
    }

    return context
}