import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux'
import Loader from "../Loader"
import Error from "../Error"
import { getPrice } from "../../actions/PriceActions";
import { subscribe } from '../../actions/SubscriptionActions';
import { useNavigate } from "react-router-dom";
import React from 'react';



const PriceCard=(props)=>{

    const getPriceState= useSelector(state=> state.getPriceReducer);

    const navigate= useNavigate();
  
   
    console.log(getPriceState);


    const {loading, error, price}= getPriceState;

    


   



    const dispatch= useDispatch();

    const handleclick= async (e, price)=>{
        e.preventDefault();
        console.log(price);
        dispatch(subscribe(props.state.email, price));
      
        navigate('/confirmation-screen', {replace: true});
       
        
    }

   
               
        

useEffect(()=>{
   
    
        dispatch(getPrice())
      
        
          

},[]);

console.log(price);





   

   
  

    return(

      
             
            <div className="col" style= {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              
              {loading && (<Loader/>)}
              {error && <Error error="something went wrong"/>}
               {price && (
                <div className="card mb-4 rounded-3 shadow-sm border-success" style={{width: '35%'}}>
                    <div className="card-header py-3 bg-success text-light">
                        <h4 className="my-0 fw-normal">Annual Subscription</h4>
                    </div>
                    <div className="card-body" style={{backgroundColor: '#d3d3d3'}}>
                        <h1 className="card-title-pricing-title">
                        {(price[0].unit_amount/100).toLocaleString("en-US",{
                        style: 'currency',
                        currency: "USD"
                    })}<small className='text-muted fw-light'>/yr</small>
                        </h1>
                        <ul className='list-unstyled mt-3 mb-4'>
                            <li>Full Subcription</li>
                            <li>Register Bicycles</li>
                            <li>Accept Credit Payments via Stripe</li>
                            <li>Auto-renews until cancelled</li>
                        </ul>

                        <button onClick={(e)=>handleclick(e, price[0])} className="w-100 btn btn-lg btn-primary">
                            Sign-Up
                        </button>
                    </div>
                    
                </div>
               )}
                {error && (<Error error='something went wrong'/>)}
            </div>
                
    )
      
       
    


}

export default PriceCard;