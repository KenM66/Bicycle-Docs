import React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import ImageUploader from 'react-images-upload';
import Error from '../components/Error';
import axios from 'axios';


import "react-datepicker/dist/react-datepicker.css";
import Loader from '../components/Loader';
import { addNewChild } from '../actions/ChildActions';

const NewChildScreen=()=>{

    const [image, setImage]= useState();
    const [file, setFile]= useState();
    const [birthDate, setBirthDate]= useState();
    const [imageToInsert, setImageToInsert]= useState();
    const [isComplete, setIsComplete]= useState(false);

    const dispatch= useDispatch();

    const addNewChildState= useSelector((state)=> state.addChildReducer);

    let {loading, error, child}= addNewChildState;

    const parent= JSON.parse(localStorage.getItem('parent'));

    let isImageUploading= false;
    

    useEffect(() => {

        if(file){
        const imageURL= URL.createObjectURL(file);
        setImage(imageURL);
        }
     
    }, [file])

    useEffect(()=>{

        if(imageToInsert){
            isImageUploading= true;
            axios.put(`http://localhost:5000/api/children/add-image-to-child/${child._id}/${imageToInsert}`)
            .then(res=>{
                console.log(res);
                isImageUploading= false;
                
            })

            setIsComplete(true);
        }

    }, [imageToInsert])

    useEffect(()=>{
        if(child){
            submitImage();
        }

    },[child])




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

            dispatch(addNewChild({firstName: kid.firstName, lastName: kid.lastName, dateOfBirth: kid.dob}, parent._id));

           

            

        }
    })

    const submitImage=  ()=>{
        

        const formData= new FormData();
        formData.append('image', file);

        axios.post('http://localhost:5000/api/images/add-image', formData, {headers: {"Content-Type": 'multipart/form-data'}})
        .then(res=>{
            console.log(res.data);
            setImageToInsert(res.data);
        })
       
    }
    


    return(
    <div> <br/>

        {(loading || isImageUploading) && (<Loader/>)}
        {error &&(<Error/>)}

        { (!loading && !error && !isImageUploading && !isComplete) &&(
        <div style={{backgroundColor: "#89cff0", width: "1000px", height: "700px", margin: "0 auto"}}>

          { !isComplete && ( <div><br/>

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
           filename={file}
           onChange={e => setFile(e.target.files[0])}
           type="file"
           accept='image/*'
           >
           </input>
            </div>

            {image && (<img src={image} style={{height: '150px' ,width: '150px'}}/>)}<br/><br/>

            <div><button className='btn btn-success' onClick={formik.handleSubmit}>Submit</button></div>
          
           

            

            </div> )}
                
         




        </div>
        )}
           {isComplete &&(
                <div style={{backgroundColor: "#89cff0", width: '1000px', margin: '0 auto'}}><br/><br/>
                    <h5>{child.firstName} {child.lastName} has been successfully created.  
                    All children must have bicycles assigned to them
                    before being registered with a school or organization.</h5>
                    <br/><br/>

                    <button className='btn btn-info'>Add Bike</button><br/><br/>
                    <button className='btn btn-primary'>Return to Portal</button><br/><br/>
                </div>
            )}
        </div>
      
    )

}

export default NewChildScreen;

