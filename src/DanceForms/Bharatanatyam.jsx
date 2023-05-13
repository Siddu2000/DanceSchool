import React from 'react'
import staticimmg from "../assets/bharathnatyam1.jpg"
import STYLE from './danceForms.module.css'

const Bharatanatyam = () => {
    return (
        <section id={STYLE.staticmain}>
            <article>
                <div id={STYLE.staticimg}>
                    <img src={staticimmg} alt="" />
                </div>
                <div id={STYLE.staticdata}>
                    <h1>DANCE FORM : BHARATANATYAM</h1>
                    <p>DESCRIPTION :  Bharatanatyam is an Indian classical dance form that originated in Tamil Nadu. It is one of eight Indian classical dance forms recognized by the Sangeet Natak Akademi, and expresses South Indian religious themes and spiritual ideas, particularly of Shaivism and in general of Hinduism
                    </p>
                    <h4>FEE : 7000</h4>
                    <div>
                        <button>VIEW</button>
                        <button>REGISTER</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Bharatanatyam