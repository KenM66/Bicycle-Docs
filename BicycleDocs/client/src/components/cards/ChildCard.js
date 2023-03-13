import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";

const ChildCard= (props)=>{

    

    const navigate= useNavigate();

    const routeToInfo=()=>{
        console.log("test");
        navigate(`/child/${props.id}`, {replace: true})
    }

    return(
        <div className="col card mb-4 rounded-3 shadow-sm" style={{backgroundColor: "cyan", border: '5px solid white'}} onClick={()=>routeToInfo()}>
            <div className="flexbox-container" style={{display: "flex", flexDirection: "row" , justifyContent: "left", color: "black"}}>
                <img src= {props.image} style={{height: "150px" ,width: '150px'}} className="img-fluid m-3"/>
                <div  style={{ justifyContent: 'left', paddingTop: '10px'}}> 
                
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h3>{props.name}</h3></div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h3>Age: {props.age}</h3></div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h3>Bikes: {props.bikes}</h3></div>
                    <div style={{justifyContent: 'left', display: 'flex'}}><h3>Active Registrations: {props.regActive}</h3></div>
                
                </div>
            </div>
        </div>
    )
}

export default ChildCard;