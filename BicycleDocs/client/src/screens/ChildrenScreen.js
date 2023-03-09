import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChildrenByParentId } from "../actions/ChildActions";
import ChildCard from "../components/cards/ChildCard";
import Error from "../components/Error";
import Loader from "../components/Loader";

const ChildrenScreen=()=>{

    const navigate= useNavigate();

    const parent= JSON.parse(localStorage.getItem('parent'));
    // console.log(parent);

    const getChildrenByParentState= useSelector(state=> state.getChildrenByParentReducer);

    const {loading, error, success, children}= getChildrenByParentState;

    const frontImageTag= 'http://localhost:5000/api/images/image-by-id/'

    const dispatch= useDispatch();

    

    useEffect(()=>{
        console.log(parent);
        dispatch(getChildrenByParentId(parent._id));
    },[])
 
   
//    console.log(children);
//    console.log(getChildrenByParentState)

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

    const routeToNewChild=()=>{
        navigate('/new-child', {replace: true})
    }




    return(
        <div>
            <br/>
            <br/>
            <br/>

           

            <h1>Your Children</h1><br/>

            <div
                style={{
                    backgroundColor: 'blue',
                    width: "800px",
                    maxHeight: '570px',
                    margin: "0 auto",
                    overflowY: "scroll"
                }}>

                    {loading &&(<Loader/>)}
                    {error && (<Error/>)}


                     {(success && children && children.length>0)  &&(
                        children.map(kid=>{
                            return <div>
                                <ChildCard id={kid._id} image= {frontImageTag+kid.image} name= {kid.firstName+' '+ kid.lastName} age= {getChildAge(kid.dateOfBirth)} bikes='1' regActive='1'/>
                            </div>
                        })
                       
                  )} 
                    

                 

            </div> <br/>

            <button className="btn btn-primary" style={{fontWeight:'bold'}} onClick={()=> routeToNewChild()}>Add Child</button>

        </div>
    )

}

export default ChildrenScreen; 