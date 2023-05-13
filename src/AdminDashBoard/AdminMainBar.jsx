import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainBar = () => {
  return (
  <>
      <section>
        <article>
            <Outlet/>
        </article>
      </section>
  </>
  )
}

export default AdminMainBar