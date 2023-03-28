import axios from "axios";

export const addNewBicycle=(bicycle, childId)=> dispatch=>{
    
    dispatch({type: 'ADD_BICYCLE_REQUEST'});

    axios.post(`http://localhost:5000/api/bicycles/add-bicycle/${childId}`, {bicycle}).
    then(res=>{
        console.log(res);
        dispatch({type: 'ADD_BICYCLE_SUCCESS', payload: res.data});
    }
    ).catch(err=>{
        dispatch({type: 'ADD_BICYCLE_FAILED'});
        console.log(err);
    })

}