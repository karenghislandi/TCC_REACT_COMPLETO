import React from "react";
import { Navigate } from "react-router-dom";

function RoutePrevaider({children}){
    const user= localStorage.getItem("token")

    return user ? children : <Navigate to="/login" />;
}
export default RoutePrevaider