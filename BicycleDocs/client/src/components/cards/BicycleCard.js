

const BicycleCard= (props)=>{

    return(
        <div className="col card mb-4 rounded-3 shadow-sm" style={{backgroundColor: 'purple', border: '5px solid white'}}>
            <div className="flexbox-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', color: 'black'}}>
                <img src= {props.image} style={{height: "150px" ,width: '150px'}} className="img-fluid m-3"/>
                <div  style={{ justifyContent: 'left', paddingTop: '10px'}}> 
                    <div style= {{justifyContent: 'left', display: 'flex'}}>{props.brand}</div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}>{props.color}</div>
                    <div style= {{justifyContent: 'left', display: 'flex'}}>{props.serialNumber}</div>
                </div>
            </div>

        </div>
    )
}

export default BicycleCard;