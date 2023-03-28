

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