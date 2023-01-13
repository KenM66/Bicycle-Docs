export const subscribeReducer= (state={}, action)=>{
    switch(action.type){
        case 'SUBSCRIBE_REQUEST' : return{
            ...state, 
            subLoading: true
        }
        case 'SUBSCRIBE_SUCCESS': return{
            ...state, 
            subLoading: false, 
            subSuccess: true
        }
        case 'SUBSCRIBE_FAILED': return{
            ...state, 
            loading: false, 
            subError: true
        }
        default: return state
    }
}