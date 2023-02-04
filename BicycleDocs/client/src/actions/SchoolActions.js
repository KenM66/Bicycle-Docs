import axios from "axios"

export const registerNewSchool= (school, user, address)=>dispatch=>{
    dispatch({type: "SCHOOL_REGISTER_REQUEST"})

    axios.post('http://localhost:5000/api/schools/addschool', {school: school, user: user, address: address})
    .then(res=>{
        dispatch({type: "SCHOOL_REGISTER_SUCCESS", payload: res.data})
        console.log(res);
    })
     .catch(err=>{
        dispatch({type: "SCHOOL_REGISTER_FAILED"})
        console.log(err);
     })

     
    }

export const addAddressToSchool= (addressId, schoolId)=> dispatch=>{
    dispatch({type: 'ADD_ADDRESS_REQUEST'})

    axios.put(`http://localhost:5000/api/schools/add-address-to-school/${addressId}/${schoolId}`).then(res=>{
        console.log(res)
        dispatch({type:'ADD_ADDRESS_SUCCESS'})
    })
    .catch(err=>{
        dispatch({type:'ADD_ADDRESS_FAILED'})
        console.log(err)
    })
}



export const getSchoolByUserId= (userId)=>dispatch=>{
    dispatch({type: 'GET_SCHOOLBYUSER_REQUEST'})


    axios.get(`http://localhost:5000/api/schools/findschoolbyuser/${userId}`).then(res=>{
        console.log(res)
        dispatch({type:'GET_SCHOOLBYUSER_SUCCESS', payload: res.data})
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_SCHOOLBYUSER_FAILED'})
    })

}