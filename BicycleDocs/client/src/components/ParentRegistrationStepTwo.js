import React from 'react'

import * as Yup from 'yup'
import { FormikContext, useFormik } from 'formik';

const ParentRegistrationStepTwo=(props)=>{


    const signUpSchema= Yup.object().shape({
        address: Yup.string().required("Street Address is required!"), 
        city: Yup.string().required("City is required!"), 
        postalCode: Yup.string().required("Postal Code is required").matches(/^[0-9]+$/, "Must be digits only").min(5, "Postal code must be only 5 digits")
    })

    const formik= useFormik({
        initialValues: {
            address: props.state.address, 
            city: props.state.city, 
            state: props.state.state, 
            postalCode: props.state.postalCode
        },

        validationSchema: signUpSchema, 
        onSubmit:(values)=>{
            props.state.address= values.address;
            props.state.city= values.city; 
            props.state.state= values.state;
            props.state.postalCode= values.postalCode;

            props.next();
        }
    })

    return(
        <div>
            <h5>Home Address</h5>
            <h6>Note:  Home address will need to match the address on file with your child's school/organization.</h6>

            <div style={{position: 'relative'}}>
                <label htmlFor="address">Street Address</label>
                <input name="address" type="text" id="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div>{formik.errors.address && formik.touched.address?(<div><h5 style={{color: "red"}}>{formik.errors.address}</h5></div>):null}</div><br/>

                <label htmlFor="city">City</label>
                <input name="city" type="text" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div>{formik.errors.city && formik.touched.city?(<div><h5 style={{color: 'red'}}>{formik.errors.city}</h5></div>): null}</div>

                <label  htmlFor= "state">State</label>
        <select 
        name= "state"
        value= {formik.values.state}
        onChange= {formik.handleChange}
        onBlur= {formik.handleBlur}
        >
         <option value= "AL">AL</option>
                <option value= "AK">AK</option>
                <option value= "AZ">AZ</option>
                <option value= "AR">AR</option>
                <option value= "CA">CA</option>
                <option value= "CZ">CZ</option>
                <option value= "CO">CO</option>
                <option value= "CT">CT</option>
                <option value= "DE">DE</option>
                <option value= "DC">DC</option>
                <option value= "FL">FL</option>
                <option value= "GA">GA</option>
                <option value= "GU">GU</option>
                <option value= "HI">HI</option>
                <option value= "ID">ID</option>
                <option value= "IL">IL</option>
                <option value= "IN">IN</option>
                <option value= "IA">IA</option>
                <option value= "KS">KS</option>
                <option value= "KY">KY</option>
                <option value= "LA">LA</option>
                <option value= "ME">ME</option>
                <option value= "MD">MD</option>
                <option value= "MA">MA</option>
                <option value= "MI">MI</option>
                <option value= "MN">MN</option>
                <option value= "MS">MS</option>
                <option value= "MO">MO</option>
                <option value= "MT">MT</option>
                <option value= "NE">NE</option>
                <option value= "NV">NV</option>
                <option value= "NH">NH</option>
                <option value= "NJ">NJ</option>
                <option value= "NM">NM</option>
                <option value= "NY">NY</option>
                <option value= "NC">NC</option>
                <option value= "ND">ND</option>
                <option value= "OH">OH</option>
                <option value= "OK">OK</option>
                <option value= "OR">OR</option>
                <option value= "PA">PA</option>
                <option value= "PR">PR</option>
                <option value= "RI">RI</option>
                <option value= "SC">SC</option>
                <option value= "TN">TN</option>
                <option value= "TX">TX</option>
                <option value= "UT">UT</option>
                <option value= "VT">VT</option>
                <option value= "VI">VI</option>
                <option value= "VA">VA</option>
                <option value= "WA">WA</option>
                <option value= "WV">WV</option>
                <option value= "WI">WI</option>
                <option value= "WY">WY</option>


        </select>

        <label  htmlFor= "postalCode">PostalCode</label>
        <input name="postalCode" value={formik.values.postalCode} type="text" id="postalCode" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <div>{formik.errors.postalCode && formik.touched.postalCode?(<div><h5 style={{color: 'red'}}>{formik.errors.postalCode}</h5></div>):null}</div><br/><br/>

        <button className='btn btn-warning'  onClick={props.prev}>Previous</button>
        <button className='btn btn-info' type='submit' onClick={formik.handleSubmit}>Next</button>
            </div>
        </div>
    )

}

export default ParentRegistrationStepTwo;