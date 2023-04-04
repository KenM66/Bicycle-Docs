import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { getChildById } from "../actions/ChildActions";
import Loader from "../components/Loader";
import BicycleCard from "../components/cards/BicycleCard";
import { getBicyclesByChild } from "../actions/BicycleActions";
import Error from "../components/Error";
import React from 'react';

const ChildInfoScreen=()=>{

    const [image, setImage]= useState();
    const [file, setFile]= useState();

    
    const imageSource= "http://localhost:5000/api/images/image-by-id/";

   
    const getChildByIdState= useSelector((state)=> state.getChildByIdReducer);

    let {loading, error, success, child}= getChildByIdState;

    console.log(getChildByIdState);  //works
    
    const getBikesByChildState= useSelector((state)=> state.getBicyclesByChildIdReducer);

    console.log(getBikesByChildState);  //prints undefined

    let {bikesLoading, bikesError, bikes}= getBikesByChildState;


    const params= useParams();
    console.log(params);

    const dispatch= useDispatch();

    const navigate= useNavigate();

     useEffect(()=>{
        dispatch(getChildById(params.id));
        }, [])


    console.log(child);

    useEffect(()=>{
        if(child){
            setImage(child.image);

            

            dispatch(getBicyclesByChild(child._id));
        }
      
    },[child])

    useEffect(()=>{
        console.log(bikes)
    }, [bikes])

    const getChildAge=(dateOfBirth)=>{
        const today= new Date();
        const birthday= new Date(dateOfBirth);
        let age= today.getFullYear()- birthday.getFullYear();
        const m= today.getMonth()- birthday.getMonth();

        if(m<0 ||(m===0 && today.getDate()< birthday.getDate())){
            age--;
        }
        
        return age;


    }

    const routeToNewBicycle=()=>{
        navigate(`/new-bicycle/${params.id}`, {replace: true})
    }
  
   





  
    
    

    return (
        <div >
            <br/>
          
            <div className="square border border-info" style={{width: '1500px', margin: '0 auto'}}><br/>
                {(loading || bikesLoading) &&(<Loader/>)}
                {(error && bikesError) &&(<Error/>)}
               {success && ( 

                <div>
                    <div style={{display: 'flex',  flexDirection: 'row', justifyContent:'center'}}>
                    <div align='left'>
                    {(image) &&(<img src= {imageSource+image}  
                    style={{height: "150px" ,width: '170px'}}/>)} <br/><br/>
                    <input
                     filename={file}
                     onChange={e => setFile(e.target.files[0])}
                    type="file"
                    accept='image/*'
                    >
                   </input>
           
                   
                   
                   </div> 
                   <div align='left' style={{ display: 'flex', flexDirection: 'column'}}>
                    <h4>{child.firstName} {child.lastName}</h4>
                    <h4>Age: {getChildAge(child.dateOfBirth)}</h4>
                    </div>
                   
                  

                </div> 
                       
                
               
              </div>  
                
                )}
               
                <br/>
                        <h4>Active Registrations</h4>

                        <div style={{width: '750px', height: '100px', backgroundColor: 'gray', margin: '0 auto'}}>
                                    No active registrations
                        </div>
                        <br/><br/>

                        <h4>Bicycles</h4>

                        <div style={{width: '750px', height: '215px', margin: '0 auto', backgroundColor: 'yellow', overflowY: 'scroll'}}> 

                                {(bikes && bikes.length>0) &&(
                                    
                                    bikes.map(bike=>{
                                        return <div>
                                            
                                         <BicycleCard brand= {bike.brand} model={bike.model} color= {bike.color} serialNumber= {bike.serialNumber} image={imageSource+bike.image}/> 
                                        </div>
                                    })

                                )
                                    
                                }

                                {(!bikes|| bikes.length===0) &&(
                                    <h5>No bicycles added for your child yet</h5>
                                )}
                                {/* <BicycleCard brand= 'Huffy' model='Hardtail' color='Blue' serialNumber='SQ127964345' image='https://www.huffybikes.com/media/catalog/product/cache/4f821af9573d574e43ab6dcbedb6481a/7/6/76838-1.jpg'/>
                                <BicycleCard brand= 'Huffy' model='Hardtail' color='Blue' serialNumber='SQ127964345' image='https://www.huffybikes.com/media/catalog/product/cache/4f821af9573d574e43ab6dcbedb6481a/7/6/76838-1.jpg'/> */}


                        </div> <br/><br/>

                        <button className="btn btn-warning" onClick={routeToNewBicycle}>Add Bicycle</button><br/><br/>
          
            </div><br/>
        </div>
    )

}

export default ChildInfoScreen;