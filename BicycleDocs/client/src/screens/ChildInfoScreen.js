import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { getChildById } from "../actions/ChildActions";
import Loader from "../components/Loader";

const ChildInfoScreen=()=>{

    const [image, setImage]= useState();
    const [file, setFile]= useState();

    
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

  
   





  
    
    

    return (
        <div >
            <br/>
          
            <div className="square border border-info" style={{width: '1500px', margin: '0 auto'}}><br/>
                {loading &&(<Loader/>)}
                {error &&(<Error/>)}
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
               
                <br/><br/><br/>
                        <h4>Active Registrations</h4>

                        <div style={{width: '750px', height: '100px', backgroundColor: 'gray', margin: '0 auto'}}>
                                    No active registrations
                        </div>
                        <br/><br/>

                        <h4>Bicycles</h4>

                        <div style={{width: '750px', height: '150px', margin: '0 auto', backgroundColor: 'gray'}}> No bicycles</div> <br/><br/>

                        <button className="btn btn-warning">Add Bicycle</button><br/><br/>
          
            </div>
        </div>
    )

}

export default ChildInfoScreen;