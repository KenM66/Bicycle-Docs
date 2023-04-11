import {useEffect } from 'react'; 
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup'
import { useFormik } from 'formik';
import { getSchoolBySchoolNumber } from '../actions/SchoolActions';
import Loader from "../components/Loader";
import Error from "../components/Error";

const RegisterLookupScreen=()=>{


    const getSchoolByNumberState=
    useSelector(state=> state.getSchoolBySchoolNumberReducer);

    const {loading, error, success, school}= getSchoolByNumberState;

    const dispatch= useDispatch();

    useEffect(()=>{
        if(school){
            console.log(school);
           
        }
    },[school])

    const lookUpSchema= Yup.object().shape({
        number: Yup.string().required("School number is required").matches(/^[0-9]+$/, "Must be digits only")
    })

    const formik= useFormik({
        initialValues: {
            number: ''
        },

        validationSchema: lookUpSchema, 
        onSubmit:(values)=>{
            dispatch(getSchoolBySchoolNumber(values.number))
            console.log(school.name);
            
        }
    })

    return(
        <div><br/><br/>
            <label htmlFor='number'>Number</label>
            <input name='number' type="text" id="number" 
            value= {formik.values.number} 
            onChange={formik.handleChange} 
            onBlur= {formik.handleBlur} />
            <div>{formik.errors.number && formik.touched.number? 
            (<div><h5>{formik.errors.number}</h5></div>): null}</div>
            <br/><br/>
            
            {loading &&(<Loader/>)}
            {error && (<Error/>)}
            {(success) &&(
                <div className='square border border-info' style={{width: '1100px', margin: '0 auto'}}>
                    {school &&
                    ( 
                 <div>
                    <h5>{school.name}</h5>
                    <h5></h5>
                </div>
                  
                    
                    )}
                    {!school &&(<h5>No school found for number input</h5>)}
                   
                </div>
            )}

            <br/><br/>

            <button className='btn btn-info' onClick={formik.handleSubmit}>Search</button>
        </div>
    )






}

export default RegisterLookupScreen;