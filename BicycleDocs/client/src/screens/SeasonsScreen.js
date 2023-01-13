import SeasonCard from "../components/cards/SeasonCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActiveSeasonsBySchool } from "../actions/SeasonActions";
import Loader from "../components/Loader";
import Error from "../components/Error";



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
  //console.log(new Date(Date.now()).getMonth()+1)
  setActiveSeasons(seasons);
  setPastSeasons(seasons2);
  }
},[currentSeasons])


useEffect(()=>{
    if(schoolStored !== 'undefined')
    dispatch(getActiveSeasonsBySchool(school));
},[school])
 
    
//console.log(currentSeasons);

 
   


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

  const test=()=>{
    console.log("This Is Working!!!! YAY!")
  }

  return (
    <div>
      <br />
      <br />
      <br />

      <h1> Current Seasons</h1>
      <div
        style={{
          backgroundColor: "gray",
          width: "1500px",
          height: "200px",
          margin: "0 auto",
          overflowX: "scroll",
        }}
      >
        {/* <SeasonCard
          name="2022-2023 School Year"
          start="09/01/2022"
          end="06/01/2022"
          price="12.99"
          status="Open"
          complete="4"
          incomplete="5"
        />
        <SeasonCard
          name="2022-2023"
          start="09/01/2022"
          end="06/01/2022"
          price="12.99"
          status="Open"
          complete="4"
          incomplete="5"
        /> */}
        {loading && (<Loader/>)}
        {error && <Error error= "Something went wrong"/>}
        {activeSeasons && (activeSeasons.map(season=>{
          return <div onClick={test}><SeasonCard
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

      {(isChecked&& <div style={{backgroundColor: "gray",
          width: "1500px",
          height: "200px",
          margin: "0 auto",
          overflowX: "scroll"}}>

{loading && (<Loader/>)}
        {error && <Error error= "Something went wrong"/>}
        {pastSeasons && (pastSeasons.map(season=>{
          return <div onClick={test}><SeasonCard
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
  );
};

export default SeasonsScreen;
