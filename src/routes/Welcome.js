import React,{useEffect} from 'react'
import "./Welcome.css"
import { useNavigate  } from "react-router-dom";

function Welcome() {
    const navigate=useNavigate();
    const storedValue=window.localStorage.getItem("value");
    const logout=()=>{
        window.localStorage.clear();
        navigate("/");
    }
    const goToProfile=()=>{
        navigate("/profile");
    }
    useEffect(() => {
        if(!storedValue){
            navigate("/");
        }
    }, [])
    if(storedValue){
    return (
        // if(!storedValue){
        //     navigate("/");
        // }
        // else{
        <div className="containerWel">
            <div className="logout">
                <button className="logoutBtn" onClick={logout}>LogOut</button>
        </div>
        <div className="buttonGoTo">
                <button className="goToBtn" onClick={goToProfile}>Go To Profile</button>
        </div>
        </div>
    )}
}
export default Welcome;
