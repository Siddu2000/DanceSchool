import React, { useEffect, useState } from 'react'
import axiosInstance from '../helper/Axios'
import STYLE from '../Academy/academy.module.css'
import { Link, useParams } from 'react-router-dom'

const BranchDetails = () => {
    const [state, setState] = useState([])
    const {id} = useParams()
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosInstance.get("/branches/getall", { headers: { Authorization: `Bearer ${token}` } })
                const finalData = data.data;
                console.log(finalData);
                setState(finalData)
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    const deleteData = async (id)=>{
        console.log(id);
        await axiosInstance.delete(`/branches/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        window.location.reload(true)
    }

    return (
        <>
            <section id={STYLE.ViewAcademyDashBoardBlock}>
                <h3 id={STYLE.ViewAcademyDashBoardNumber}>No of branch -<span>{state.length}</span></h3>
                <article id={STYLE.ViewAcademyDashBoardArticle}>
                    {state.map((value, index) => {
                        return (
                            <>
                                <nav>
                                    <ul>
                                        <li>SL.No - {index + 1}</li>
                                        <li>address - {value.address}</li>
                                        <li>city -  {value.city}</li>
                                        <li>phone - {value.phone}</li>
                                        <li>pincode - {value.pincode}</li>
                                        <div>
                                            <button><Link to={`/adminDashBoard/branchDetails/update/${value.id}`}>Edit</Link></button>
                                            <button><Link to={`/adminDashBoard/addCourse/${value.id}`}>Add Course</Link></button>
                                            <button onClick={()=>{deleteData(value.id)}}>delete</button>
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

export default BranchDetails