

import {useEffect, React } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActiveSeasonsParentView } from '../actions/SeasonActions';

const SeasonLookupScreen = ()=>{

    const params= useParams();

    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getActiveSeasonsParentView(params.id));
    },[])

    const getSeasonsBySchoolstate= useSelector((state)=> state.getActiveSeasonsBySchoolReducer);

    let {loading, error, seasons}= getSeasonsBySchoolstate;

}

export default SeasonLookupScreen;