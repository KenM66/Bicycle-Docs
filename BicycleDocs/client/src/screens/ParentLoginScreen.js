import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const ParentLoginScreen=()=>{

    const parentLoginState= useSelector(state=> state.parentLoginReducer);

    const {loading, error, loggedInUser}= parentLoginState;

    const [email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const dispatch= useDispatch();

    const handleClick= async(e)=>{
        e.preventDefault();

        const user={
            email: email.toLowerCase(),
            password: password
        }

         console.log(user);
    }

    const setParent=()=>{
        
    }

}

export default ParentLoginScreen;