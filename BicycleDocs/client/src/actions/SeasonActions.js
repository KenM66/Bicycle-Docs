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

    console.log(id)

    dispatch({type: 'GET_SEASONBYID_REQUEST'})

    axios.get(`http://localhost:5000/api/seasons/getseasonbyid/${id}`).then(res=>{
        console.log(res);

        dispatch({type: 'GET_SEASONBYID_SUCCESS', payload: res.data}) 

        }).catch(err=>{
            console.log(err);
            dispatch({type: 'GET_SEASONBYID_FAILED', payload: err})
        })

   

}

export const createNewSeason= (season, school)=> dispatch=>{
    dispatch({type: 'CREATE_SEASON_REQUEST'});

    axios.post('http://localhost:5000/api/seasons/addseason', {season: season, school: school})
    .then(res=>{
        dispatch({type: 'CREATE_SEASON_SUCCESS'});
        console.log(res);
    })
    .catch(err=>{
        dispatch({type: 'CREATE_SEASON_FAILED'});
        console.log(err);
    })
}  

export const getActiveSeasonsParentView= (schoolId) => dispatch=>{
    dispatch ({type: 'GET_ACTIVESEASONS_REQUEST'});

    axios.get(`http://localhost:5000/api/seasons/present-seasons-by-school-id/${schoolId}`)
    .then(res=>{
        console.log(res);

        dispatch({type: 'GET_ACTIVESEASONS_SUCCESS'});
    })
    .catch(err=>{
        console.log(err);
        dispatch({type: 'GET_ACTIVESEASONS_FAILED'});
    })
}