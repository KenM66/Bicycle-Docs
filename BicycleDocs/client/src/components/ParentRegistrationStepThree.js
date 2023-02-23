import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { getAllUsers } from '../actions/UserActions';
import Loader from './Loader';
import Error from './Error'
import { useDispatch, useSelector } from 'react-redux';

const ParentRegistrationStepThree=(props)=>{
    const getUsersState= useSelector(state=> state.getAllUsersReducer);

  const {loading, error, users} = getUsersState;

  const dispatch= useDispatch();
  
  let emails= [];

  useEffect(()=>{
   
    dispatch(getAllUsers())
    
    //console.log(users);

    
},[])


const signUpSchema= Yup.object().shape({
    email: Yup.string().min(5, "Too Short").email("Invalid Email").required("Email is required"),

    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

    password2: Yup.string().required("You must confirm password").when("password", {
        is: val=>(val && val.length >0? true: false), 
        then: Yup.string().oneOf(
            [Yup.ref('password')],
            "Passwords must match"
        )
    })
})


if(users){
    try{
     for(let i=0; i<users.length; i++){
       emails.push(users[i].email);
      // console.log('pushed ' + users[i].email);
   }
    }
   catch(err){
       console.log(err);
   }
     }

     
    let emailExists= false;

    function checkEmail(value){
        let error= "Email Already Exists";
     
    for( let i=0; i<emails.length; i++){
        if(value.toLowerCase()== emails[i].toLowerCase()){
            emailExists= true;
            return error;
        }
      
    }
    emailExists=false;
    return "E-Mail Available!"
}

const formik= useFormik({
    initialValues:{
        email: props.state.email,
        password: "",
        password2: ""
    },

    validationSchema:signUpSchema,
    onSubmit: (values)=>{
      if(!emailExists){
        props.state.email= values.email;
        props.state.password= values.password;
        
        props.next();
      }
      
    }
})

return (
    <div>
        {loading &&(<Loader/>)}
        {error && (<Error error= "Something went wrong.  Try again."/>)}
        {users &&( <div>
        <h5>Enter Login Credentials</h5>
        <div style= {{position: "relative", left: '-100px'}}>
       <label htmlFor= "email">E-Mail</label>
       <input
        name= "email"
        type="email"
        id= "email"
        
       value= {formik.values.email}
       onChange= {formik.handleChange}
       onBlur= {formik.handleBlur}
      
       />
       <div>{formik.errors.email && formik.touched.email? ( <div> <h5 style= {{color: "red"}}>{formik.errors.email}</h5></div>): null}</div>
       <div>{formik.touched.email?(<div> <h5 style= {{color: "purple"}}>{checkEmail(formik.values.email)}</h5></div>):null}</div>

       </div>
       <br/>
       <div style= {{position: "relative", left: '-110px'}}>
       <label htmlFor= "password">Password</label>
       <input
       type="password"
       id="password"
       name="password"
       value= {formik.values.password}
       onChange= {formik.handleChange}
       onBlur= {formik.handleBlur}
       
       />
       <div>{formik.errors.password && formik.touched.password?(<div><h5>{formik.errors.password}</h5></div>): null}</div>
       </div>
       <br/>
       
       <div style= {{position: "relative", left: '-140px'}}>
       <label htmlFor= "password2">Confirm Password</label>
       <input
       type="password"
       id="password2"
       name="password2"
       value={formik.values.password2}
       onChange={formik.handleChange}
       onBlur= {formik.handleBlur}
       />
      <div>{formik.errors.password2 && formik.touched.password2?(<div><h5>{formik.errors.password2}</h5></div>): null}</div>
      </div>
     <br/>
     <br/>

    
   
        <button className='btn btn-warning' onClick={props.prev}>Previous</button>
       <button className='btn btn-info' onClick={formik.handleSubmit}>Next</button>
   
        
    </div> )}

    </div>
)


}

export default ParentRegistrationStepThree;