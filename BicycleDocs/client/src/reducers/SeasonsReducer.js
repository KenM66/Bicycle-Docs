export const getCurrentSeasonsBySchoolReducer=(state={}, action)=>{

    switch(action.type){
        case 'GET_CURRENTSEASONSBYSCHOOL_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'GET_CURRENTSEASONSBYSCHOOL_SUCCESS' : return{
            ...state, 
            loading: false, 
            currentSeasons: action.payload
            
        }
        case 'GET_CURRENTSEASONSBYSCHOOL_FAILED' : return{
            ...state, 
            loading: false, 
            error: true
        }
        default: return{state}
    }

}