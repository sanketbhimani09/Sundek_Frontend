import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute=({children})=>{
    let a=JSON.parse(localStorage.getItem('adminId'));
    if(a==null){
        return <Navigate to="/Login"/>;
    }
    return children;
};
export default ProtectedRoute;