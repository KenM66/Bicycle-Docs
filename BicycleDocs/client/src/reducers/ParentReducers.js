
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
    switch(action.type){
        case 'GET_PARENTBYUSERID_REQUEST': return{
            ...state, 
            loadingParent: true
         }
        case 'GET_PARENTBYUSERID_SUCCESS': return{
            ...state, 
            loadingParent: false, 
            parentLoggedIn: action.payload
        }
        case 'GET PARENTBYUSERID_FAILED': return{
            ...state, 
            loadingParent: false, 
            parentError: true
        }

        default: return state;
    }
}