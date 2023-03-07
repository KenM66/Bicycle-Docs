import React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import ImageUploader from 'react-images-upload';


import "react-datepicker/dist/react-datepicker.css";

const NewChildScreen=()=>{

    const [image, setImage]= useState();
    const [showImage, setShowImage]= useState();
    const [file, setFile]= useState();
    const [birthDate, setBirthDate]= useState();

    const parent= JSON.parse(localStorage.getItem('parent'));

    useEffect(() => {

        if(file){
        const imageURL= URL.createObjectURL(file);
        setImage(imageURL);
        }
     
    }, [file])

    const newChildSchema= Yup.object().shape({
        firstName: Yup.string().required("First name is required."),
        lastName: Yup.string().required("Last name is required.")
    })

    const formik= useFormik({
        initialValues:{
            firstName: "", 
            lastName: ""
        }, 
        validationSchema: newChildSchema, 
        onSubmit: (values)=>{

            const kid= {firstName: values.firstName, lastName: values.lastName, dob: birthDate, parent: parent._id}

            console.log(kid)

        }
    })
    


    return(
    <div> <br/>
        <div style={{backgroundColor: "#89cff0", width: "1500px", height: "700px", margin: "0 auto"}}>

            <div><br/>

            <h4>Enter Your Child's Information</h4><br/>

            <div>
                {formik.errors.firstName && formik.touched.firstName?(
                    <div><h5 style={{color: "red"}}>{formik.errors.firstName}</h5></div>
                ): null}
            </div>

            <label htmlFor='firstName'>First Name</label>
            <input name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>

            <div>
                {formik.errors.lastName && formik.touched.lastName?(
                    <div><h5 style= {{color: 'red'}}>{formik.errors.lastName}</h5></div>
                ): null}
            </div><br/>

            <label htmlFor='lastName'>Last Name</label>
            <input name= "lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/><br/>

            <h5>Date of Birth</h5>
            <div style={{margin: "auto", width: "50%"}}><DatePicker selected={birthDate} onChange={(date)=> setBirthDate(date)}/></div>

            <h5>Child Photo</h5>
            <div>
            <input
           fileName={file}
           onChange={e => setFile(e.target.files[0])}
           type="file"
           accept='image/*'
           >
           </input>
            </div>

            {image && (<img src={image} style={{height: '150px' ,width: '150px'}}/>)}<br/><br/>

            <div><button className='btn btn-success' onClick={formik.handleSubmit}>Submit</button></div>
          
           

            

            </div>

        </div>

        </div>
      
    )

}

export default NewChildScreen;

