import React from 'react';
import "./SingleCourse.css"

const SingleCourse = ({ course }) => {
    const { picture, rating, name } = course;
    return (
        <div className='card' style={{ width: "250px", margin: "20px auto" }}>
            <img style={{ "min-height": "300px" }} src={picture} alt="" />
            <h4 className='mt-3'>{name}</h4>
            <p>Rating :{rating}</p>
        </div>
    );
};

export default SingleCourse;