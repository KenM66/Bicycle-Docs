const { useState } = require("react")
const { useSelector } = require("react-redux")


const SchoolPortalScreen= ()=>{
    const getSchoolByUserReducer= useSelector(state.getSchoolByUserReducer)
    const {error, loading}= getSchoolByUserReducer
    cosnt [schoolName, setSchoolName]= useState('')
    

}

export default SchoolPortalScreen;