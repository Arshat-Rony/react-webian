import React, { useEffect, useState } from 'react';
import Singlebootcamp from '../Signlebootcamp/Singlebootcamp';
import './Bootcamp.css'
import img from '../../images/hero-boot.png'
const Bootcamps = () => {
    const [bootcamps, setBootcamps] = useState([])

    useEffect(() => {
        fetch("bootcamps.json")
            .then(res => res.json())
            .then(data => setBootcamps(data))
    }, [])
    return (
        <div className='bootcamps-container'>
            <div className="bootcamps-hero mb-5">

            </div>
            <div className="bootcamp-discussion  d-flex justify-content-between align-items-center flex-column flex-md-row mt-5 pt-5">
                <div className="bootcamp-discussion-image ">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="bootcamp-discussion-text text-start p-5">
                    <p className='about-heading-light pb-0 mb-0 mt-5'>Everybody is specail but proper guidance make Oneself more special</p>
                    <h1 className='mb-5 heading'> Our Bootcamps</h1>
                    <p>we have designed our bootcamps for longtime by thinking about our students so that they can participate in international forum and smart code contest.. A boot camp workout also can include functional fitness, such as using whole-body, multijoint exercises that simulate movements people do in life.</p>
                </div>
            </div>
            <div className="bootcamps-text pt-5">
                <p className='about-heading-light pb-0 mb-0 mt-5'>Discussion Always Extends Knowledge</p>
                <h1 className=' mb-5 heading-consultacny'>Join Our Lifetime Bootcamps</h1>
            </div>

            <div className="bootcamps mx-auto mb-5">
                {
                    bootcamps.map(bootcamp => <Singlebootcamp
                        key={bootcamp.id}
                        bootcamp={bootcamp}
                    ></Singlebootcamp>)
                }
            </div>
        </div>
    );
};

export default Bootcamps;