

export const addBicycleReducer= (state={}, action)=>{
    switch(action.type){
        case 'ADD_BICYCLE_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'ADD_BICYCLE_SUCCESS': return{
            ...state, 
            loading: false, 
            bicycle: action.payload
        }
        case 'ADD_BICYCLE_FAILED': return{
            ...state, 
            loading: false, 
            error: true
        }
        default: return state;
    }
}

export const getBicyclesByChildIdReducer= (state={}, action)=>{
    switch(action.type){
    case 'GET_BICYCLESBYCHILD_REQUEST': return{
        ...state, 
        bikesLoading: true
    }
    case 'GET_BICYCLESBYCHILD_SUCCESS': return{
        ...state, 
        bikesLoading: false, 
        bikes: action.payload
    }
    case 'GET_BICYCLESBYCHILD_FAILED': return{
        ...state, 
        bikesLoading: false, 
        bikesError: true
    }
    default: return state;
    
  }
}