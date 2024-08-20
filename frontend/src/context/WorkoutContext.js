import {createContext, useReducer} from 'react'

export const WorkoutContext = createContext()

//here action means {type: 'SET_WORKOUTS', payload: json} this, that pass from the dispatch function
export const workoutsReducer = (state, action) => {
    switch (action.type){
        case 'SET_WORKOUT':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id )
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ( { children }) =>{

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    //this sets state initially as workouts as null

    return (
        <WorkoutContext.Provider value = {{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}