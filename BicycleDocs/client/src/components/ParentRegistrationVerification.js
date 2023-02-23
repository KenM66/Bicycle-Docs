import { useDispatch, useSelector} from 'react-redux'
import { registerNewUser } from "../actions/UserActions";
import { saveAddress } from '../actions/AddressActions';
import { saveParent } from '../actions/ParentActions';
import Loader from './Loader';
import Error from './Error';
import { useEffect } from 'react';

const ParentRegistrationVerification=(props)=>{
    const dispatch= useDispatch();
 
    const registerUserState= useSelector((state)=> state.registerNewUserReducer);
    const saveAddressState= useSelector((state)=>state.saveAddressReducer);
    const saveParentState= useSelector((state)=> state.saveParentReducer);

   let {loading, error, success, registeredUser}= registerUserState;



   let {loadingSaveAddress, errorSaveAddress, successSaveAddress, registeredAddress }= saveAddressState;

   let {loadingSaveParent, errorSaveParent, successSaveParent}= saveParentState;

   useEffect(()=>{

    if(registeredAddress && registeredUser){
        console.log(registeredAddress+"   is the new address.");
        console.log(registeredUser+ "    is the new user");
        createNewParent();
        props.next();
    }
   },[registeredUser, registeredAddress])
   
   
   const register= async (e)=>{
    e.preventDefault();

    const user= {
        firstName: props.state.firstName, 
        lastName: props.state.lastName, 
        email: props.state.email, 
        phone: props.state.phone, 
        password: props.state.password,
        userType: "Parent",
        

    }
    


    var promise= new Promise(function(resolve, reject){
        dispatch(registerNewUser(user));
        setTimeout(()=>{
            resolve(true);
        },1000)
       
    })

   
    await promise.then((response)=>{
        console.log(response)
        console.log(registeredUser);
        
    })

  

    
    const address={
        addressLine: props.state.address,
        city: props.state.city,
        state: props.state.state,
        postalCode: props.state.postalCode, 
        country: "United States of America"
    }

    
        dispatch(saveAddress(address))
    

      
        
   }


 

 

   


 
 

   

  

   const createNewParent= async ()=>{

    const parent={
        firstName: props.state.firstName, 
        lastName: props.state.lastName, 
       
    }
    

  

   

 

   dispatch(saveParent(parent, registeredUser, registeredAddress));

   }

   return(
        <div>
            {(loading || loadingSaveAddress || loadingSaveParent)&&(<Loader/>)}
            {(error || errorSaveAddress || errorSaveParent)&& (<Error/>)}
            <h5>Verify Details</h5>
            <p>Parent Name: {props.state.lastName}, {props.state.firstName}</p>
            <br/>
            <p>Address: <br/>
            {props.state.address}<br/>
            {props.state.city}, {props.state.state} {props.state.postalCode}
            </p>
            <p>Phone: {props.state.phone}</p>
           
            <p>EMail: {props.state.email}</p>

            <button className='btn btn-info' onClick={props.prev}>Edit Details</button>
            <button className='btn btn-success' onClick={register}>Register</button>


        </div>
   )




}

export default ParentRegistrationVerification;