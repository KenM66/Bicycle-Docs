
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
    switch(action.type){
        
        case 'GET_PARENTBYUSERID_REQUEST': console.log("test"); return{
            ...state, 
            loadingParent: true
         }
        case 'GET_PARENTBYUSERID_SUCCESS': console.log("Success dispatched"); return{
            ...state, 
            loadingParent: false, 
            parentLoggedIn: action.payload
           
        }
        
        case 'GET_PARENTBYUSERID_FAILED': return{
            ...state, 
            loadingParent: false, 
            errorParent: true
        }

        default:  return {state};
    }
   
}