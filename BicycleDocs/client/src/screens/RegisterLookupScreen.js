import {React, useEffect } from 'react'; 
import { useSelector } from 'react-redux';

import * as Yup from 'yup'
import { useFormik } from 'formik';
import { getSchoolBySchoolNumber } from '../actions/SchoolActions';

const RegisterLookupScreen=()=>{


    const getSchoolByNumberState=
    useSelector(state=> state.getSchoolBySchoolNumberReducer);

    const {loading, error, success, school}= getSchoolByNumberState;

    const dispatch= useDispatch();

    useEffect(()=>{
        if(school){

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
        }
    })

    return(
        <div>
            <label htmlFor='number'>Number</label>
            <input name='number' type="text" id="number" 
            value= {formik.values.number} 
            onChange={formik.handleChange} 
            onBlur= {formik.handleBlur} />

            <button className='btn btn-info'>Search</button>
        </div>
    )






}

export default RegisterLookupScreen;