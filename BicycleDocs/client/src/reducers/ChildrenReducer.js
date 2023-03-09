
export const getChildrenByParentReducer=(state={}, action)=>{
    switch(action.type){
        case 'GET_CHILDRENBYPARENT_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'GET_CHILDRENBYPARENT_SUCCESS':
            console.log('loading should change to false') 
            return{
            ...state, 
            loading: false, 
            success: true,
            children: action.payload
        }
        case 'GET_CHILDRENBYPARENT_FAILED': return {
            ...state, 
            loading: false, 
            error: true
        }
        default: return state;
    }
}

export const addChildReducer=(state={}, action)=>{
    switch(action.type){
        case 'ADD_CHILD_REQUEST': return{
            ...state, 
            loading: true
        }
        case 'ADD_CHILD_SUCCESS': return{
            ...state, 
            loading: false,
            child: action.payload
        }
        case 'ADD_CHILD_FAILED': return{
            ...state, 
            loading: false, 
            error: true
        }
        default: return state;
    }
}