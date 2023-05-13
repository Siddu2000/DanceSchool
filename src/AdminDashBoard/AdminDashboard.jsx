import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminMainBar from './AdminMainBar';
import STYLE from './admin.module.css'

const AdminDashboard = () => {
  return (
    <>
      <section id={STYLE.AdminDashboardBlock}>
        <AdminSideBar id={STYLE.AdminDashboardBlockSidebar} />
        <AdminMainBar id={STYLE.AdminDashboardBlockMainbar} />
      </section>
    </>
  )
}

export default AdminDashboard