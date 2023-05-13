import React from 'react'
import { Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
    // console.log(children)

  if(window.localStorage.getItem("token")){
    return (
       <Navigate to ="/login"/>
    )
  }else{
    return(
        <>
            {children}
        </>
    )
  }
}

export default PublicRoute