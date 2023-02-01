import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


const UpdateSeason= (props)=>{


    const [startDate, setStartDate]= useState(props.start);
    const [endDate, setEndDate]= useState(props.end);
    const dispatch= useDispatch();

    const updateSeasonSchema= Yup.object().shape({
        name: Yup.string().required("Season name is required."),
        price: Yup.number().required("Initial price is required."),//.matches(/^[1-9]\d*(\.\d+)?$/, "Must be in price format."),
        maximum: Yup.number().required("Maximum registrations is required.")//.matches(/^\d+$/, "Must be only digits"), 
   })

   const formik= useFormik({
        initialValues:{
            name: props.name, 
            price: props.price, 
            maximum: props.maximum
            
        },
        validationSchema: updateSeasonSchema, 
        onSubmit:(values)=>{

            const price= parseFloat(values.price)

            const maximum= parseInt(values.maximum);

            const season= {name: values.name, start: startDate, end: endDate, price: price, maximum: maximum, isOpen: new Date()> endDate? props.isOpen: false };
            
            console.log(season);

            axios.put(`http://localhost:5000/api/seasons/update-season/${props.id}`, {season: season})
            .then(res=>{
                console.log(res);
                location.reload();
            })
            .catch(err=>{
                window.alert(err);
            })
            
          

        }
   })

   const disappear=()=>{
      props.onChange();
   }

   return(
    <div style={{backgroundColor: 'black',  height: '450px', margin: "0 auto", overflowX: "scroll"}}>
                <h4 style={{color: 'red'}}>Season Details</h4>

<div>
    {formik.errors.name && formik.touched.name?(
        <div><h5 style={{color: "red"}}>{formik.errors.name}</h5></div>
    ):null}
</div>

<label style={{position: 'relative', left: '-11px' ,color: 'white'}} htmlFor= "name" >Season Name</label>
<input style={{position: 'relative', left: '12px'}}
name= "name" type="text" id="name" onChange= {formik.handleChange} onBlur= {formik.handleBlur} value={formik.values.name}/>

<div>{formik.errors.price && formik.touched.price?(<div><h5 style= {{color: "red"}}>{formik.errors.price}</h5></div>):null}</div>
<label htmlFor= "price" style={{color: 'white'}}>Registration Price</label>
<input style={{position: 'relative'}} name="price" type= "text" id= 'price' value= {formik.values.price} onChange= {formik.handleChange} onBlur= {formik.handleBlur}/><br/>
<div>{formik.errors.maximum && formik.touched.maximum?(<div><h5 style={{color: 'red'}}>{formik.errors.maximum}</h5></div>):null}</div>
<label style={{position: 'relative', left: '-17px', color: 'white'}} htmlFor= "maximum">Registration Maximum</label>
<input style={{position: 'relative', left: '-17px'}} name='maximum' type='text' id='maximum' onChange= {formik.handleChange} onBlur= {formik.handleBlur} value={formik.values.maximum}/><br/><br/>

<h5 style={{color: 'white'}}>Start Date:</h5>
<div style={{margin: 'auto', width: '50%'}}><DatePicker selected={startDate} onChange={(date)=> setStartDate(date)}/></div>  
<h5 style={{color: 'white'}}>End Date:</h5>
<div style={{margin: 'auto', width: '50%'}}> <DatePicker selected={endDate} onChange={(date)=> setEndDate(date)}/></div>
        <br/>

<button className='btn btn-success' type = "submit" onClick={formik.handleSubmit}>Submit</button>
<br/>
<br/>
<button className= 'btn btn-danger' onClick={disappear}>Cancel</button>

        </div>
   

)}

export default UpdateSeason;