import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSchoolByUserId } from "../actions/SchoolActions"
import { schoolLogin } from "../actions/UserActions"
import Error from "../components/Error"
import Loader from "../components/Loader"


const SchoolLoginScreen=()=>{
    const schoolLoginReducer= useSelector(state=> state.schoolLoginReducer)
    const {loading, error} = schoolLoginReducer
    const [email, setEmail]= useState('')
    const[password, setPassword]= useState('')

    const getSchoolState= useSelector(state=> state.getSchoolByUserReducer)

    const {school}= getSchoolState
  

    const dispatch= useDispatch();

    const handleClick= async (e)=>{
        e.preventDefault()

        const user={
            email: email,
            password: password,
          

        }

        dispatch(schoolLogin(user))

        const currentUser= localStorage.getItem('currentUser');

        console.log(currentUser);

        dispatch(getSchoolByUserId(currentUser));

        console.log(school);

        localStorage.setItem('school', school);

        



        
    }

    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    })


    return(
        <div>
            <div className= "row justify-content-center">
                <div className= "col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{marginTop: '150px'}}>
                    <h2 className="text-center m3">School Login</h2>


                    {error &&(<Error error= 'Invalid Credentials'/>)}
                    {loading && (<Loader/>)}

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



export default SchoolLoginScreen;