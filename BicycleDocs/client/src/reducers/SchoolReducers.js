export const registerSchoolReducer= (state={}, action )=>{
    switch(action.type){
        case 'SCHOOL_REGISTER_REQUEST': return{
            ...state,
            loadingSchool: true,
        }
        case 'SCHOOL_REGISTER_SUCCESS': return{
            ...state, 
            registeredSchool: action.payload,
            loadingSchool: false, 
            successSchool: true, 
            
        }
        case 'SCHOOL_REGISTER_FAILED': return{
            ...state, 
            loadingSchool: false, 
            errorSchool: "School Registration Failed"
        }
        default: return state;
    }
    
}

export const getSchoolByUserReducer=(state={}, action) =>{
    switch(action.type){
        case 'GET_SCHOOLBYUSER_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'GET_SCHOOLBYUSER_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true, 
            school: action.payload
        }
        case 'GET_SCHOOLBYUSER_FAILED': return{
            ...state,
            loading: false, 
            error: "School Retrieval Failed"
        }

        default: return state;
        
    }
}

export const getSchoolBySchoolNumber=(state={}, action)=>{
    switch(action.type){
        case 'GET_SCHOOLBYSCHOOLNUMBER_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'GET_SCHOOLBYSCHOOLNUMBER_SUCCESS': return{
            ...state, 
            loading: false, 
            success: true,
            school: action.payload
        }
        case 'GET_SCHOOLBYSCHOOLNUMBER_FAILED': return{
            ...state, 
            loading: false, 
            error: "School Retrieval Failed" 
        }

        default: return state;
    }
}