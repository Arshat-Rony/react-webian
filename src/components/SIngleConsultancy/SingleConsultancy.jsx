import React from 'react';
import './SingleConsultancy.css'


const SingleConsultancy = ({ item, images, number }) => {
    const { heading, minHeading } = item;


    return (
        <div className='singleConsultancy flex-column flex-md-row mt-5 pt-5'>
            <div className={`image order-1 text-start ${number === 0 || number === 2 ? "order-md-2 text-end" : "order-md-1 text-start"}`}>
                <img src={images[number]} alt="" />
            </div>
            <div className={`detail text-start pe-5 order-2 ${number === 0 || number === 2 ? "order-md-1" : "order-md-2"}`} >
                <p className='text-muted'>{minHeading}</p>
                <h1 className='heading-consultacny'>{heading}</h1>
                <p className='mt-5'>Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution. The problem-solving process. Problem solving resources.</p>
            </div>
        </div>
    );
};

export default SingleConsultancy;