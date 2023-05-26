import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'
import STYLE from './academy.module.css'

const EditAcademy = () => {
  const [state, setState] = useState({
    academyName: "",
    description: "",
    email: "",
    contact: ""
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const { academyName, description, email, contact } = state
  const token = window.localStorage.getItem("token")

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { academyName, description, email, contact }
      const { data } = await axiosInstance.post(`/academies/saveacademy?managerId=${id}`, payload, { headers: { Authorization: `Bearer ${token} ` } })
      console.log(data);
      navigate("/adminDashBoard/viewAcademyDashBoard")
    }
    catch {
      console.log("Unable to Connect")
    }
  }

  return (
    <>
      <section id={STYLE.EditAcademyBlock}>
        <article>
          <h2>ADD ACADEMY</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="academyName">Academy Name:</label>
            <input type="text" id='academyName' name='academyName' value={academyName} onChange={handleChange} placeholder='academy' />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name='description' value={description} onChange={handleChange} placeholder='description' />
            <label htmlFor="email">email:</label>
            <input type="text" id='email' name='email' value={email} onChange={handleChange} placeholder='email' />
            <label htmlFor="contact">Contact:</label>
            <input type="text" id='contact' name='contact' value={contact} onChange={handleChange} minLength="10" maxLength="10" placeholder='contact' />
            <button>Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default EditAcademy