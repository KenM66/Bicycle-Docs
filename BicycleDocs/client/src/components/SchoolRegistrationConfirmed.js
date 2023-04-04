import axios from "axios";
import { useEffect } from "react";
import React from 'react';

const  SchoolRegistrationConfirmed=  (props)=>{

//     let addressId=null;

//     axios.get('http://localhost:5000/api/addresses/getaddressbyvalues', {addressLine: props.state.address, postalCode: props.state.postalCode})
//     .then(res=>{
//         console.log(res);
//         addressId= res.data._id;
//         console.log(addressId);
//  }).catch(err=>{
//     console.log(err);
//  })


//  let userId=null;
//  axios.get('http://localhost:5000/api/users/user-by-email', props.state.email)

//  .then(res=>{
//      console.log(res);
//       userId= res.data._id;
//       console.log(userId);
//  }).catch(err=>{
//      console.log(err);
//  })

//         let schoolId=null;

//        axios.get('http://localhost:5000/api/schools/findschoolbyuser', userId)
//             .then(res=>{
//                 console.log(res);
//                 schoolId= res.data._id;
//                 console.log(schoolId);
//             })

//        useEffect(()=>{
//         axios.put(`http://localhost:5000/api/schools/add-address-to-school/${addressId}/${schoolId}`)
//         .then(res=>{
//             console.log(res);
//         }).catch(err=>{
//             console.log(err);
//         })


//        },[addressId, schoolId])     

       

    return(
        <div>
            <h5>Your school has been registred.  Please continue to the next page to complete your subscription.</h5>
            <button className="btn btn-success" onClick={props.next}>Continue</button>
        </div>
        
    )

}
export default SchoolRegistrationConfirmed;