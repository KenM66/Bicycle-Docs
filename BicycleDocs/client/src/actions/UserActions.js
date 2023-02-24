import axios from 'axios';



export const registerNewUser=(user)=> dispatch=>{
    dispatch ({type: 'USER_REGISTER_REQUEST'});

    axios.post('http://localhost:5000/api/users/adduser', user)
    .then(res=>{
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: res.data})
        console.log(res.data)
    })
    .catch(err=>{
        dispatch({type: 'USER_REGISTER_FAILED', payload: err})
        console.log(err)
    })
}

export const getAllUsers=()=>(dispatch)=>{
    dispatch({type: 'GET_ALLUSERS_REQUEST'});

    axios.get('http://localhost:5000/api/users/get-all-users')
    .then(res=>{
        dispatch({type: 'GET_ALLUSERS_SUCCESS', payload: res.data});
       
    }).catch(err=>{
        dispatch({type: 'GET_ALLUSERS_FAILED', payload: err})
    })
}

export const updateEmailConfirmed=(userId)=>(dispatch)=>{
    dispatch({type: 'EMAIL_UPDATE_REQUEST'});

    axios.put('http://localhost:5000/api/users/update-email-confirmed', userId)
    .then(res=>{
        dispatch({type: 'EMAIL_UPDATE_SUCCESS'});
        console.log(res);
    }).catch(err=>{
        dispatch({type: 'EMAIL_UPDATE_FAILED'});
        console.log(err);
    })
}

export const schoolLogin=(user)=> dispatch=>{
    dispatch({type: 'SCHOOL_LOGIN_REQUEST'})

    console.log("User passed in to Action: " + user.email)

    axios.post("http://localhost:5000/api/users/school-login", user)
    .then(res=>{
        dispatch({type: 'SCHOOL_LOGIN_SUCCESS'})



        

        localStorage.setItem('currentUser', JSON.stringify(res.data))

        console.log(res.data);
       
        window.location.href='/'
      
    })
   .catch(err=>{
    dispatch({type: 'SCHOOL_LOGIN_FAILED', payload: err})
    console.log(err)
   })

}

export const logoutUser= ()=> dispatch =>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('school')
    localStorage.removeItem('parent')
    dispatch({type: 'USER_LOGOUT'});

    window.location.href='/';
}

export const parentLogin= (user)=> dispatch=>{
    dispatch({type: 'PARENT_LOGIN_REQUEST'});

    axios.post("http://localhost:5000/api/users/parent-login", user)
    .then(res=>{
        dispatch({type: 'PARENT_LOGIN_SUCCESS', payload: res.data});
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        
    })
    .catch(err=>{
        dispatch({type: 'PARENT_LOGIN_FAILED', payload: err});
        console.log(err);
    })
}