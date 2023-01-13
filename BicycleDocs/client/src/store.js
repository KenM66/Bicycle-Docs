//import { configureStore } from '@reduxjs/toolkit'
import {getPriceReducer} from './reducers/PriceReducers'
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {  getAllUsersReducer, registerNewUserReducer, updateEmailConfirmedReducer, schoolLoginReducer } from './reducers/UserReducers';
import { registerSchoolReducer, getSchoolByUserReducer } from './reducers/SchoolReducers';
import { subscribeReducer } from './reducers/SubscriptionReducers';
import { addAddressToSchoolReducer, saveAddressReducer } from './reducers/AddressReducers';
import { getCurrentSeasonsBySchoolReducer } from './reducers/SeasonsReducer';

const finalReducer= combineReducers({
    getPriceReducer: getPriceReducer,
    registerNewUserReducer: registerNewUserReducer,
    registerSchoolReducer: registerSchoolReducer,
    schoolLoginReducer: schoolLoginReducer,
    subscribeReducer: subscribeReducer,
    getAllUsersReducer: getAllUsersReducer,
    updateEmailConfirmedReducer: updateEmailConfirmedReducer,
    getSchoolByUserReducer: getSchoolByUserReducer,
    addAddressToSchoolReducer: addAddressToSchoolReducer,
    saveAddressReducer: saveAddressReducer,
    getCurrentSeasonsBySchoolReducer: getCurrentSeasonsBySchoolReducer
    
})

const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null

const initialState= {
    schoolLoginReducer: {currentUser: currentUser}
}

const composeEnhancers= composeWithDevTools({
    
});

const store= createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
))


export default store;