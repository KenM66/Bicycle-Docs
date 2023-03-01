import axios from "axios";

export const getChildrenByParentId=(parentId)=> dispatch=>{
    dispatch({type: 'GET_CHILDRENBYPARENT_REQUEST'})

    axios.get(`http://localhost:5000/api/children/get-children-by-parent/${parentId}` )
    .then(res=>{
        console.log(res.data);
        dispatch({type: 'GET_CHILDRENBYPARENT_SUCCESS', payload: res.data});
    })
    .catch(err=>{
        dispatch({type: 'GET_CHILDRENBYPARENT_FAILED'});
        console.log(err);
    })
}