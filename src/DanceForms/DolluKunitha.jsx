import React from 'react'
import staticimmg from "../assets/DolluKunitha1.jpg"
import STYLE from './danceForms.module.css'

const DolluKunitha = () => {
    return (
        <section id={STYLE.staticmain}>
            <article>
                <div id={STYLE.staticimg}>
                    <img src={staticimmg} alt="" />
                </div>
                <div id={STYLE.staticdata}>
                    <h1>DANCE FORM : DolluKunitha</h1>
                    <p>DESC : This expressive literature its oral tradition goes by the legend called 'Halumatha Purana' 
                        or Kuruba Purana. The story is that the demon Dolla-asura worshipped Shiva devotedly and, when
                         Shiva appeared before him, asked him to ask for a boon; that he should be able to swallow Shiva himself,
                          or else he requests immortality which Shiva refuses so that the enraged Dollu swallow's Shiva. Shiva 
                          started growing big. The asura, unable to bear the pain, pleaded for Shiva to come out. Shiva tore
                           open the demon, thus killing him, and came out. Shiva used the skin of the asura to make a dollu/drum 
                           and gave it to the rustics, his devotees, the “Halu Kurubas”. The “Halu Kuruba” tribes in Shimoga follow 
                           this tradition even today.
                    </p>
                    <h4>FEE : 6000</h4>
                    <div>
                    <button>VIEW</button>
                    <button>REGISTER</button>

                    </div>
                </div>
            </article>
        </section>
    )
}

export default DolluKunitha