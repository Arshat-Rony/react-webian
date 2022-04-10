import React from 'react';
import './SingleConsultancy.css'

const SingleConsultancy = ({ item, images, number }) => {
    const { heading, minHeading } = item;


    return (
        <div className='singleConsultancy'>
            <div className='image'>
                <img src={images[number]} alt="" />
            </div>
            <div className="detail">
                <p className='text-muted'>{minHeading}</p>
                <h1 className='heading heading-about'>{heading}</h1>
                <p className='mt-5'>Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution. The problem-solving process. Problem solving resources.</p>
            </div>
        </div>
    );
};

export default SingleConsultancy;