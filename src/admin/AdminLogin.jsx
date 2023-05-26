import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import STYLE from './admin.module.css'
import axiosInstance from '../helper/Axios'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {

    const [state, setState] = useState({
        userEmail: "",
        password: ""
    })
    const { userEmail, password } = state
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({ userEmail, password })
        try {
            const payload = { userEmail, password }
            const {data} = await axiosInstance.post('/authenticate', payload)
            // toast.success(`successfully ${userEmail} logged in`,{
            //             position: toast.POSITION.TOP_RIGHT})
            // if(data){
            //     toast.success(`successfully ${userEmail} logged in`,{
            //         position: toast.POSITION.TOP_RIGHT
            //     })
            // } else{
            //     toast.error("bad request",{
            //         position: toast.POSITION.TOP_RIGHT
            //     })
            // }
            let jsonData = async () => {
                let { role, token, userId } = data
                console.log(role, token, userId)
                if (token) {
                    window.localStorage.setItem("userId", userId)
                    window.localStorage.setItem("role", role)
                    window.localStorage.setItem("token", token)
                } else {
                    window.localStorage.removeItem("userId", userId)
                    window.localStorage.removeItem("role", role)
                    window.localStorage.removeItem("token", token)
                }
                navigate("/")
                return { role, token, userId }
            }
            jsonData()
        } catch {
            console.log("unable to connect to the server")
        }
    }
    return (
        <>
            <section id={STYLE.blockOne}>
                {/* <ToastContainer/> */}
                <article id={STYLE.blockOneArticle}>
                    <form action="">
                        <h4>Admin Login</h4>
                        <div id={STYLE.blockOneDivOne}>
                            <input type="text" name='userEmail' placeholder=' Email address' value={userEmail} onChange={handleChange} />
                            <input type="password" name='password' placeholder=' Password' value={password} onChange={handleChange} />
                        </div>
                        <div id={STYLE.blockOneDivTwo}>
                            <div>
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember"> Remember me</label>
                            </div>
                            <div>
                                <Link to="/adminRegister">Forgot password?</Link>
                            </div>
                        </div>
                        <div id={STYLE.blockOneDivThree}>
                            <button onClick={handleSubmit}>SIGN IN</button>
                        </div>
                        <div id={STYLE.blockOneDivFour}>
                            <p>Not a member?</p>
                            <Link to="/adminRegister">Register</Link>
                            {/* <p>or sign up with:</p> */}
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default AdminLogin