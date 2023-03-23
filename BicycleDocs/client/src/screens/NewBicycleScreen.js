import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from "react";

const NewBicycleScreen=()=>{

    const params= useParams();

    const dispatch= useDispatch();

    const [file, setFile]= useState();

    let isImageUploading= false; 

    const newBicycleSchema= Yup.object().shape({
        brand: Yup.string().required("Brand for bicycle is required!"),
        model: Yup.string().required("Bicycle model is required!"), 
        serialNumber: Yup.string().required("Bicycle Serial Number is required!")
    })

    const formik= useFormik({
        initialValues:{
            brand: "", 
            model: "",
            serialNumber: ""
        },
        validationSchema: newBicycleSchema, 
        onSubmit: (values)=>{

                const bike= {brand: values.brand, model: values.model, serialNumber: values.serialNumber, child: params.id}

                console.log(bike);


        }
    })

    return (
        <div>
            <br/>

            <div style={{backgroundColor: 'purple', width: '1000px', height:'700px', margin: '0 auto' }}>
                <br/>

                <h4>Enter Bicycle Information</h4>

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
                {formik.errors.serialNumber && formik.touched.serialNumber?(
                    <div><h5 style= {{color: 'red'}}>{formik.errors.serialNumber}</h5></div>
                ): null}
                 </div><br/>

                <label htmlFor='serialNumber'>Serial Number</label>
                <input name="serialNumber" onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <h5>Bicycle Photo</h5>
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
        </div>
    )

}

export default NewBicycleScreen;