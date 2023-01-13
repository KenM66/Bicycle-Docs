import axios from 'axios'


export const subscribe= (email, price)=> (dispatch, getState)=>{

    dispatch({type: "SUBSCRIBE_REQUEST"})
    console.log(price);
    let stripeId="";
  axios.post('http://localhost:5000/api/subscriptions/create-subscription', {email, price})
    .then(res=>{
        dispatch({type: 'SUBSCRIBE_SUCCESS'})
        console.log(res.data);
        window.open(res.data.url);
        stripeId= res.data.stripeId;
        console.log(stripeId);
    }).catch(err=>{
        dispatch({type: 'SUBSCRIBE_FAILED'})
        console.log(err);
    })

    
setTimeout(()=>{
    axios.put('http://localhost:5000/api/users/add-stripe-id', {stripeId: stripeId, email: email} )
    .then(res=>{
       // console.log(res.data);
    }).catch(err=>{
        console.log(err);
    })

},2000)
    


}