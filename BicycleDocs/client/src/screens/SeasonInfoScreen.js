import axios from "axios";
import { useEffect, useState, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSeasonById } from "../actions/SeasonActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import UpdateSeason from "../components/UpdateSeason";



const SeasonInfoScreen = ()=>{

    const seasonId= useParams();

    console.log(seasonId.id);

    const getSeasonInfoState= useSelector(state=> state.getSeasonByIdReducer);

    const {loading, error, season}= getSeasonInfoState;

    const dispatch= useDispatch();

    const [currentSeason, setCurrentSeason]= useState();
    const [searchValue, setSearchValue]= useState();
    const [radioValue, setRadioValue]= useState();
    const [regStatus, setRegStatus]= useState();

    const [showEdit, setShowEdit]= useState(false);

    useEffect(()=>{
        if(season){
            setCurrentSeason(season[0]);
            setRegStatus(season[0].isOpen);
        }
    })

   

    useEffect(()=>{
        dispatch(getSeasonById(seasonId.id));
    },[])

    console.log(currentSeason);

  
   


    const statusColorOpen={
     color: 'green'    
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

      const toggleStatus=()=>{
        const id= currentSeason._id;
        const status= !regStatus;
        console.log(status);
        console.log(id);


        console.log(currentSeason.end);

        if(Date.parse(currentSeason.end) <= new Date()){
            window.alert("You cannot open registration on a closed season!");
            return;
        }

        axios.put('http://localhost:5000/api/seasons/toggle-registration-status', {_id: id, isOpen: status })
        .then(res=>{
            console.log(Date.parse(currentSeason.end)< new Date());
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        setRegStatus(!regStatus);
        console.log(regStatus);
        window.location.reload();
      }

      const showEditSeason= ()=>{
            setShowEdit(true);
      }

      const cancelEdit=()=>{
         setShowEdit(false);
      }

    

    return (
        <div style={{backgroundColor: "#40E0D0"}}>

            {loading &&(<Loader/>)}
            {error &&(<Error/>)}
           

           {currentSeason && (<div>
            <h1 style={{color: 'black'}}>{currentSeason.name}</h1>
            <button className="btn btn-primary" onClick={showEditSeason}>Edit Season</button>
            <br/>
            <br/>
            {(showEdit && (<div style={{margin: "0 auto", width: "400px"}}>
                <UpdateSeason id= {currentSeason._id} name= {currentSeason.name} price= {currentSeason.price} start= {Date.parse(currentSeason.start)} end= {Date.parse(currentSeason.end)} maximum= {currentSeason.maximum} isOpen= {currentSeason.isOpen} onChange={cancelEdit} />
            </div>))}
            <br/>
            <h4 style={{color: "brown"}}>Open Registrations</h4>
            <div style= {{backgroundColor: "gray", 
                width: "1000px", 
                height: "100px", 
                margin: "0 auto", 
               
                overflowY: 'scroll'}}> 


            </div>
            <br/>
            
            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <h2 style={{color: "brown"}}>Registration Status: <span style={currentSeason.isOpen? statusColorOpen: statusColorClosed}>{currentSeason.isOpen? "Open": "Closed"}</span></h2>
            &nbsp;
            &nbsp;
            <button onClick={toggleStatus} style={currentSeason.isOpen? buttonColorClose: buttonColorOpen}>{currentSeason.isOpen? "Close": "Open"}</button>



            </div>
            <br/>

            <div className= "flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2 style={{color: "brown"}}>Start: <span style={{color: "black"}}>{formatDate(currentSeason.start)}</span></h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "brown"}}>End: <span style={{color: "black"}}>{formatDate(currentSeason.end)}</span></h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "brown"}}>Complete Registrations: <span style={{color: "black"}}>12</span></h2>
            </div>
            <br/>
                <h1 style={{color: "blue"}}>Search Bicycle Information</h1>
                <div className="flexbox-container" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/> 
                 &nbsp;
                 <button className="btn btn-dark"  onClick={testButton}>Search</button>
                </div>
                    <input type="radio" name="searchBy" value="Sticker #" id="sticker" checked= "true"/>
                    &nbsp;
                     <label htmlFor="sticker" style={{color: "brown"}}>Sticker #</label>
                     &nbsp;
                     &nbsp;
                    <input type="radio" name="searchBy" value="Last Name" id="lastName" />
                    &nbsp;
                     <label htmlFor="lastName" style={{color: "brown"}}>Last Name</label>
                     &nbsp;
                     &nbsp;
                     <input type="radio" name="searchBy" value="Serial #" id="serial" />
                     &nbsp;
                    <label htmlFor="serial" style={{color: "brown"}}>Serial #</label>
                
               
                <br/>
                <br/>
            </div>  
           
           )}
    
          
    </div>
)}

export default SeasonInfoScreen;