import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChildrenByParentId } from "../actions/ChildActions";
import ChildCard from "../components/cards/ChildCard";
import Error from "../components/Error";
import Loader from "../components/Loader";

const ChildrenScreen=()=>{

    const parent= JSON.parse(localStorage.getItem('parent'));
    // console.log(parent);

    const getChildrenByParentState= useSelector(state=> state.getChildrenByParentReducer);

    const {loading, error, success, children}= getChildrenByParentState;

  

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
                                <ChildCard id={kid._id} image= {kid.image} name= {kid.firstName+' '+ kid.lastName} age= {getChildAge(kid.dateOfBirth)} bikes='1' regActive='1'/>
                            </div>
                        })
                       
                       

                        
                    //     {/* <ChildCard 
                    // image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e9b2eb-969c-4301-8f27-c27ca1d16238/d1t34ik-5ee1eb4f-b4f7-4b2d-9d82-9198d55eccbe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZTliMmViLTk2OWMtNDMwMS04ZjI3LWMyN2NhMWQxNjIzOFwvZDF0MzRpay01ZWUxZWI0Zi1iNGY3LTRiMmQtOWQ4Mi05MTk4ZDU1ZWNjYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fAGr7qv1vRAYZeeDv5mjOmrL2nNlgXpJDB9sIDoC5QM' 
                    // name= 'Doug Funnie' 
                    // age= '10'
                    // bikes= '1' 
                    // regActive='1'
                    // />

                    // <ChildCard
                    // image= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af85a464-b058-42d9-bcb4-eb2d4799af7b/dc1ka2r-76a45d89-146c-4196-ba14-bb142d644fde.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmODVhNDY0LWIwNTgtNDJkOS1iY2I0LWViMmQ0Nzk5YWY3YlwvZGMxa2Eyci03NmE0NWQ4OS0xNDZjLTQxOTYtYmExNC1iYjE0MmQ2NDRmZGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dwlkY4zpZwSX2f2oON9oJKSc_UUTe-2J5ANyhT2EYt4'
                    // name= 'Tommy Pickles'
                    // age= '12'
                    // bikes= '2'
                    // regActive= '1'
                    // /> */}
                        
                    )} 
                    

                 

            </div> <br/>

            <a style={{fontWeight:'bold'}} href='*'>Add Child</a>

        </div>
    )

}

export default ChildrenScreen; 