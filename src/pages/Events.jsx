import React , { useEffect, useState }  from 'react'
import axiosInstance from '../helper/Axios'
import STYLE from '../Academy/academy.module.css'

const Events = () => {
    const [state, setState] = useState([])

    useEffect(() => {
      const token = window.localStorage.getItem("token")
      const fetchData = async () => {
        try {
          const { data } = await axiosInstance.get("/dancecourses/getall", { headers: { Authorization: `Bearer ${token}` } })
          const finalData = data.data
          setState(finalData)
          // console.log(finalData);
        }
        catch (err) {
          console.log(err);
        }
      }
      fetchData()
    }, [])
  
    return (
      <>
        <section id={STYLE.ViewAcademyDashBoardBlock}>
          <h3 id={STYLE.ViewAcademyDashBoardNumber}>No of Courses -<span>{state.length}</span></h3>
          <article id={STYLE.ViewAcademyDashBoardArticle}>
            {state.map((value, index) => {
              return (
                <>
                  <nav>
                    <ul>
                      <li>SL.No - {index + 1}</li>
                      <li>courseDurationInMonths - {value.courseDurationInMonths}</li>
                      <li>fee -  {value.fee}</li>
                      <li>type - {value.type}</li>
                      <div>
                        <button>view</button>
                      </div>
                    </ul>
                  </nav>
                </>
              )
            })}
          </article>
        </section>
      </>
    )
  }
  
export default Events