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

export const addNewChild=(child, parentId)=> dispatch=>{
    dispatch({type: 'ADD_CHILD_REQUEST'})

    axios.post(`http://localhost:5000/api/children/add-child/${parentId}`, {child}).then(res=>{
        console.log(res);
        dispatch({type: 'ADD_CHILD_SUCCESS', payload: res.data});
    })
    .catch(err=>{
        dispatch({type: 'ADD_CHILD_FAILED'});
        console.log(err);
    })
}