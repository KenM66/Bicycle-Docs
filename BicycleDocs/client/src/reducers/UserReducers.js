export const registerNewUserReducer= (state={}, action)=>{

    
    switch(action.type){
        case 'USER_REGISTER_REQUEST': return {

            ...state, 
            loading: true,
            success: false
        }
        case 'USER_REGISTER_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true, 
            registeredUser: action.payload,
          
        }
        case 'USER_REGISTER_FAILED' : return {
            ...state, 
            loading: false, 
            error: true
        }

        default: return state
    }

}

export const getAllUsersReducer=(state={}, action)=>{
    switch(action.type){
        case 'GET_ALLUSERS_REQUEST': return {
            ...state,
            loading: true
        }
        case 'GET_ALLUSERS_SUCCESS': return{
            ...state, 
            loading: false,
            users: action.payload
        }
        case 'GET_ALLUSERS_FAILED' : return{
            ...state, 
            loading: false, 
            error: true
        }
        default: return {state}
    }
}

export const updateEmailConfirmedReducer=(state={}, action)=>{

    switch(action.type){
        case 'EMAIL_UPDATE_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'EMAIL_UPDATE_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true
        }
        case 'EMAIL_UPDATE_FAILED': return {
            ...state, 
            loading: false,
            error: true
        }
        default: return {state}
    }
}

export const schoolLoginReducer=(state={}, action)=>{
    switch(action.type){
        case 'SCHOOL_LOGIN_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'SCHOOL_LOGIN_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true
        }
        case 'SCHOOL_LOGIN_FAILED': return{
            ...state, 
            loading: false, 
            error: "Invalid Credentials"
        }
        case 'LOGOUT' : return {
            ...state 
        }

        default: return {state}


    }
}

