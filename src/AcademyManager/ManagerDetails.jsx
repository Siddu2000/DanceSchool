import React, { useEffect, useState } from 'react'
import axiosInstance from './../helper/Axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import STYLE from './auth.module.css'

const ManagerDetails = () => {
  const fakeImg = faker.image.city()
  const navigate = useNavigate()

  const [state, setState] = useState({
    userName: "",
    email: "",
    phone: "",
    role: "",
    dob: "",
    gender: "",

  })
  const token = window.localStorage.getItem("token")
  // const { userName, email, phone, role, age, dob, gender } = state
  const { id } = useParams()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      let finalData = data.data
      // console.log(finalData);
      let { userName, email, phone, role, dob, gender } = finalData
      setState({ userName, email, phone, role, dob, gender })
    }
    fetchData()
  }, [id])

  let deleteData = async () => {
    await axiosInstance.delete(`/academymanagers/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    navigate("/adminDashBoard/viewAcademyManager")
  }

  return (
    <>
      <section id={STYLE.managerDetailsBlock}>
        <article id={STYLE.managerDetailsBlockArticle}>
          <img src={fakeImg} alt="" height="200px" width="300px" />
          <div id={STYLE.managerDetailsBlockDiv}>
            <p>Name - {state.userName}</p>
            <p>Email - {state.email}</p>
            <p>Tel - {state.phone}</p>
            <p>Role - {state.role}</p>
            <p>DOB - {state.dob}</p>
            <p>Gender - {state.gender}</p>
          </div>
          <div id={STYLE.managerDetailsBlockDiv2}>
            <button><Link to={`/adminDashBoard/managerDetails/update/${id}`}>update</Link></button>
            <button><Link to={`/adminDashBoard/addAcademy/${id}`}>add academy</Link></button>
            <button onClick={() => { deleteData(state.id) }}>delete</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default ManagerDetails