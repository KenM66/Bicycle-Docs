import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import SchoolRegistrationScreen from './screens/SchoolRegistrationScreen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Test from './components/Test';
import StripeSuccess from './components/Stripe-success';
import ConfirmationScreen from './screens/ConfirmationScreen';
import EmailConfirmedScreen from './screens/EmailConfirmedScreen';
import SchoolLoginScreen from './screens/SchoolLoginScreen';
import SchoolNavBar from './components/SchoolNavbar';
import SeasonsScreen from './screens/SeasonsScreen';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getSchoolByUserId } from './actions/SchoolActions';
import SeasonInfoScreen from './screens/SeasonInfoScreen';
import NewSeasonScreen from './screens/NewSeasonScreen';


function App() {

  const currentUser= JSON.parse(localStorage.getItem('currentUser'))

  const dispatch= useDispatch();

  const schoolState= useSelector(state=> state.getSchoolByUserReducer);

  const {school} = schoolState;


  useEffect(()=>{
    if(currentUser)
    dispatch(getSchoolByUserId(currentUser._id));
  },[])

  //console.log(currentUser.userType);
  localStorage.setItem('school', JSON.stringify(school));
  //console.log(localStorage.getItem('school'));
  //console.log(school)

  return (
    <div className="App">
        <Navbar/>


          {(currentUser && currentUser.userType==="School" ) &&(<SchoolNavBar/>)}

           {/* {(currentUser.userType==="School") && ( <SchoolNavBar/>) } */}

          

       
        <BrowserRouter>
          <Routes>
           
            <Route path= '/organization-registration' element= {<SchoolRegistrationScreen/>}/>
            <Route path= '/stripe/success' element={<StripeSuccess/>}/>
            <Route path= '/confirmation-screen' element={<ConfirmationScreen/>}/>
            <Route path= '/email-confirmed/:userId' element={<EmailConfirmedScreen/>}/>
            <Route path= '/school-login' element= {<SchoolLoginScreen/>}/>
            <Route path= '/seasons' element={<SeasonsScreen/>}/>
            <Route path='/season/:id' element={(<SeasonInfoScreen/>)}/>
            <Route path= '/seasons/new-season' element={(<NewSeasonScreen/>)}/>
          </Routes>
        </BrowserRouter>

  

    </div>
  );
}

export default App;
