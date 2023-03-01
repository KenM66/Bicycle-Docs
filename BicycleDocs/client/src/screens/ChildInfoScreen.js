import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ChildInfoScreen=()=>{

    const params= useParams();
    console.log(params);

    const dispatch= useDispatch();
    

    return (
        <div>
            Child Info Screen Works
        </div>
    )

}

export default ChildInfoScreen;