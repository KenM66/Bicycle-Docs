import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';


import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { createNewSeason } from '../actions/SeasonActions';
import Loader from '../components/Loader';

const NewSeasonScreen=()=>{

    const [startDate, setStartDate]= useState(new Date());
    const [endDate, setEndDate]= useState(new Date());
    const dispatch= useDispatch();
    const school= localStorage.getItem('school');
    console.log(school);

    const addNewSeasonState= useSelector((state)=> state.createNewSeasonReducer)


    let {loading, error, success}= addNewSeasonState;

    const createSeasonSchema= Yup.object().shape({
        name: Yup.string().required("Season name is required."),
        price: Yup.number().required("Initial price is required."),//.matches(/^[1-9]\d*(\.\d+)?$/, "Must be in price format."),
        maximum: Yup.number().required("Maximum registrations is required.")//.matches(/^\d+$/, "Must be only digits"), 
  


    })

    const formik= useFormik({
        initialValues:{
            name: "", 
            price: 0.00,
            maximum: 0, 
           


        }, 
        validationSchema: createSeasonSchema, 
        onSubmit:(values)=>{

            if(startDate>endDate){
                window.alert("Your start date cannot be before your end date!")
                return;
            }
            if(startDate< new Date()){
               window.alert("Your start date cannot be in the past!")
                return;
            }
            if(startDate.toDateString()===endDate.toDateString()){
                window.alert("You cannot start and end a season on the same day!")
                return;
            }

            console.log(values);

            const price= parseFloat(values.price)

            const maximum= parseInt(values.maximum);

            const season= {name: values.name, start: startDate, end: endDate, price: price, maxiumum: maximum, isOpen: false };
            console.log(season);

            dispatch(createNewSeason(season, school));
           
            

        }
    })

    return(
        <div style={{backgroundColor: "tan", width: "1500px", height: "750px", margin: "0 auto"}}>
            <br/><br/>
                {(loading && <Loader/>)}
                {(error && <Error/>)}
                {(success && <div><h5>Season Added Successfully!  You may now manage your season!</h5></div>)}
                 {( !success &&  <div>
            <h4>Enter Season Details</h4>

            <div>
                {formik.errors.name && formik.touched.name?(
                    <div><h5 style={{color: "red"}}>{formik.errors.name}</h5></div>
                ):null}
            </div>
            
            <label style={{position: 'relative', left: '-11px'}} htmlFor= "name">Season Name</label>
            <input style={{position: 'relative', left: '12px'}}
            name= "name" type="text" id="name" onChange= {formik.handleChange} onBlur= {formik.handleBlur}/>
            
            <div>{formik.errors.price && formik.touched.price?(<div><h5 style= {{color: "red"}}>{formik.errors.price}</h5></div>):null}</div>
            <label htmlFor= "price">Registration Price</label>
            <input style={{position: 'relative'}} name="price" type= "text" id= 'price' onChange= {formik.handleChange} onBlur= {formik.handleBlur}/><br/>
            <div>{formik.errors.maximum && formik.touched.maximum?(<div><h5 style={{color: 'red'}}>{formik.errors.maximum}</h5></div>):null}</div>
            <label style={{position: 'relative', left: '-17px'}} htmlFor= "maximum">Registration Maximum</label>
            <input style={{position: 'relative', left: '-17px'}} name='maximum' type='text' id='maximum' onChange= {formik.handleChange} onBlur= {formik.handleBlur}/><br/><br/>
            
            <h5>Start Date:</h5>
          <div style={{margin: 'auto', width: '50%'}}><DatePicker selected={startDate} onChange={(date)=> setStartDate(date)}/></div>  
            <h5>End Date:</h5>
            <div style={{margin: 'auto', width: '50%'}}> <DatePicker selected={endDate} onChange={(date)=> setEndDate(date)}/></div>
                    <br/>

            <button className='btn btn-success' type = "submit" onClick={formik.handleSubmit}>Submit</button>

                    </div> )}

        </div>
    )


}

export default NewSeasonScreen;