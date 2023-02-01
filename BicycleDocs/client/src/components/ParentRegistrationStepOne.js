import React from 'react'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import MaskedInput from 'react-text-mask'

const ParentRegistrationStepOne=(props)=>{

    const phoneNumberMask = [
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ];

      const signUpSchema= Yup.object().shape({
        firstName: Yup.string().required("First name is required!"),
        lastName: Yup.string().required("Last name is required!"),
        phone: Yup.string().required("Phone number is required!")
      })

     const formik= useFormik({
        initialValues:{
            firstName: props.state.firstName, 
            lastName: props.state.lastName, 
            phone: props.state.phone
        },
        validationSchema: signUpSchema,
        onSubmit:(values)=>{
            props.state.firstName= values.firstName;
            props.state.lastName= values.lastName;
            props.state.phone= values.phone;

            props.next();

        }
     })

     return(
        <div>
            <h5>Contact Information</h5>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" id="firstName" value={formik.values.firstName} onChange= {formik.handleChange} onBlur={formik.handleBlur}/>
                <div>{formik.errors.firstName && formik.touched.firstName?(<div><h5 style={{color: 'red'}}>{formik.errors.firstName}</h5></div>): null}</div><br/>

                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" id= "lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div>{formik.errors.lastName && formik.touched.lastName?(<div><h5 style={{color: 'red'}}>{formik.errors.lastName}</h5></div>): null}</div><br/>

                <label htmlFor="phone">Phone #</label>
                <MaskedInput mask={phoneNumberMask} name="phone" type="tel" value={formik.values.phone} id="phone" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div>{formik.errors.phone && formik.touched.phone?(<div><h5 style={{color: 'red'}}>{formik.errors.phone}</h5></div>): null}</div>

            </div><br/><br/>
            <button className='btn btn-info' type="submit" onClick={formik.handleSubmit}>Next</button>

        </div>
     )

}

export default ParentRegistrationStepOne;