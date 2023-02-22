import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { registerNewUser } from "../actions/UserActions";
import { registerNewSchool, addAddressToSchool } from "../actions/SchoolActions";
import { saveAddress, getAddressByValues } from '../actions/AddressActions';
import Loader from './Loader';
import Error from './Error'
import axios from 'axios';



 const SchoolRegistrationVerification=( props)=> {
    
    let isRegistering= false;

    const dispatch= useDispatch();
 
    const registerUserState= useSelector((state)=> state.registerNewUserReducer);
    
    const registerSchoolState= useSelector((state)=> state.registerSchoolReducer)
   

    console.log(registerUserState);

    let {loading, error, success, registeredUser}= registerUserState;
    let {loadingSchool, errorSchool, successSchool, registeredSchool}= registerSchoolState;

    // function RetrieveAddress(add){
    //     useEffect(()=>{
    //         dispatch(getAddressByValues(add))
    //     }, [])
    // }

    useEffect(()=>{
        if(success && successSchool){
                console.log(registeredUser);
                console.log(registeredSchool);
                completeRegistration();
           
       
        }
        else{
            console.log("Not Successful!")
        }
     },[success, successSchool])

    const register= async (e)=>{
        e.preventDefault()

        isRegistering= true;
    
     const user= {
            firstName: props.state.firstName, 
            lastName: props.state.lastName, 
            email: props.state.email, 
            phone: props.state.phone, 
            password: props.state.password,
            userType: "School",
            
    
        }
         dispatch(registerNewUser(user));


        const address={
            addressLine: props.state.address,
            city: props.state.city,
            state: props.state.state,
            postalCode: props.state.postalCode, 
            country: "United States of America"
        }




         //setTimeout(()=>{
             loading= true;
            const school= {
                name: props.state.name,
                 contactFirstName: props.state.firstName, 
                contactLastName: props.state.lastName, 
                phone:  props.state.phone
               
             }
             
                dispatch(registerNewSchool(school, user, address))
                   
    }

    


     
     
      const completeRegistration= async ()=>{
        let addressId=null;



      const addressLine= props.state.address;
      const postalCode= props.state.postalCode;

      

      
      
      await  axios.post('http://localhost:5000/api/addresses/getaddressbyvalues', {addressLine: addressLine, postalCode: postalCode})
        .then(res=>{
            console.log(res);
            addressId= res.data._id;
            console.log(addressId);
     }).catch(err=>{
        console.log(err);
     })
    
    
   
    
           
      await axios.put(`http://localhost:5000/api/schools/add-address-to-school/${addressId}/${registeredSchool._id}`)
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })

            await axios.put(`http://localhost:5000/api/schools/add-user-to-school/${registeredSchool._id}/${registeredUser._id}`)
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
            
            isRegistering= false;
            props.next();
              
     }

     
     

    return (
        <div>
            {(loading || isRegistering ) &&(<Loader/>)}
            {(error  ) && (<Error/>)}
            {(!loading  ) &&(
            <><h5> Verify Details </h5><p>School Name: {props.state.name}</p><p>Contact Name: {props.state.lastName}, {props.state.firstName}</p><p>Email: {props.state.email}</p><p> Address:<br />
                    {props.state.address} <br />
                    {props.state.city}, {props.state.state} {props.state.postalCode} </p><p>Phone Number: {props.state.phone}</p><button onClick={props.prev}>Edit Details</button><button onClick={register}>Register</button></>)}

            
           
        </div>
    )

 }
export default SchoolRegistrationVerification;
