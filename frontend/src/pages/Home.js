import {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    //const [workouts, setWorkouts] = useState(null)
    const { workouts, dispatch} = useWorkoutsContext()

    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                //setWorkouts(json)
                dispatch({type: 'SET_WORKOUT', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])
    //[] means that useEffect function fires only once when the content first renders

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails  key={workout._id} workout={workout}/>
                    
                ))}
            </div>
            <WorkoutForm/>
        </div>
     );
}
 
export default Home;