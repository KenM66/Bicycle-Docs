import axios from 'axios';

export const saveParent= (parent, user, address)=> dispatch=>{
    dispatch({type: 'SAVE_PARENT_REQUEST'})

    axios.post('http://localhost:5000/api/parents/add-parent', {parent, user, address})
    .then(res=>{
        console.log(res);
        dispatch({type: 'SAVE_PARENT_SUCCESS'})
    })
    .catch(err=>{
        dispatch({type: 'SAVE_PARENT_FAILED'})
        console.log(err);
    })
}

export const getParentByUserId= (userId)=> dispatch=> {
    dispatch({type: 'GET_PARENTBYUSERID_REQUEST'});

    axios.get(`http://localhost:5000/api/parents/parent-by-user-id/${userId}`)
    .then(res=>{
        console.log(res.data);
        dispatch({type: 'GET_PARENTBYUSERID_SUCCESS', payload: res.data});
        console.log("Action should have been dispatched. ")
        
    })
    .catch(err=>{
        dispatch({type: 'GET_PARENTBYUSERID_FAILED'});
        console.log(err);
    })
}