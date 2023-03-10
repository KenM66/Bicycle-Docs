import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { getChildById } from "../actions/ChildActions";
import Loader from "../components/Loader";

const ChildInfoScreen=()=>{

    const [image, setImage]= useState();

    
    const imageSource= "http://localhost:5000/api/images/image-by-id/";

   
    const getChildByIdState= useSelector((state)=> state.getChildByIdReducer);

    let {loading, error, success, child}= getChildByIdState;

    const params= useParams();
    console.log(params);

    const dispatch= useDispatch();

     useEffect(()=>{
        dispatch(getChildById(params.id));
        }, [])


    console.log(child);

    useEffect(()=>{
        if(child){
            setImage(child.image)
        }
    },[child])

  
   





  
    
    

    return (
        <div >
            <br/>
            <div className="square border border-info" style={{width: '1500px', margin: '0 auto'}}><br/>
                {loading &&(<Loader/>)}
                {error &&(<Error/>)}
                {success &&(<div>
                <div style={{marginLeft: '-1200px'}}>
                    {(image) &&(<img src= {imageSource+image} 
                    style={{height: "200px" ,width: '230px'}}/>)} 
                    
                    </div>
                </div>)}
                <br/>
            
          
            </div>
        </div>
    )

}

export default ChildInfoScreen;