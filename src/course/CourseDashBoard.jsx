import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'
import STYLE from './course.module.css'


// updatation of dance course

const CourseDashBoard = () => {
  let token = localStorage.getItem("token")

  let navigate = useNavigate()

  let { id } = useParams()

  let [state, setState] = useState({
    courseDurationInMonths: "",
    fee: "",
    image: "",
    name: "",
    type: ""
  })

  let { courseDurationInMonths, fee, image, name, type } = state

  let handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setState({ ...state, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state);
    try {
      let payload = {
        courseDurationInMonths,
        fee,
        image,
        name,
        type,
        id
      }
      await axiosInstance.put(`dancecourses/update/${id}`, payload, { headers: { Authorization: `Bearer ${token}` } })
      // alert("data updated")
      navigate("/adminDashBoard/courseDetails")

    }
    catch {
      console.log("Unable to update course Details");
    }
  }

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get(`/dancecourses/get/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log(data);
        let finalData = data.data
        console.log(finalData);
        setState(finalData)

      }
      catch {
        console.log("Unable to get data for Update");
      }

    }
    fetchData()
  }, [])

  return (
    <section id={STYLE.EditCourseBlock}>
    <article>
      <h2>UPDATE COURSE</h2>
      <form action="">
        <label htmlFor="courseDurationInMonths">COURSEDURATIONINMONTHS - </label>
        <input type="text" id='courseDurationInMonths' name='courseDurationInMonths' value={courseDurationInMonths} onChange={handleChange} />

        <label htmlFor="fee">FEE - </label>
        <input type="text" id="fee" name='fee' value={fee} onChange={handleChange} minLength="6" maxLength="6" />

        <label htmlFor="type">TYPE </label>
        <input type="text" id='type' name='type' value={type} onChange={handleChange} minLength="10" maxLength="10"/>
        
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </article>
  </section>
  )
}

export default CourseDashBoard