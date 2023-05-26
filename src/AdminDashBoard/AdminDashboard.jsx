import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminMainBar from './AdminMainBar';
import STYLE from './admin.module.css'

import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  let location=useLocation()
  return (
    <>
      <section id={STYLE.AdminDashboardBlock}>
        <AdminSideBar id={STYLE.AdminDashboardBlockSidebar} />
        <AdminMainBar id={STYLE.AdminDashboardBlockMainbar} />
         {location.pathname==="/adminDashBoard" ?  <h1 style={{textAlign:"center",color:"blue",width:"100%"}}>Welcome to Admin Section</h1>
                : null }
      </section>
    </>
  )
}

export default AdminDashboard