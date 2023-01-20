import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSeasonById } from "../actions/SeasonActions";
import Error from "../components/Error";
import Loader from "../components/Loader";


const SeasonInfoScreen = ()=>{

    const seasonId= useParams();

    console.log(seasonId.id);

    const getSeasonInfoState= useSelector(state=> state.getSeasonByIdReducer);

    const {loading, error, season}= getSeasonInfoState;

    const dispatch= useDispatch();

    const [currentSeason, setCurrentSeason]= useState();
    const [searchValue, setSearchValue]= useState();
    const [radioValue, setRadioValue]= useState();

    useEffect(()=>{
        if(season){
            setCurrentSeason(season[0]);
        }
    })

   

    useEffect(()=>{
        dispatch(getSeasonById(seasonId.id));
    },[])

    console.log(currentSeason);

  
   


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

    const formatDate= (date)=>{
   
        console.log(date)
        const dateNum= Date.parse(date);
        const localDate= new Date(dateNum).toISOString().slice(0,-1);
        const localDateNumber= Date.parse(localDate);
        console.log(localDateNumber);
        const dateFormatted= new Date(localDateNumber);
        console.log(dateFormatted)
        let month= (dateFormatted.getMonth()+1).toString();
        
        if(month<10){
          month="0"+month
          
        }
        
        let day= (dateFormatted.getDate()).toString();
        if(day<10){
          day= "0"+day
        }
        const year= dateFormatted.getFullYear();
        
        return month+"/"+day+"/"+year;
       
      }

      const testButton=()=>{
        console.log(searchValue);
      }

    

    return (
        <div style={{backgroundColor: "green"}}>

            {loading &&(<Loader/>)}
            {error &&(<Error/>)}
           

           {currentSeason && (<div>
            <h1 style={{color: 'black'}}>{currentSeason.name}</h1>
            <button className="btn btn-primary">Edit Season</button>
            <br/>
            <br/>
            <h4 style={{color: "white"}}>Open Registrations</h4>
            <div style= {{backgroundColor: "gray", 
                width: "1000px", 
                height: "100px", 
                margin: "0 auto", 
               
                overflowY: 'scroll'}}> 


            </div>
            <br/>
            
            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <h2 style={{color: "white"}}>Registration Status: <span style={currentSeason.isOpen? statusColorOpen: statusColorClosed}>{currentSeason.isOpen? "Open": "Closed"}</span></h2>
            &nbsp;
            &nbsp;
            <button style={currentSeason.isOpen? buttonColorClose: buttonColorOpen}>{currentSeason.isOpen? "Close": "Open"}</button>



            </div>
            <br/>

            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2 style={{color: "white"}}>Start: <span style={{color: "black"}}>{formatDate(currentSeason.start)}</span></h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "white"}}>End: <span style={{color: "black"}}>{formatDate(currentSeason.end)}</span></h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "white"}}>Complete Registrations: <span style={{color: "black"}}>12</span></h2>
            </div>
            <br/>
                <h1 style={{color: "blue"}}>Search Bicycle Information</h1>
                <div className="flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/> 
                 &nbsp;
                 <button onClick={testButton}>Search</button>
                </div>
                    <input type="radio" name="searchBy" value="Sticker #" id="sticker" checked= "true"/>
                    &nbsp;
                     <label htmlFor="sticker" style={{color: "white"}}>Sticker #</label>
                     &nbsp;
                     &nbsp;
                    <input type="radio" name="searchBy" value="Last Name" id="lastName" />
                    &nbsp;
                     <label htmlFor="lastName" style={{color: "white"}}>Last Name</label>
                     &nbsp;
                     &nbsp;
                     <input type="radio" name="searchBy" value="Serial #" id="serial" />
                     &nbsp;
                    <label htmlFor="serial" style={{color: "white"}}>Serial #</label>
                
               
                <br/>
                <br/>
            </div>  
           
           )}
    
          
    </div>
)}

export default SeasonInfoScreen;