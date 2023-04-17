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

export const getSeasonByIdReducer=(state={}, action)=>{

    switch(action.type){
        case 'GET_SEASONBYID_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'GET_SEASONBYID_SUCCESS': return {
            ...state, 
            loading: false,
            season: action.payload
        }
        case 'GET_SEASONBYID_FAILED': return {
            ...state,
            loading: false, 
            error: true
        }
        default: return{state}
    }

}

export const createNewSeasonReducer= (state={}, action)=>{

    switch(action.type){
        case 'CREATE_SEASON_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'CREATE_SEASON_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true
        }
        case 'CREATE_SEASON_FAILED': return{
            ...state, 
            loading: false, 
            error: "Season Registration Failed."
        }
        default: return state;
    }

}

export const getActiveSeasonsBySchoolReducer = (state={}, action)=>{
    switch (action.type){
        case 'GET_ACTIVESEASONS_REQUEST' : return {
            ...state, 
            loading: true
        }
        case 'GET_ACTIVESEASONS_SUCCESS' : return{
            ...state, 
            loading: false, 
            seasons: action.payload
        }
        case 'GET_ACTIVESEASONS_FAILED' : return{
            ...state, 
            loading: false, 
            error: true
        }
        default: return state;
    }
}