import React from 'react'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import MaskedInput from 'react-text-mask'



export default function SchoolRegistrationStepOne(props) {

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
        name: Yup.string().required("Organization Name is Required!"),
        firstName: Yup.string().required("First name is required!"),
        lastName: Yup.string().required("Last name is required!"),
        address: Yup.string().required("Street Address is required!"),
        city: Yup.string().required("City is required!"),
        postalCode: Yup.string().required("Postal Code is required").matches(/^[0-9]+$/, "Must be digits only").min(5, "Postal code must be only 5 digits")
        .max(5, "Must be only 5 digits"),
        phone: Yup.string().required("Phone Number is required!")

        
    })

    const formik= useFormik({

       
        initialValues:{
         
            name: props.state.name,
            firstName: props.state.firstName,
            lastName: props.state.lastName,
            address: props.state.address,
            city: props.state.city,
            state: props.state.state,
            postalCode: props.state.postalCode,
            phone: props.state.phone
        },
       
        validationSchema: signUpSchema,
        onSubmit:(values)=>{
            console.log(values);
            props.state.name= values.name; 
            props.state.firstName= values.firstName; 
            props.state.lastName= values.lastName;
            props.state.address= values.address; 
            props.state.city= values.city;
            props.state.state= values.state; 
            props.state.postalCode=values.postalCode;
            props.state.phone= values.phone
    
            props.next();
        }
    })




    return (

        

        <div>

                <h5>Enter Organization Details</h5>

      <div style= {{ position: 'relative', left: '-160px'}}>

        <label htmlFor="name" >Organization Name</label>
        
        <input
     
        name= "name"
        type= "text"
        id= "name"
        value= {formik.values.name}
        onChange= {formik.handleChange}
        onBlur= {formik.handleBlur}
        />
       
        <div>{formik.errors.name && formik.touched.name?(<div><h5 style={{color: "red"}}>{formik.errors.name}</h5></div>):null}</div> 

        <br/>
        <label htmlFor= "firstName">Contact First Name</label>
        <input
        style= {{position: 'relative', left: '1px'}}
        name="firstName"
        type="text"
        id="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
      

        <div>{formik.errors.firstName && formik.touched.firstName?(<div><h5 style={{color: "red"}}>{formik.errors.firstName}</h5></div>):null}</div> 
        <br/>

        
        <label htmlFor= "lastName">Contact Last Name</label>
        <input
         style= {{position: 'relative', left: '2px'}}
        name="lastName"
        type="text"
        id="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
         <div>{formik.errors.lastName && formik.touched.lastName?(<div><h5 style={{color: "red"}}>{formik.errors.lastName}</h5></div>):null}</div> 

        <br/>
        <br/>

        </div>

        <div style= {{ position: 'relative', left: '-60px'}}>

        <label htmlFor= "address">Street Address</label>
        <input
       
        style={{width: '350px'}}
        name="address"
        type= "text"
        id="address"
        value={formik.values.address}
        onChange= {formik.handleChange}
        onBlur= {formik.handleBlur}
        />

        <div>{formik.errors.address && formik.touched.address?(<div><h5 style={{color: "red"}}>{formik.errors.address}</h5></div>):null}</div> 

        <br/>

        </div>

        <div style= {{position: 'relative', left: '30px'}}>

        <label htmlFor= "city">City</label>
        <input
        name="city"
        type="text"
        id="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

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
        <input
        style= {{width:'100px'}}
        name="postalCode"
        value= {formik.values.postalCode}
        type= "text"
        id= "postalCode"
        onChange= {formik.handleChange}
        onBlur= {formik.handleBlur}
        />

        </div>

        <div>{formik.errors.city && formik.touched.city?(<div><h5 style={{color: "red"}}>{formik.errors.city}</h5></div>):null}</div> 
        <div>{formik.errors.state && formik.touched.state?(<div><h5 style={{color: "red"}}>{formik.errors.state}</h5></div>):null}</div> 
        <div>{formik.errors.postalCode && formik.touched.postalCode?(<div><h5 style={{color: "red"}}>{formik.errors.postalCode}</h5></div>):null}</div> 





        <br/>
        <div style= {{ position: 'relative', left: '-113px'}}>
        <label htmlFor="phone">Phone</label>
        <MaskedInput
         mask= {phoneNumberMask}
        name= "phone"
        type= "tel"
        value= {formik.values.phone}
        id= "phone"
      
        onChange= {formik.handleChange}
         onBlur= {formik.handleBlur}
        />

       <div>{formik.errors.phone && formik.touched.phone?(<div><h5 style={{color: "red"}}>{formik.errors.phone}</h5></div>):null}</div> 
       </div>
        <br/><br/>





       


           <button onClick={props.prev}>Previous</button>
           <button type = "submit" onClick={formik.handleSubmit}>Next</button>

          
         
        </div>
    )
}

