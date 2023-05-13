import React from 'react'
import staticimmg from "../assets/Kathak1.jpg"
import STYLE from './danceForms.module.css'

const Kathak
 = () => {
    return (
        <section id={STYLE.staticmain}>
            <article>
                <div id={STYLE.staticimg}>
                    <img src={staticimmg} alt="" />
                </div>
                <div id={STYLE.staticdata}>
                    <h1>DANCE FORM : Kathak

                    </h1>
                    <p>DESCRIPTION :  Kathak is found in three distinct forms, called "gharanas", named after the cities where the Kathak dance tradition evolved – Jaipur, Banaras and Lucknow.[8] While the Jaipur gharana focuses more on the foot movements, the Banaras and Lucknow gharanas focus more on facial expressions and graceful hand movements. Stylistically, the Kathak dance form emphasizes rhythmic foot movements, adorned with small bells (Ghungroo) and the movement harmonized to the music.[4][9] The legs and torso are generally straight, and the story is told through a developed vocabulary based on the gestures of arms and upper body movement, facial expressions.
                    </p>
                    <h4>FEE : 5000</h4>
                    <div>
                    <button>VIEW</button>
                    <button>REGISTER</button>

                    </div>
                </div>
            </article>
        </section>
    )
}

export default Kathak
