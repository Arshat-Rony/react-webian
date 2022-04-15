import React from 'react';
import './Home.css'
import img from "../../images/Image.png"

import Service from '../Service/Service';
import pic1 from "../../images/services/Untitled (1).png"
import pic2 from "../../images/services/Untitled 0.png"
import pic3 from "../../images/services/Untitled 3.png"
import pic4 from "../../images/services/Untitled 4.png"
import About from '../About/About';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';
import { Link, useNavigate } from 'react-router-dom';

const images = [pic1, pic2, pic3, pic4]

const data = [
    { id: 1, service: "Books & PDF" },
    { id: 4, service: "Offline Bootcamps" },
    { id: 2, service: " Free Courses" },
    { id: 3, service: "Premimum Courses" },
]
const Home = () => {
    let navigate = useNavigate()
    const handleCourseBtn = () => {
        navigate('/courses')
    }

    const [courses, setCourses] = useCourses('')
    const slicedCourses = courses.slice(0, 3)
    return (
        <div className='home'>
            <div className="home-video">
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Dxcc6ycZ73M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="home-courses d-flex justify-content-between align-items-center flex-column flex-md-row my-5">
                <div className="home-courses-detail mt-5 p-5 text-start ">
                    <p>We don't share the Courses, We share the ideas !!</p>
                    <h2 className='heading'>Resources are always free for Our students</h2>
                    <p>We provide a lot of free content .The term Course of Study refers to an integrated course prepared for academic studies. It is a series of courses that every student should complete before they progress to the next level of education.</p>
                    <button onClick={handleCourseBtn} className='courses-btn'>Explore courses</button>

                </div>
                <div className="home-courses-pic my-5 my-md-0">
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            <div className="services-section">
                <p className='about-heading-light pb-0 mb-0 mt-5'>Learning Is Essential for All</p>
                <h1 className='heading mb-5 heading-about'>Explore Webian Services</h1>
                <div className="services">
                    {
                        data.map((course, index) => <Service key={course.id} course={course} number={index} images={images}></Service>)
                    }
                </div>
            </div>
            <div className="abouts">
                <p className='about-heading-light pb-0 mb-0'>We Share our Knowledge not Content</p>
                <h1 className='heading mb-5 heading-about'>About Our Services</h1>
                <About />
            </div>
            <div className="course-section">
                <p className='about-heading-light pb-0 mb-0 mt-5'>Learning Is Essential for All</p>
                <h1 className='heading mb-5 heading-about'>Explore Webian Courses</h1>

                <div className="course-box">
                    {
                        slicedCourses.map(course => <SingleCourse key={course.id}
                            course={course}
                        ></SingleCourse>)
                    }
                </div>
                <Link to='/courses'>
                    <button className='courses-btn'>View all Courses</button>
                </Link>
            </div>
            <div className="featured pt-5">
                <h3 className='text-white'>Are You ready</h3>
                <button onClick={handleCourseBtn} className='courses-btn'>Get Started</button>
            </div>
        </div>
    );
};

export default Home;