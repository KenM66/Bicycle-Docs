import React from 'react';
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
import ParentRegistrationScreen from './screens/ParentRegistrationScreen';
import ParentLoginScreen from './screens/ParentLoginScreen';
import ParentNavBar from './components/ParentNavbar';
import ChildrenScreen from './screens/ChildrenScreen';
import ChildInfoScreen from './screens/ChildInfoScreen';
import NewChildScreen from './screens/NewChildScreen';
import NewBicycleScreen from './screens/NewBicycleScreen';
import RegisterLookupScreen from './screens/RegisterLookupScreen';




function App() {

  const currentUser= JSON.parse(localStorage.getItem('currentUser'))

  const dispatch= useDispatch();

  const schoolState= useSelector(state=> state.getSchoolByUserReducer);

  const {school} = schoolState;

  // const testParent= localStorage.getItem('parent');
  // if(testParent)
  // console.log(JSON.parse(localStorage.getItem('parent')));

  useEffect(()=>{
    if(currentUser && currentUser.userType==='School')
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
          {(currentUser && currentUser.userType==="Parent")&& (<ParentNavBar/>)}

          

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
            <Route path= '/parent-registration' element={(<ParentRegistrationScreen/>)}/>
            <Route path= '/parent-login' element={(<ParentLoginScreen/>)}/>
            <Route path= '/children' element={(<ChildrenScreen/>)}/>
            <Route path= '/child/:id' element={(<ChildInfoScreen/>)}/>
            <Route path= '/new-child' element={(<NewChildScreen/>)}/>
            <Route path='/new-bicycle/:childId' element={(<NewBicycleScreen/>)}/>
            <Route path= '/lookup-school' element={(<RegisterLookupScreen/>)} />
          </Routes>
        </BrowserRouter>

  

    </div>
  );
}

export default App;
