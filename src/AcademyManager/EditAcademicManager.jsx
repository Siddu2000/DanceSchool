import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import STYLE from './auth.module.css'
import img from '../assets/free-registration-forms.jpg'
import axiosInstance from '../helper/Axios'

const EditAcademicManager = () => {
  // const nagivate = useNavigate()
  // const [state, setState] = useState({
  //   userName: "",
  //   password: "",
  //   confirmPassword:"",
  //   email: "",
  //   phone: "",
  //   dob: "",
  //   gender: "",
  //   role: "",
  //   age: ""
  // })
  // const { id } = useParams()
  // const { userName, password, email, phone, dob, gender, role, age,confirmPassword } = state;

  // const handleChange = (e)=>{
  //   e.preventDefault()
  //   const { name, value } = e.target
  //   setState({ ...state, [name]: value })
  // }

  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const {data} = await axiosInstance.get(`/academymanagers/get/${id}`, {headers:{Authorization:`Bearer ${id}`}})
  //       const finalData = data.data
  //       setState(finalData)
  //       console.log(finalData);
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchData()
  // },[])
  // const handleSubmit = async (e)=>{
  //   e.preventDefault()
  //   try{
  //     const payload = {userName, password, email, phone, dob, gender, id};
  //     const {data} = await axiosInstance.put("/academymanagers/update", payload, {headers:{Authorization:`Bearer ${id}`}})

  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // doc code ....

  let token = localStorage.getItem("token")

  let navigate = useNavigate()

  let { id } = useParams()

  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword:"",
    dob: "",
    phone: "",
    gender: ""
  })

  let { userName, email, password, dob, phone, gender, confirmPassword } = data
  let handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setData({ ...data, [name]: value })

  }
  let handleSubmit = async (e) => {
    e.preventDefault()
    // console.log("Good Afternoon", data)
    try {
      let payload = {
        userName,
        email,
        password,
        phone,
        dob,
        gender,
        id
      }

      let finalData = await axiosInstance.put("/academymanagers/update", payload, { headers: { Authorization: `Bearer ${token}` } })
      console.log(finalData);
      alert(`Successfully Updated the Data with email ${email} as Academy Manager`)
      navigate('/adminDashboard/viewAcademyManager')
    }
    catch {
      console.log("Unable to Connect To server");
    }
  }

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        let finalData = data.data
        console.log(finalData);
        setData(finalData)

      } catch {
        console.log("Unable to fetch data");
      }
    }
    fetchData()
  }, [])

  const handleCancle = () => {

  }
  return (
    <>
      <section id={STYLE.blockTwo}>
        <section id={STYLE.blockTwoSectionOne}>
          <article>
            <img src={img} alt='' height="600px" style={{ borderRadius: "5px" }} />
          </article>
        </section>
        <section id={STYLE.blockTwoSectionTwo} >
          <article>
            <h3>update</h3>
            <form action="">
              <section id={STYLE.blockTwoSectionThree}>
                <div id={STYLE.blockTwoDivOne}>
                  <label htmlFor="userName">Full Name:</label>
                  <input type="text" name='userName' id='userName' placeholder=' name' value={userName} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivTwo}>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name='email' id='email' placeholder=' email' value={email} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivThree}>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text" name='phone' id='phone' placeholder=' number' minLength="10" maxLength="10" value={phone} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivFour}>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name='password' id='password' placeholder=' password ' value={password} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivFive}>
                  <label htmlFor="confirmPassword">Comfirm Password:</label>
                  <input type="password" name='confirmPassword' id="confirmPassword" placeholder=' password' value={confirmPassword} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivSix}>
                  <span>
                    <input type="radio" name='gender' id='male' value="male" onChange={handleChange} />
                    <label htmlFor="male"> male</label>
                  </span>
                  <span>
                    <input type="radio" name='gender' id='female' value="female" onChange={handleChange} />
                    <label htmlFor="female"> female</label>
                  </span>
                  <span>
                    <input type="radio" name='gender' id='other' value="other" onChange={handleChange} />
                    <label htmlFor="other"> Other</label>
                  </span>
                </div>
                <div id={STYLE.blockTwoDivSeven}>
                  <p>DOB</p>
                  <input type="date" name='dob' id='dob' value={dob} onChange={handleChange} />
                </div>
                <div id={STYLE.blockTwoDivEight}>
                  <input type="checkbox" name="checkbox" id="accept" />
                  <label htmlFor="accept"> I agree to terms of users</label>
                </div>
                <div id={STYLE.blockTwoDivNine}>
                  <button onClick={handleSubmit}>signUp</button>
                  <button onClick={handleCancle}>cancel</button>
                </div>
                <div id={STYLE.blockTwoDivTen}>
                  <span>Already have an account? </span>
                  <Link to="/">Sign in</Link>
                </div>
              </section>
            </form>
          </article>
        </section>
      </section>
    </>

  )
}

export default EditAcademicManager