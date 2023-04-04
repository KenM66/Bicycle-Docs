import React from 'react';
const SeasonCard= (props)=>{


    
    

    const statusColorOpen={
    
        color: '#66FF00'
         
    }

    const statusColorClosed={
        color: 'red'
    }

    const regStatus= props.status;

  

    return(
        <div className="col card mb-4 rounded-3 shadow-sm" style={{backgroundColor: "black", border: '5px solid blue'}}>
            <h1 style= {{color: "red"}}>{props.name}</h1>

            <div className="flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "white"}}>
                <h2>Dates: <span style={{color: '#43C6DB'}}>{props.start} - {props.end}</span>&nbsp;&nbsp;&nbsp;</h2> 
                <h2>Price: <span style= {{color: '#9900FF'}}>{props.price}</span> &nbsp;&nbsp;&nbsp;</h2>
                <h2>Registration Status: <span style={regStatus=== 'Open'? statusColorOpen: statusColorClosed}>{props.status}</span></h2>
            </div>
            <div className="flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "white"}}>
                <h2>Complete Registrations: <span style= {{color: '#66FF00'}}>{props.complete}</span>&nbsp;&nbsp;</h2>
                <h2>Incomplete Registrations: <span style={{color: 'red'}}>{props.incomplete}</span></h2>
            </div>

        </div>
    )

}

export default SeasonCard;