import React,{useEffect}  from 'react'
import "./Profile.css"
import { useNavigate  } from "react-router-dom";

function Profile() {
    const navigate=useNavigate();
    const storedValue=window.localStorage.getItem("value");
    const logout=()=>{
        window.localStorage.clear();
        navigate("/");
    }
    const data=[
        {
            id:1,
            userName:"mano.1711147@gct.ac.in",
            password:"Breeze@123"
        },
        {
            id:2,
            userName:"bharath.1711147@gct.ac.in",
            password:"Breeze@123"
        }
    ];
    useEffect(() => {
        if(!storedValue){
            navigate("/");
        }
    }, []);

    if(storedValue){
    return (

        <div className="containerProfile">
            <div className="logout">
                <button className="logoutBtn" onClick={logout}>LogOut</button>
        </div>
        <div className="card">
            <div className="cardChild">
                <div className="details">
                    <h1>Profile Detail</h1>
                    <div className="mainDetails">
                        <div className="label">Name:</div>
                        <div className="value">manoj</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Age:</div>
                        <div className="value">23</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Education:</div>
                        <div className="value">BE</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Email:</div>
                        <div className="value">mano.1711147@gct.ac.in</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Date:</div>
                        <div className="value">28/12/2022</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )} 
}
export default Profile;
