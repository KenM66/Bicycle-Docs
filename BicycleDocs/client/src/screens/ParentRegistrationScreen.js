import React from 'react'
import {Steps, Step} from "react-step-builder";
import ParentRegistrationStepOne from '../components/ParentRegistrationStepOne';
import ParentRegistrationStepTwo from  '../components/ParentRegistrationStepTwo';
import ParentRegistrationStepThree from  '../components/ParentRegistrationStepThree';
import ParentRegistrationVerification from '../components/ParentRegistrationVerification';

const ParentRegistrationScreen=()=>{

    return(
        <div>
            <br/><br/><br/>
            <div style={{backgroundColor: 'lightblue', width: "1000px", margin: "0 auto"}}>
                <h4>Parent Registration</h4>
                <Steps>
                    <Step component= {ParentRegistrationStepOne}/>
                    <Step component= {ParentRegistrationStepTwo}/>
                    <Step component= {ParentRegistrationStepThree}/>
                    <Step component= {ParentRegistrationVerification}/>
                </Steps>
            </div>
        </div>
    )

}

export default ParentRegistrationScreen;