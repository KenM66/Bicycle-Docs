import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getParentByUserId } from "../actions/ParentActions";
import { parentLogin } from "../actions/UserActions";
import Error from "../components/Error"
import Loader from "../components/Loader"

const ParentLoginScreen=()=>{

    const parentLoginState= useSelector(state=> state.parentLoginReducer);

    const parentByUserState= useSelector(state=> state.getParentByUserIdReducer);

    const {loading, error, loggedInUser}= parentLoginState;

    const {loadingParent, errorParent, parentLoggedIn}= parentByUserState;

    const [email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const dispatch= useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("currentUser")&&(loggedInUser)){
            setParent(loggedInUser);
        }
    }, [loggedInUser])

    useEffect(()=>{

        if(!localStorage.getItem("parent")){
            localStorage.setItem('parent', parentLoggedIn);
            window.location.href='/'
            console.log("This Works")
        }

    },[parentLoggedIn])



    const handleClick= async(e)=>{
        e.preventDefault();

        const user={
            email: email.toLowerCase(),
            password: password
        }

         console.log(user);
         dispatch(parentLogin(user));
        
        
    }

    const setParent=(user)=>{
        console.log(user._id)
        dispatch(getParentByUserId(user._id));
    
        setTimeout(()=>{
            console.log(parentByUserState);
         },2000)

        
    }

    return(
        <div>
            <div className= "row justify-content-center">
                <div className= "col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{marginTop: '150px'}}>
                    <h2 className="text-center m3">Parent Login</h2>


                    {(error || errorParent) &&(<Error error= 'Invalid Credentials'/>)}
                    {(loading || loadingParent) && (<Loader/>)}

                    <form onSubmit={handleClick}>

                    <input type= "text" placeholder= 'e-mail' className= 'form-control' value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type= "password" placeholder= 'password' className= 'form-control' value= {password} required onChange={(e)=>{setPassword(e.target.value)}}/>

                    <div className="text-end">
                        <button type= 'submit' className="btn mt-3 btn btn-success">Login</button>
                    </div>

                    </form>



                </div>
            </div>
        </div>
    )

}

export default ParentLoginScreen;