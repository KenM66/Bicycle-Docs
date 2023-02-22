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