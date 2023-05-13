import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'
import STYLE from './branch.module.css'

const EditAcademy = () => {
  const [state, setState] = useState({
    address:"",
    city:"",
    phone:"",
    pincode:""
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const {address, city, phone, pincode } = state
  const token = window.localStorage.getItem("token")

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { address, city, phone, pincode }
      const { data } = await axiosInstance.post(`/branches/save?aid=${id}`, payload ,{headers:{Authorization:`Bearer ${token} `}})
      const finalData = data.data
      setState(finalData)
    //   console.log(data);
      navigate("/adminDashBoard/branchDetails")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <section id={STYLE.EditBranchBlock}>
        <article>
          <h2>ADD BRANCH</h2>
          <form action="">
            <label htmlFor="address">address</label>
            <input type="text" id='address' name='address' value={address} onChange={handleChange} placeholder='addres' />

            <label htmlFor="city">city</label>
            <input type="text" id="city" name='city' value={city} onChange={handleChange}  placeholder='city'/>

            <label htmlFor="phone">phone</label>
            <input type="text" id='phone' name='phone' value={phone} onChange={handleChange} minLength="10" maxLength="10" placeholder='phone'/>

            <label htmlFor="pincode">pincode</label>
            <input type="text" id='pincode' name='pincode' value={pincode} onChange={handleChange} minLength="6" maxLength="6" placeholder='pin code' />
            
            <button onClick={handleSubmit}>Submit</button>
          </form>
          
        </article>
      </section>
    </>
  )
}

export default EditAcademy