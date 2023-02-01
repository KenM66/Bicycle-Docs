import React from 'react'
import {Steps, Step} from "react-step-builder";
import ParentRegistrationStepOne from '../components/ParentRegistrationStepOne';

const ParentRegistrationScreen=()=>{

    return(
        <div>
            <br/><br/><br/>
            <div style={{backgroundColor: 'lightblue', width: "1000px", margin: "0 auto"}}>
                <h4>Parent Registration</h4>
                <Steps>
                    <Step component= {ParentRegistrationStepOne}/>
                </Steps>
            </div>
        </div>
    )

}

export default ParentRegistrationScreen;