import { useDispatch, useSelector} from 'react-redux'
import { registerNewUser } from "../actions/UserActions";

const ParentRegistrationVerification=()=>{
    const dispatch= useDispatch();
 
    const registerUserState= useSelector((state)=> state.registerNewUserReducer);

   let {loading, error, success}= registerUserState;

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
     dispatch(registerNewUser(user));

     const address={
        addressLine: props.state.address,
        city: props.state.city,
        state: props.state.state,
        postalCode: props.state.postalCode, 
        country: "United States of America"
    }
   }

}

export default ParentRegistrationVerification;