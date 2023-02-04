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
                   
               

                // getEmailData(props.state.email)

                 
                  
                
       //  },2000)

       

      


        //  await axios.get('http://localhost:5000/api/addresses/getaddressbyvalues', {addressLine: props.state.address, postalCode: props.state.postalCode})
        //  .then(res=>{
        //         console.log(res);
        //         addressId= res.data[0]._id;
        //         console.log(addressId);
        //  }).catch(err=>{
        //     console.log(err);
        //  })


     

       //  console.log(props.state.email);

         //getEmailData(props.state.email);

        // setTimeout(()=>{
            // await axios.get('http://localhost:5000/api/users/user-by-email', {email: props.state.email})

            // .then(res=>{
            //     console.log(res);
            //     // userId= res.data[0]._id;
            //     // console.log(userId);
            // }).catch(err=>{
            //     console.log(err);
            // })
           
       //  },5000)

        //  let schoolId= null;

        //  setTimeout(()=>{
        //     axios.get('http://localhost:5000/api/schools/findschoolbyuser', userId)
        //     .then(res=>{
        //         console.log(res);
        //         schoolId= res._id;
        //         console.log(schoolId);
        //     })

        //  }, 2000)


        //  setTimeout(()=>{
        //     axios.put(`http://localhost:5000/api/schools/add-address-to-school/${addressId}/${schoolId}`)
        //     .then(res=>{
        //         console.log(res);
        //     }).catch(err=>{
        //         console.log(err);
        //     })
        //  }, 2000)


       
         

        //  setTimeout(()=>{
            
        //  }, 2000)
       
         
    }

    


     
     
      const completeRegistration= async ()=>{
        let addressId=null;

    //    await  axios.get('http://localhost:5000/api/addresses/get-all-addresses').then(
    //         res=>{
    //             console.log(res);
    //         }
    //     )

    //   console.log(props.state.address);
    //   console.log(props.state.postalCode);

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
    
    
    // let userId=registeredUser._id;
    //  const email= props.state.email;
    // await  axios.get(`http://localhost:5000/api/users/user-by-email/${email}`)
    
    //  .then(res=>{
    //      console.log(res.data);
    //       userId= res.data._id;
    //       console.log(userId);
    //  }).catch(err=>{
    //      console.log(err);
    //  })
    
          
    
    //   await axios.get(`http://localhost:5000/api/schools/findschoolbyuser/${registeredUser._id}`)
    //             .then(res=>{
    //                 console.log(res.data);
    //                 schoolId= res.data._id;
    //                 console.log(schoolId);
    //             })
    
           
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
