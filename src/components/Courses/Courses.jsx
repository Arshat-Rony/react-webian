import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'
const buttons = [
    { id: 1, text: "All Courses" },
    { id: 2, text: "Books" },
    { id: 3, text: "Free Courses" },
    { id: 4, text: "Premium Courses" }
]

const Courses = () => {
    const [courses, setCourses] = useCourses()
    return (
        <div className='courses-section'>
            <div className="course-menu">
                {
                    buttons.map(item => <Link to={`/courses/${item.text}`} key={item.id} className='text-decoration-none'>
                        <button>All Courses</button>
                    </Link>)
                }
            </div>
            <div className="courses-page">
                <h1 className='course-heading text-center text-md-start'>All Courses</h1>
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
        </div>
    );
};

export default Courses;