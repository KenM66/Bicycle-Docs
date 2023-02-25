
export const saveParentReducer=(state={}, action)=>{
    switch(action.type){
        case 'SAVE_PARENT_REQUEST': return{
            ...state, 
            loadingSaveParent: true
        }
        case 'SAVE_PARENT_SUCCESS': return{
            ...state, 
            loadingSaveParent: false, 
            successSaveParent: true
        }
        case 'SAVE_PARENT_FAILED': return{
            ...state, 
            loadingSaveParent: false, 
            errorSaveParent: true
        }
        default: return state; 
    }
}

export const getParentByUserIdReducer=(state={}, action)=>{
    console.log(state);
    if(action.type==='GET_PARENTBYUSERID_REQUEST'){
        return{
            ...state, 
            loadingParent: true, 
            dummyBoolean: false
        }
    }
    else if(action.type==='GET_PARENTBYUSERID_SUCCESS'){
        console.log("About to execute");
        return{
            ...state, 
            loadingParent: false, 
            dummyBoolean: false,
            parentLoggedIn: action.payload
        }
    }
    else if(action.type==='GET_PARENTBYUSERID_FAILED'){
        return{
            ...state, 
            loadingParent: false, 
            errorParent: true
        }
    }
    else{
        return state; 
    }

    
}