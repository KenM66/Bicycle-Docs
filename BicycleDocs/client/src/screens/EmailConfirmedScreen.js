import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Error from "../components/Error"
import { useParams } from "react-router-dom";
import {updateEmailConfirmed} from "../actions/UserActions"
import React from 'react';

const EmailConfirmedScreen=()=>{

    const getEmailConfirmedState= useSelector(state=> state.updateEmailConfirmedReducer);

    const {loading, error, success} = getEmailConfirmedState;

    const userId= useParams();

    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(updateEmailConfirmed(userId))
    },[])

    return(
      
      
      
      
      <div>
            {loading && (<Loader/>)}  
            {error &&(<Error/>)}
            {success &&(
            <><h1>E-Mail Confirmed!</h1><h5>You may now login!</h5></>)}
        </div>
    )

}

export default EmailConfirmedScreen;