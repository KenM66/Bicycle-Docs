

const BicycleCard= (props)=>{

    return(
        <div className="col card mb-4 rounded-3 shadow-sm" style={{backgroundColor: 'purple', border: '5px solid white'}}>
            <div className="flexbox-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', color: 'black'}}>
                <img src= {props.image} style={{height: "170px" ,width: '170px'}} className="img-fluid m-3"/>
                <div  style={{ justifyContent: 'left', paddingTop: '10px'}}> <br/>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h4 style={{color: 'white'}}>{props.brand}</h4></div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h4 style={{color: 'white'}}>{props.model}</h4></div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h4 style={{color: 'white'}}>{props.color}</h4></div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}><h5 style={{color: 'white'}}>{props.serialNumber}</h5></div><br/>
                </div>
            </div>

        </div>
    )
}

export default BicycleCard;