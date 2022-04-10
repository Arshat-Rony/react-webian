import React from 'react';
import './Service.css'

const Service = ({ course, number, images }) => {
    const { service } = course;
    return (
        <div className='course-services'>
            <img src={images[number]} alt="" />
            <button className='course-btn'>{service}</button>
        </div>
    );
};

export default Service;