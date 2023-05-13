import React from 'react'
import staticimmg from "../assets/kuchipudi4.jpg"
import STYLE from './danceForms.module.css'

const Kuchipudi = () => {
    return (
        <section id={STYLE.staticmain}>
            <article>
                <div id={STYLE.staticimg}>
                    <img src={staticimmg} alt="" />
                </div>
                <div id={STYLE.staticdata}>
                    <h1>DANCE FORM : Kuchipudi</h1>
                    <p>DESCRIPTION : Kuchipudi is one of the eight major Indian classical dances. It originates from a village named Kuchipudi in the Indian state of Andhra Pradesh. Kuchipudi is a dance-drama performance, with its roots in the ancient Hindu Sanskrit text of Natya Shastra
                    </p>
                    <h4>FEE : 3000</h4>
                    <div>
                    <button>VIEW</button>
                    <button>REGISTER</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Kuchipudi