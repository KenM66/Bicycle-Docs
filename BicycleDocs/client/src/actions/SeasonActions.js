import axios from "axios";

export const getActiveSeasonsBySchool=(school)=> (dispatch, getState)=>{

   // const currentUser= JSON.parse(localStorage.getItem('currentUser'))

   
   
    dispatch({type: 'GET_CURRENTSEASONSBYSCHOOL_REQUEST'})

    axios.get(`http://localhost:5000/api/seasons/getseasonsbyschool/${school._id}`).then(res=>{
        console.log(res);

        dispatch({type: 'GET_CURRENTSEASONSBYSCHOOL_SUCCESS', payload: res.data})

    }).catch(err=>{
        console.log(err);

        dispatch({type: 'GET_CURRENTSEASONSBYSCHOOL_FAILED', payload: err})
    })
}

export const getSeasonById= (id)=> (dispatch, getState)=>{

    dispatch({type: 'GET_SEASONBYID_REQUEST'})

   

}