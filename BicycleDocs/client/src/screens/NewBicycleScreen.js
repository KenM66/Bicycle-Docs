import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import { addNewBicycle } from "../actions/BicycleActions";
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from 'axios';

const NewBicycleScreen=()=>{

    const params= useParams();
   

    const dispatch= useDispatch();

    const navigate= useNavigate();

    const [file, setFile]= useState();
    const [image, setImage]= useState();
    const [imageToInsert, setImageToInsert]= useState();
    const [isComplete, setIsComplete]= useState(false);

    const addNewBicycleState= useSelector((state)=> state.addBicycleReducer);

    let {loading, error, bicycle}= addNewBicycleState;

    let isImageUploading= false; 

    useEffect(() => {

        if(file){
        const imageURL= URL.createObjectURL(file);
        setImage(imageURL);
        }
     
    }, [file])

    useEffect(()=>{

        if(bicycle){
            submitImage();
        }

    },[bicycle])

    useEffect(()=>{

        if(imageToInsert){
            isImageUploading=true;
            axios.put(`http://localhost:5000/api/bicycles/add-image-to-bicycle/${bicycle._id}/${imageToInsert}`)
            .then(res=>{
                console.log(res);
                console.log('test')
                isImageUploading=false;
                
            })
            setIsComplete(true);
        }

    },[imageToInsert])

    useEffect(()=>{
        if(isComplete){
         
            window.alert("Bicycle Added Successfully!");
            navigate(`/child/${params.childId}`, {replace: true})
        }
    },[isComplete])

    const newBicycleSchema= Yup.object().shape({
        brand: Yup.string().required("Brand for bicycle is required!"),
        model: Yup.string().required("Bicycle model is required!"), 
        color: Yup.string().required("Please enter color/color combination of bicycle"),
        serialNumber: Yup.string().required("Bicycle Serial Number is required!")
    })

    const formik= useFormik({
        initialValues:{
            brand: "", 
            model: "",
            color: "",
            serialNumber: ""
        },
        validationSchema: newBicycleSchema, 
        onSubmit: (values)=>{

                const bike= {brand: values.brand, model: values.model, color: values.color, serialNumber: values.serialNumber}

                console.log(bike);
                
                dispatch(addNewBicycle(bike, params.childId));


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

    return (
        <div>
            <br/>

            {(loading || isImageUploading) &&(<Loader/>)}

            {error &&(<Error/>)}

            {(!loading && !error && !isImageUploading && !isComplete) &&(
                 <div style={{backgroundColor: 'gray', width: '1000px', height:'700px', margin: '0 auto' }}>
                 <br/>
 
                 <h4>Enter Bicycle Information</h4> <br/>
 
                 <div>
                     {formik.errors.brand && formik.touched.brand?(
                         <div><h5 style={{color: 'red'}}>{formik.errors.brand}</h5></div>
                     ): null}
                 </div>
 
                 <label htmlFor='brand'>Brand</label>
                 <input name="brand" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
 
                 <div>
                 {formik.errors.model && formik.touched.model?(
                     <div><h5 style= {{color: 'red'}}>{formik.errors.model}</h5></div>
                 ): null}
                  </div><br/>
 
                 <label htmlFor='model'>Model</label>
                 <input name="model" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 
                 <div>
                     {formik.errors.color && formik.touched.color?(
                         <div><h5 style={{color: 'red'}}>{formik.errors.brand}</h5></div>
                     ): null}
                 </div><br/>
 
                 <label htmlFor='color'>Color</label>
                 <input name="color" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
 
                 <div>
                 {formik.errors.serialNumber && formik.touched.serialNumber?(
                     <div><h5 style= {{color: 'red'}}>{formik.errors.serialNumber}</h5></div>
                 ): null}
                  </div><br/>
 
                 <label htmlFor='serialNumber'>Serial #</label>
                 <input name="serialNumber" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>
               
                 <h5>Bicycle Photo</h5><br/>
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
 
                     
 
             </div>
            )}

           
        </div>
    )

}

export default NewBicycleScreen;