import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from './../helper/Axios';
import STYLE from './academy.module.css'

const ViewAcademyDashBoard = () => {
  const [state, setState] = useState([])
  const {id} = useParams()
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`/academies/getall`, { headers: { Authorization: `Bearer ${token}` } })
        const finalData = data.data
        setState(finalData)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  let deleteData = async (id) => {
    console.log(id);
    await axiosInstance.delete(`/academies/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    // Navigate("/adminDashBoard/viewAcademyDashBoard")
    window.location.reload(true)
  }
  return (
    <>
      <section id={STYLE.ViewAcademyDashBoardBlock}>
        <h3 id={STYLE.ViewAcademyDashBoardNumber}>No of Academy -<span>{state.length}</span></h3>
        <article id={STYLE.ViewAcademyDashBoardArticle}>
          {state.map((value, index) => {
            return (
              <>
                <nav>
                  <ul>
                    <li>SL.No - {index + 1}</li>
                    <li>Academy Name - {value.academyName}</li>
                    <li>Description -  {value.description}</li>
                    <li>Email - {value.email}</li>
                    <li>Contact Number - {value.contact}</li>
                    <div>
                      <button><Link to={`/adminDashBoard/academyDetails/update/${value.id}`}>Edit</Link></button>
                      <button><Link to={`/adminDashBoard/addBranch/${value.id}`}>Add branch</Link></button>
                      <button onClick={() => { deleteData(value.id) }}>delete</button>
                    </div>
                  </ul>
                </nav>
              </>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default ViewAcademyDashBoard