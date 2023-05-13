import React from 'react'
import staticimmg from "../assets/adamsmith-purpose.jpg"
import styles from "./pages.module.css"

const StaticDetails = () => {
    return (
        <section id={styles.staticmain}>
            <article>
                <div id={styles.staticimg}>
                    <img src={staticimmg} alt="" />
                </div>
                <div id={styles.staticdata}>
                    <h1>DANCE FORM</h1>
                    <p>DESC : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id placeat a labore, est esse numquam reiciendis, 
                        rem molestias magni beatae distinctio aliquid tempore. Voluptas excepturi ipsam mollitia repudiandae vero sunt cumque 
                        ipsum sit delectus magni provident optio ab neque, earum doloremque iste! Minima, vel facere velit reiciendis repudiandae 
                        dolor? Sit, provident consectetur! Obcaecati culpa quod ut sapiente et, aspernatur consequatur minus reiciendis aliquid 
                        dolor quis, quo nesciunt vitae dolores enim distinctio rerum atque qui? Dicta quasi molestias temporibus cum dignissimos 
                        repellat, earum harum. Aliquam, nulla earum?debitis explicabo maxime! Voluptates, aperiam
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

export default StaticDetails