
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