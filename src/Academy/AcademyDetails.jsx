import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'
import STYLE from './academy.module.css'

// updating academy details in this component


const AcademyDetails = () => {
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

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   let { name, value } = e.target;
  //   setState({ ...state, [name]: value })
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let { data } = await axiosInstance.get(`/academies/get/${id}`, { headers: { Authorization: `Bearer ${token}` } })
  //       const finalData = data.data
  //       console.log(finalData);
  //     }
  //     catch (err) {

  //     }
  //   }
  //   fetchData()
  // }, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const payload = { academyName, description, email, contact }
  //     const { data } = await axiosInstance.post(`/academies/saveacademy?managerId=${id}`, payload, { headers: { Authorization: `Bearer ${token} ` } })
  //     console.log(data);
  //     navigate("/adminDashBoard/viewAcademyDashBoard")
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  // doc code 


    let handleChange=(e)=>{
      let name=e.target.name
      let value=e.target.value
      setState({...state,[name]:value})
   }


   let handleSubmit=async (e)=>{
             e.preventDefault()
             console.log(state);
             try{
                 let payload={
                   academyName,
                   contact,
                   description,
                   email,
                   id
                 }

                  await axiosInstance.put('/academies/update',payload,{headers:{Authorization:`Bearer ${token}`}})
                  alert("Data Updated Successfully")
                  navigate("/adminDashBoard/viewAcademyDashBoard")
                }
             catch(err){
              console.log(err)
             }
   }

   useEffect(()=>{
          let fetchData=async ()=>{

            try{
                let {data}=await axiosInstance.get(`/academies/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
                console.log(data);
                let finalData=data.data
                console.log(finalData);
                setState(finalData)

              }
              catch{
                console.log("Unable to Connect");
            }

          }

            fetchData()
   },[])


  return (
    <>
      <section id={STYLE.EditAcademyBlock}>
        <article>
          <h2>UPDATE ACADEMY</h2>
          <form action="">
            <label htmlFor="academyName">Academy Name:</label>
            <input type="text" id='academyName' name='academyName' value={academyName} onChange={handleChange}  />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name='description' value={description} onChange={handleChange}  />
            <label htmlFor="email">email:</label>
            <input type="text" id='email' name='email' value={email} onChange={handleChange}/> 
            <label htmlFor="contact">Contact:</label>
            <input type="text" id='contact' name='contact' value={contact} onChange={handleChange} minLength="10" maxLength="10"  />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}


export default AcademyDetails