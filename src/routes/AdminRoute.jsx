import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
const role = window.localStorage.getItem("role");
    if(role === "ROLE_ADMIN" && (role !== null && role !== undefined)){
        return(
            <>{children}</>
        )
    }else{
        window.localStorage.clear()
        return(
            <>
                <Navigate to="/login" />
            </>
        )
    }
}

export default AdminRoute