import axios from 'axios';

export const getPrice=()=>(dispatch, getState)=>{
    dispatch({type: 'GET_PRICE_REQUEST'})

    axios.get('http://localhost:5000/api/prices/subscriptionPrice').then(res=>{
        dispatch({type: 'GET_PRICE_SUCCESS', payload: res.data})
        console.log(res.data);
    }).catch(err=>{
        dispatch({type: 'GET_PRICE_FAILED', payload:err})
    })
}