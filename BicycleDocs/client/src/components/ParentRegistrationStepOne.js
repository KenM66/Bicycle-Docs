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

}

export default ParentRegistrationStepOne;