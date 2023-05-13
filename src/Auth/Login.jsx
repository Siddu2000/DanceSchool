import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import STYLE from './Auth.module.css'
import axiosInstance from '../helper/Axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import 'react-toastify/dist/ReactToastify.css';
// import { blue } from '@mui/material/colors';
const Login = () => {

    const [state, setState] = useState({
        userEmail: "",
        password: ""
    })
    const [pwd, setPwd] = useState(true);
    const [icon, setIcon] = useState(true);
    const { userEmail, password } = state
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const showpassword = () => {
        if (pwd === true) {
            setPwd(false);
            setIcon(false);
        }
        else {
            setPwd(true)
            setIcon(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log({ userEmail, password })
        try {
            const payload = { userEmail, password }
            const { data } = await axiosInstance.post('/authenticate', payload)
            const { role, token, userId } = data
            if(token){

                window.localStorage.setItem("userId", userId)
                window.localStorage.setItem("role", role)
                window.localStorage.setItem("token", token)
                navigate('/')
                toast.success(`${userEmail} logged successfully`)

            }else{
                window.localStorage.clear()
            }
            // if (token) {
            //     toast.success(`successfully ${userEmail} logged in`, { position: toast.POSITION.TOP_RIGHT })
            // }

            // let jsonData = async () => {
            //     console.log(role, token, userId)
            //     if (token) {
            //         window.localStorage.setItem("userId", userId)
            //         window.localStorage.setItem("role", role)
            //         window.localStorage.setItem("token", token)
            //     } else {
            //         window.localStorage.removeItem("userId", userId)
            //         window.localStorage.removeItem("role", role)
            //         window.localStorage.removeItem("token", token)
            //     }
            //     navigate("/")
            //     return { role, token, userId }
            // }
            // jsonData()
        } catch(error) {
            toast.error(error.code, { position: toast.POSITION.TOP_RIGHT })
            console.log("unable to connect to the server")
        }
    }
    return (
        <>
            <section id={STYLE.blockOne}>
                <ToastContainer />
                <article id={STYLE.blockOneArticle}>
                    <form action="">
                        <h4>Login</h4>
                        <div id={STYLE.blockOneDivOne}>
                            <input type="text" name='userEmail' placeholder=' Email address' value={userEmail} onChange={handleChange} />
                            <div id={STYLE.blockOneDivOneDiv}>
                                <input type={pwd ? 'password' : 'text'} name='password' placeholder=' Password' value={password} onChange={handleChange} />
                                <span onClick={showpassword}>{icon ? <VisibilityIcon style={{ color : "#1E66DA"}} /> : <VisibilityOffIcon style={{ color : "#1E66DA"}} />}</span>
                            </div>
                        </div>
                        <div id={STYLE.blockOneDivTwo}>
                            <div>
                                <input type="checkbox" name="remember" id="remember"  mand/>
                                <label htmlFor="remember"> Remember me</label>
                            </div>
                            <div>
                                <Link to="userRegister">Forgot password?</Link>
                            </div>
                        </div>
                        <div id={STYLE.blockOneDivThree}>
                            <button onClick={handleSubmit}>SIGN IN</button>
                        </div>
                        <div id={STYLE.blockOneDivFour}>
                            <p>Not a member?</p>
                            <Link to="register">Register</Link>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Login