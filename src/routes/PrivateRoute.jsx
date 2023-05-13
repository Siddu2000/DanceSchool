import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
 if(window.localStorage.getItem("token")){
    return(
        <>
            {children}
        </>
    )
 }else{
    return <Navigate to="/login" />
 }
}

export default PrivateRoute