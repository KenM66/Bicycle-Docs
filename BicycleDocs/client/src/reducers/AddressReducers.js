export const addAddressToSchoolReducer=(state={}, action)=>{
    switch(action.type){
        case 'ADD_ADDRESS_REQUEST': return{
            ...state,
            loadingAddressToSchool: true
        }
        case 'ADD_ADDRESS_SUCCESS': return{
            ...state,
            loadingAddressToSchool: false,
            successAddressToSchool: true
        }

        case 'ADD_ADDRESS_FAILED': return{
            ...state, 
            loadingAddressToSchool: false, 
            errorAddressToSchool: true
        }

        default: return state

    }
}

export const getAddressByValuesReducer=(state={}, action)=>{
    switch(action.type){
        case 'GET_ADDRESSBYVALUES_REQUEST': return{
            ...state,
            loadingGetAddress: true
        }
        case 'GET_ADDRESSBYVALUES_SUCCESS': return{
            ...state,
            loadingGetAddress: false, 
            successGetAddress: true
        }
        case 'GET_ADDRESSBYVALUES_FAILED': return{
            ...state, 
            loadingGetAddress: false, 
            errorGetAddress: true
            
        }

        default: return state
    }
}

export const saveAddressReducer=(state={}, action)=>{
    switch(action.type){
        case 'SAVE_ADDRESS_REQUEST': return{
            ...state,
            loadingSaveAddress: true
        }
        case 'SAVE_ADDRESS_SUCCESS': return{
            ...state, 
            loadingSaveAddress: false, 
            successSaveAddress: true,
            registeredAddress: action.payload
        }
        case 'SAVE_ADDRESS_FAILED': return{
            ...state, 
            loadingSaveAddress: false,
            errorSaveAddress: true
        }
        default: return state
    }
}