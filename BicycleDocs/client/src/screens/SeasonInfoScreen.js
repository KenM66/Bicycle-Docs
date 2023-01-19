import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"


const SeasonInfoScreen = (props)=>{

    const seasonId= useParams();

    const getSeasonInfoState= useSelector(state=> state.getSeasonByIdReducer);

    const {loading, error, success}= getSeasonInfoState;

    const dispatch= useDispatch();

    const statusColorOpen={
     color: '#66FF00'    
    }

    const statusColorClosed={
        color: 'red'
    }

    const buttonColorOpen={
        backgroundColor: 'green',
        color: 'white'
    }

    const buttonColorClose={
        backgroundColor: 'red',
        color: 'white'
    }

    const statusButtonText=(status)=>{
        if(status==="Open"){
            return "CLOSE REGISTRATIONS"
        }
        else{
            return "OPEN REGISTRATIONS"
        }

    }

    return (
        <div style={{backgroundColor: "black"}}>
            <h1>{props.name}</h1>
            <br/>
            <h2 style={{color: "white"}}>Open Registrations</h2>
            <div style= {{backgroundColor: "gray,", 
                width: "1500px", 
                height: "400px", 
                margin: "0 auto", 
                overflowX: "scroll"}}> 


            </div>
            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <h2 style={{color: "white"}}>Registration Status: <span style={props.status==="Open"? statusColorOpen: statusColorClosed}>{props.status}</span></h2>
            <button style={props.status==="Open"? buttonColorClose: buttonColorOpen}>{statusButtonText}</button>



            </div>

            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2 style={{color: "white"}}>Start: <span style={{color: "red"}}>{props.start}</span></h2>
                <h2 style={{color: "white"}}>End: <span style={{color: "red"}}>{props.end}</span></h2>
            </div>
           
        </div>
    )

}

export default SeasonInfoScreen;