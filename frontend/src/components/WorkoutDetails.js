import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'





const WorkoutDetails = ({workout}) => {
    const {dispatch}= useWorkoutsContext()
    const{user} = useAuthContext()

    const deleteWorkout = async () =>
{

if(!user){
    return
}

const response =  await fetch ('/api/workouts/' +workout._id ,{
    method :'DELETE',
    headers:{
        'Authorization' : `Bearer ${user.token}`
    }
})
const json = await response.json()

if(response.ok){
dispatch({type:'DELETE_WORKOUT' ,payload:json})
}
}


    return(
<div className="workout-details">

<h4>{workout.title}</h4>
<p><strong>Load (Kg) :</strong>{workout.load}</p>
<p><strong>Reps :</strong>{workout.reps}</p>
<p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
<span onClick={deleteWorkout} className="material-symbols-outlined">delete</span>


</div>







    )
}

export default WorkoutDetails;