import React from 'react'
import {useState} from "react"
import "./Home.css"
import { useNavigate  } from "react-router-dom";

function Home() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    let enteredName="mano.1711147@gct.ac.in";
    let enteredPassword="Breeze@123";
    // let enteredName="1";
    // let enteredPassword="2";

    const NameInput=(e)=>{
        setUserName(e.target.value);
        // setUserName("mano.1711147@gct.ac.in");
        // enteredName=e.target.value;
        console.log(userName)
        console.log(enteredName,"e")
    }
    const passwordInput=(e)=>{
        // enteredPassword=e.target.value;
        setPassword(e.target.value);
        // setPassword("Breeze@123")
        console.log(password);
        console.log(enteredPassword,"e");
    }
    const LoginCheck=(e)=>{
        e.preventDefault();
        console.log(password);
         console.log(enteredPassword,"e");
         console.log(userName)
        console.log(enteredName,"e")
        // const navigate = useNavigate();
        if(userName===enteredName && password===enteredPassword){
            console.log(true);
            window.localStorage.setItem("value","yes");
            if(window.localStorage.getItem("value")){
           navigate("/LoginWelcome");
            }
        }
        else{
            console.log(false)
        }
    }
    return (
        <div className="containerParent">
            <div className="container">
            <h2>Route</h2>
            <div className="userName">
                <input type="text" placeholder="userName" className="userNameInp" onChange={NameInput}/>
            </div>
            <div className="password">
                <input type="text" placeholder="password" className="PasswordInp" onChange={passwordInput}/>
            </div>
            <div className="button">
                <button className="btn" onClick={LoginCheck}>Login</button>
            </div>
        </div>
        </div>
    )
}
export default Home;
{/* <Link to="/profile">Log In</Link> */}