import React from 'react'
import {Steps, Step} from "react-step-builder";
import PriceCard from '../components/cards/PriceCard';
import StripeSuccess from '../components/Stripe-success';
import SchoolRegistrationStepOne from '../components/SchoolRegistrationStepOne';
import SchoolRegistrationStepTwo from '../components/SchoolRegistrationStepTwo';
import SchoolRegistrationVerification from '../components/SchoolRegistrationVerification';

 function SchoolRegistrationScreen() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <div style= {{backgroundColor: "lightblue", width: "1000px", margin: "0 auto"}}>
                        <h4>Organization Registration</h4>
            <Steps>
                
                <Step component= {SchoolRegistrationStepOne}/>
                <Step component= {SchoolRegistrationStepTwo}/>
                <Step component= {SchoolRegistrationVerification}/>
                
                <Step component= {PriceCard}/>
                
            </Steps>
            </div>
        </div>
    )
}

export default SchoolRegistrationScreen;