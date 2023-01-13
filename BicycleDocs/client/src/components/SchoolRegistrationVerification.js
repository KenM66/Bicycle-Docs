import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { registerNewUser } from "../actions/UserActions";
import { registerNewSchool, addAddressToSchool } from "../actions/SchoolActions";
import { saveAddress, getAddressByValues } from '../actions/AddressActions';
import Loader from './Loader';
import Error from './Error'



 const SchoolRegistrationVerification=( props)=> {

    const dispatch= useDispatch();

    // const {retrievedAddress, loadingGetAddress, errorGetAddress}= useSelector(state=> state.getAddressByValues)

    
    const registerUserState= useSelector((state)=> state.registerNewUserReducer);
    

   
    console.log(registerUserState);

    let {loading, error, success}= registerUserState;

    // function RetrieveAddress(add){
    //     useEffect(()=>{
    //         dispatch(getAddressByValues(add))
    //     }, [])
    // }

    const register= async (e)=>{
        e.preventDefault()
    
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




         setTimeout(()=>{
             loading= true;
            const school= {
                name: props.state.name,
                 contactFirstName: props.state.firstName, 
                contactLastName: props.state.lastName, 
                phone:  props.state.phone
               
             }
                dispatch(registerNewSchool(school, user, address));
                
         },2000)

         


         
         

         setTimeout(()=>{
            props.next();
         }, 2000)
       
  
    }

    


     useEffect(()=>{
        
     },[registerUserState])
     

     

    return (
        <div>
            {(loading ) &&(<Loader/>)}
            {(error  ) && (<Error/>)}
            {(!loading  ) &&(
            <><h5> Verify Details </h5><p>School Name: {props.state.name}</p><p>Contact Name: {props.state.lastName}, {props.state.firstName}</p><p>Email: {props.state.email}</p><p> Address:<br />
                    {props.state.address} <br />
                    {props.state.city}, {props.state.state} {props.state.postalCode} </p><p>Phone Number: {props.state.phone}</p><button onClick={props.prev}>Edit Details</button><button onClick={register}>Register & Pay</button></>)}

            
           
        </div>
    )

 }
export default SchoolRegistrationVerification;
