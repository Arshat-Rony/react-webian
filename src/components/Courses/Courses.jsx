import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Books from '../Books/Books';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'
const buttons = [
    { id: 1, text: "All Courses" },
    { id: 2, text: "Books" },
    { id: 3, text: "Free Courses" },
    { id: 4, text: "Premium Courses" }
]


const Courses = () => {
    let heading;
    const [serarchtext, setSerarchtext] = useState("")
    const [courses, setCourses] = useCourses(serarchtext)
    const [color, setColor] = useState('')

    const handleSearch = (text) => {
        setSerarchtext(text)
        heading = serarchtext;
    }
    const handleSearchOption = (e) => {
        setSerarchtext(e.target.value)
    }

    return (
        <div className='courses-section'>
            <div className="course-menu">
                {

                    buttons.map(item =>


                        <button style={{ background: color }} onClick={() => handleSearch(`${item.text}`)}>{item.text}</button>


                    )

                }
            </div>
            <div className="courses-page">
                <div className='d-flex flex-column flex-md-row justify-content-between'>
                    <h1 className='course-heading text-center text-md-start text-capitalize'>{serarchtext ? serarchtext : "All Courses"}</h1>
                    <div className="search-box">
                        <input onChange={handleSearchOption} type="search" className='ps-3' name="search" id="search" placeholder='Search By Title' />
                        <FontAwesomeIcon className='icon' icon={faSearch}></FontAwesomeIcon>
                    </div>

                </div>
                <hr />
                <div className="courses">
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}
                        ></SingleCourse>)
                    }
                </div>

            </div>
            <Outlet />
        </div>
    );
};

export default Courses;