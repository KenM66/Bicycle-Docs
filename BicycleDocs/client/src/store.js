//import { configureStore } from '@reduxjs/toolkit'
import {getPriceReducer} from './reducers/PriceReducers'
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {  getAllUsersReducer, registerNewUserReducer, updateEmailConfirmedReducer, schoolLoginReducer, parentLoginReducer } from './reducers/UserReducers';
import { registerSchoolReducer, getSchoolByUserReducer } from './reducers/SchoolReducers';
import { subscribeReducer } from './reducers/SubscriptionReducers';
import { addAddressToSchoolReducer, saveAddressReducer } from './reducers/AddressReducers';
import { getCurrentSeasonsBySchoolReducer, getSeasonByIdReducer, createNewSeasonReducer } from './reducers/SeasonsReducer';
import { getParentByUserIdReducer, saveParentReducer } from './reducers/ParentReducers';
import { addChildReducer, getChildByIdReducer, getChildrenByParentReducer } from './reducers/ChildrenReducer';
import { addBicycleReducer } from './reducers/BicycleReducers';

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
    getCurrentSeasonsBySchoolReducer: getCurrentSeasonsBySchoolReducer,
    getSeasonByIdReducer: getSeasonByIdReducer, 
    createNewSeasonReducer: createNewSeasonReducer,
    saveParentReducer: saveParentReducer,
    parentLoginReducer: parentLoginReducer,
    getParentByUserIdReducer: getParentByUserIdReducer,
    getChildrenByParentReducer: getChildrenByParentReducer,
    addChildReducer: addChildReducer,
    getChildByIdReducer: getChildByIdReducer, 
    addBicycleReducer: addBicycleReducer
    
})

const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null

const initialState= {
   
    schoolLoginReducer: {currentUser: currentUser}, 
    getParentByUserIdReducer: {dummyBoolean: true}
    

    
}

const composeEnhancers= composeWithDevTools({
    
});

const store= createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
))


export default store;