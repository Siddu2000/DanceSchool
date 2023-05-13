import React, { useEffect, useState } from 'react'
import axiosInstance from '../helper/Axios'
import STYLE from './admin.module.css'
import {Link } from 'react-router-dom'

const ViewAcademicManager = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const fetchData = async () => {
      const { data } = await axiosInstance.get("/academymanagers/getall", { headers: { Authorization: `Bearer ${token}` } })
      const finalData = await data.data
      setState(finalData)
      // console.log(finalData);
    }
    fetchData()
  }, [])
  return (
    <>
      <section id={STYLE.viewAcademicManagerBlock}>
        <h3 id={STYLE.ViewAcademicManagerNumber}>No Of Managers -  <span> {state.length}</span></h3>
        <article id={STYLE.ViewAcademicManagerArticle}>
          {state.map((value, index) => {
            return (
              <>
                <nav>
                    <h3>Name - {value.userName}</h3>
                  <ul>
                    <li key={index}>Age - {value.age}</li>
                    <li key={index[index]}>designation - {value.role}</li>
                    <li>DOB - {value.dob}</li>
                    <li>Tel - {value.phone}</li>
                    <li>Email - {value.email}</li>
                    <li>Gender - {value.gender}</li>
                    <h4>manager id - {index + 1}</h4>
                  </ul>
                  <button><Link to={`/adminDashBoard/managerDetails/${value.id}`}>View</Link></button>
                </nav>
              </>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default ViewAcademicManager