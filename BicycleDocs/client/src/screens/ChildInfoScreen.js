import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

const ChildInfoScreen=()=>{

    const [image, setImage]= useState();

    

   

    const params= useParams();
    console.log(params);

    const dispatch= useDispatch();

  
    
    

    return (
        <div>
            <br/>
            {image &&(<img src= "http://localhost:5000/api/images/image-by-id/6408d73abd316ee52a1a7194" style={{height: "300px" ,width: '350px'}}/>)}<br/>
            Child Info Screen Works
        </div>
    )

}

export default ChildInfoScreen;