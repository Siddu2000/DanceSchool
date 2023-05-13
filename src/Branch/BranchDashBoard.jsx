import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axiosInstance from '../helper/Axios'
import STYLE from './branch.module.css'

// branch details update

const BranchDashBoard = () => {
  // doc code 


  let { id } = useParams()

  let navigate = useNavigate()

  let token = localStorage.getItem("token")

  let [state, setState] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: ""
  })

  let { address, city, phone, pincode } = state

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
        address,
        city,
        phone,
        pincode,
        id

      }

      await axiosInstance.put(`/branches/update/${id}`, payload, { headers: { Authorization: `Bearer ${token}` } })
      alert(`Data Successfully Updated ${id}`)
      navigate("/adminDashBoard/branchDetails")


    }
    catch {
      console.log("Unable to update the Data");
    }


  }

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get(`branches/get/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log(data);
        let finalData = data.data
        setState(finalData)
      }
      catch {
        console.log("Unable to get Data");
      }
    }
    fetchData()
  }, [])


  let handleDelete = async (id) => {
    console.log(id);

    await axiosInstance.delete(`/branches/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    alert(`Data with ${id} has been deleted Successfully`)
    navigate("/adminDashBoard/branchDetails")
  }
  return (
    <>
      <section id={STYLE.EditBranchBlock}>
        <article>
          <h2>UPDATE BRANCH</h2>
          <form action="">
            <label htmlFor="address">address</label>
            <input type="text" id='address' name='address' value={address} onChange={handleChange} placeholder='addres' />

            <label htmlFor="city">city</label>
            <input type="text" id="city" name='city' value={city} onChange={handleChange} placeholder='city' />

            <label htmlFor="phone">phone</label>
            <input type="text" id='phone' name='phone' value={phone} onChange={handleChange} minLength="10" maxLength="10" placeholder='phone' />

            <label htmlFor="pincode">pincode</label>
            <input type="text" id='pincode' name='pincode' value={pincode} onChange={handleChange} minLength="6" maxLength="6" placeholder='pin code' />

            <button onClick={handleSubmit}>Submit</button>
          </form>

        </article>
      </section>
    </>
  )
}


export default BranchDashBoard
