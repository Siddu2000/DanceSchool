import React from 'react'
import { Outlet } from 'react-router-dom'


const AcademyManagerMainBar = () => {
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

export default AcademyManagerMainBar