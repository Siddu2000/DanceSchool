import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import img from '../assets/free-registration-forms.jpg'
import STYLE from './Auth.module.css'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axiosInstance from './../helper/Axios';



const Register = () => {
    const [state, setState] = useState({
        userName: "",
        password: "",
        confirmPassword:"",
        dob: "",
        email: "",
        gender: "",
        phone: ""
    })
    // const [pwd, setPwd] = useState(true);
    // const [icon, setIcon] = useState(true);
    // const [iconConfirm, setIconConfimr] = useState(<VisibilityIcon/>)
    let { userName, password, dob, email, gender, phone, confirmPassword } = state;
    let navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let payload = { userName, password, dob, email, gender, phone }
            let axiosResult = await axiosInstance.post('/users/save', payload)
            console.log(axiosResult)
            console.log("data successfully sent")
            toast.success(`${email} registered successfully`)
            navigate("/login")
        } catch (error) {
            toast.error(error.code)
        }
        console.log({ userName, password, dob, email, gender, phone })
    }
    
    // const showpassword = () => {
    //     if (pwd === true) {
    //         setPwd(false);
    //         setIcon(false);
    //         setIconConfimr(false)
    //     }
    //     else {
    //         setPwd(true)
    //         setIcon(true);
    //         setIconConfimr(true)
    //     }
    // }

    const handleCancle = () => {
        setState({ state: "" })
    }

    return (
        <>
            <section id={STYLE.blockTwo}>
                <section id={STYLE.blockTwoSectionOne}>
                    <article>
                        <img src={img} alt='' height="520px" width="400px" style={{ borderRadius: "5px", opacity: 0.9 }} />
                    </article>
                </section>
                <section id={STYLE.blockTwoSectionTwo} >
                    <article>
                        <h3>Registration</h3>
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
                                    {/* <span onClick={showpassword}>{icon ? <VisibilityIcon style={{ color : "#1E66DA"}} /> : <VisibilityOffIcon style={{ color : "#1E66DA"}} />}</span> */}
                                </div>
                                <div id={STYLE.blockTwoDivFive}>
                                    <label htmlFor="confirmPassword">Comfirm Password:</label>
                                    <input type="password" name='confirmPassword' id="confirmPassword" placeholder=' password' value={confirmPassword} onChange={handleChange} />
                                    {/* <span onClick={showpassword}>{iconConfirm ? <VisibilityIcon style={{ color : "#1E66DA"}} /> : <VisibilityOffIcon style={{ color : "#1E66DA"}} />}</span> */}
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
                                    {/* <label htmlFor="dob">DOB</label> */}
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
export default Register;