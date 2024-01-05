import React from "react";
import { useNavigate } from "react-router-dom";

function PlaceholderIndex() {
    
    const navigate = useNavigate()
    
    return (<div style={{color:"blue", backgroundColor:"white"}}>
        <h1 style={{color:"black"}}>Quick Links</h1>
        <h2 onClick={()=>{navigate("/test")}}>Web5 Stuff</h2>
        <h2 onClick={()=>{navigate("/dashboard")}}>Dashboard</h2>
        <h2 onClick={()=>{navigate("/signin")}}>SignIn</h2>
    </div>)
}

export default PlaceholderIndex