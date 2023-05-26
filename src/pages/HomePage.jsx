import React from 'react'
import STYLE from './pages.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Bharatanatyam from '../DanceForms/Bharatanatyam'
import DolluKunitha from './../DanceForms/DolluKunitha';
import Kathak from './../DanceForms/Kathak';
import Kuchipudi from '../DanceForms/Kuchipudi'
import Yakshagana from '../DanceForms/Yakshagana'

const HomePage = () => {
  const navigate = useNavigate()
  const role = window.localStorage.getItem("role")
  const removeStorage = () => {
    window.localStorage.clear()
    navigate('/login')
  }
  return (
    <section id={STYLE.HomePageBlock}>
      <article id={STYLE.HomePageBlockArticle}>
        <nav>
          <ul className={STYLE.list}>
            <li><Link>HOME</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
            <li><Link to="/adminDashBoard">{role === "ROLE_ADMIN" ? "ADMIN DASHBORD" : null}</Link></li>
            <li onClick={removeStorage}>LOGOUT</li>
          </ul>
        </nav>
        <center>
        <Bharatanatyam/>
        <DolluKunitha/>
        <Kathak/>
        <Kuchipudi/>
       <Yakshagana/>
       </center>
      </article>
    </section>
  )
}

export default HomePage