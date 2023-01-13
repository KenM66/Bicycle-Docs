export const getPriceReducer=(state={}, action)=>{

    switch(action.type){
        case 'GET_PRICE_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'GET_PRICE_SUCCESS' : return{
            ...state, 
            loading: false, 
            success: true,
            price: action.payload
        }
        case 'GET_PRICE_FAILED' : return {
            ...state, 
            loading: false, 
            error: true
        }

        default: return state
        }
    }



