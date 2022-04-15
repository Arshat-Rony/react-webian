import React from 'react';
import './Singlebootcamp.css'

const Singlebootcamp = ({ bootcamp }) => {
    const { picture, heading, price } = bootcamp;
    return (
        <div style={{ width: "25rem" }} className='singlebootcamp card mx-auto mt-5'>
            <img src={picture} alt="" />
            <h3 className='mt-4'>{heading}</h3>
            <p> <strong>Price</strong> : {price} BDT</p>
        </div>
    );
};

export default Singlebootcamp;