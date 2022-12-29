import React from 'react'
import Home from "../routes/Home.js"
import Profile from "../routes/Profile.js"
import Welcome from "../routes/Welcome.js"
import {Routes,Route} from "react-router-dom"

 const route = () => {
    return (
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/LoginWelcome" element={<Welcome/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
       </Routes>
    )
}
export default route;
