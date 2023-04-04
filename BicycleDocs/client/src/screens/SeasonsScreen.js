import SeasonCard from "../components/cards/SeasonCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActiveSeasonsBySchool } from "../actions/SeasonActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {push} from 'react-router-redux'
import React from 'react';




const SeasonsScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [school, setSchool]= useState(()=>{
    const schoolStored= (localStorage.getItem('school'));
    if(schoolStored !== 'undefined'){
      console.log(schoolStored);
    const resp= JSON.parse(schoolStored);
    return resp;
    }
    return "";
  });
  const dispatch= useDispatch();
 


console.log(school);

const schoolStored= (localStorage.getItem('school'));

useEffect(()=>{
  if(schoolStored !=='undefined')
  setSchool(JSON.parse(schoolStored))
},[schoolStored]);




const getCurrentSeasonsState= useSelector(state=> state.getCurrentSeasonsBySchoolReducer)

const {currentSeasons, loading, error}= getCurrentSeasonsState;

const [activeSeasons, setActiveSeasons]= useState();

const [pastSeasons, setPastSeasons] = useState(); 




console.log(activeSeasons);
console.log(currentSeasons);

useEffect(()=>{
 
  if((currentSeasons !== undefined)){
    console.log(currentSeasons);
  const seasons= currentSeasons.filter(season=> Date.parse(season.end)> Date.now());
  const seasons2= currentSeasons.filter(season=> Date.parse(season.end)< Date.now());
  
  console.log(seasons);
  
  setActiveSeasons(seasons);
  setPastSeasons(seasons2);
  }
},[currentSeasons])


useEffect(()=>{
    if(schoolStored !== 'undefined')
    dispatch(getActiveSeasonsBySchool(school));
},[school])
 


 
   


  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

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

  const returnStatus=(status)=>{
    if(status){
      return "Open";
    }
    return "Closed";
  }

  const routeToSeason=(id)=>{
    console.log(id);
    window.location.href= `/season/${id}`
   
  }







  return (
   
    <div>
      <br />
      <br />
      <br />

     
      <div>

      <h1> Current Seasons</h1>
      <div
        style={{
          backgroundColor: "green",
          width: "1500px",
          height: "160px",
          margin: "0 auto",
          overflowY: "scroll",
        }}
      >
      
        {loading && (<Loader/>)}
        {error && <Error error= "Something went wrong"/>}
        {activeSeasons && (activeSeasons.map(season=>{
          return <div onClick={()=>routeToSeason(season._id)}><SeasonCard
            name= {season.name}
            start= {formatDate(season.start)}
            end= {formatDate(season.end)}
            price= {season.price}
            status= {returnStatus(season.isOpen)}
            complete= "4"
            incomplete="5"
            
           
          /></div>
        }))}

      </div>

      <input
        type="checkbox"
        id="pastSeasons"
        checked={isChecked}
        onChange={handleChecked}
      />
      <label for="pastSeasons">Include Past Seasons</label>

      {isChecked&& <h1>Past Seasons</h1>}

      {(isChecked&& <div style={{backgroundColor: "red",
           width: "1500px",
           height: "160px",
           margin: "0 auto",
         
          overflowY: "scroll"
          }}>

{loading && (<Loader/>)}
        {error && <Error error= "Something went wrong"/>}
        {pastSeasons && (pastSeasons.map(season=>{
          return <div onClick={()=> routeToSeason(season._id)}><SeasonCard
            name= {season.name}
            start= {formatDate(season.start)}
            end= {formatDate(season.end)}
            price= {season.price}
            status= {returnStatus(season.isOpen)}
            complete= "4"
            incomplete="5"
            
           
          /></div>
        }))}

            
          </div>)}
      
         

          </div>
          <br/>
          <br/>

        
          <a href= 'seasons/new-season'>Create New Season</a>
    
    
       </div>
  );
};

export default SeasonsScreen;
