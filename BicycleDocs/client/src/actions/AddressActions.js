import axios from "axios";

export const getAddressByValues= (address)=> dispatch=>{
   
    dispatch({type: 'GET_ADDRESSBYVALUES_REQUEST'})

    axios.post('http://localhost:5000/api/addresses/getaddressbyvalues', {address}).then(res=>{
        console.log(res)
        dispatch({type: 'GET_ADDRESSBYVALUES_SUCCESS'})
    })
    .catch(err=>{
        dispatch({type: 'GET_ADDRESSBYVALUES_FAILED'})
        console.log(err)
    })
}

export const saveAddress= (address)=> dispatch=>{
    console.log(address.addressLine+  "  is the address")
    dispatch({type: 'SAVE_ADDRESS_REQUEST'})

   

    axios.post('http://localhost:5000/api/addresses/newaddress', {address}).then(res=>{
      
        dispatch({type: 'SAVE_ADDRESS_SUCCESS', payload: res.data})
        console.log(res.data);
    })
    .catch(err=>{
        dispatch({type: 'SAVE_ADDRESS_FAILED'})
        console.log(err)
    })
}