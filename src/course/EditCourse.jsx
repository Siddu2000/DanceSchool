import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'
import STYLE from './course.module.css'

const EditCourse = () => {
  const [state, setState] = useState({
    courseDurationInMonths:"",
    fee:"",
    type:""
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const {courseDurationInMonths, fee, type} = state
  const token = window.localStorage.getItem("token")

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { courseDurationInMonths, fee, type}
      const { data } = await axiosInstance.post(`/dancecourses/save?branchid=${id}`, payload ,{headers:{Authorization:`Bearer ${token} `}})
      const finalData = data.data
      setState(finalData)
      alert(`Data Successfully added by ${id}`)
    //   console.log(data);
      navigate("/adminDashBoard/courseDetails")
    }
    catch{
      console.log("Unable to connect")
    }
  }

  return (
    <>
      <section id={STYLE.EditCourseBlock}>
        <article>
          <h2>ADD COURSE</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="courseDurationInMonths">COURSEDURATIONINMONTHS - </label>
            <input type="text" id='courseDurationInMonths' name='courseDurationInMonths' value={courseDurationInMonths} onChange={handleChange} />

            <label htmlFor="fee">FEE - </label>
            <input type="text" id="fee" name='fee' value={fee} onChange={handleChange}  />

            <label htmlFor="type">TYPE </label>
            <input type="text" id='type' name='type' value={type} onChange={handleChange}/>
            
            <button>Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default EditCourse