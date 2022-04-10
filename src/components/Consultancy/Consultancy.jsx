import React from 'react';
import SingleConsultancy from '../SIngleConsultancy/SingleConsultancy';
import "./Consultancy.css"
import pic1 from "../../images/consultancy/Untitled (1).png"
import pic2 from "../../images/consultancy/Untitled (2).png"
import pic3 from "../../images/consultancy/Untitled (3).png"
const image = [pic1, pic2, pic3]

const data = [
    { id: "1", heading: "Submit Your Problem", minHeading: "Feel Free To Express Your Problem", },
    { id: "2", heading: "Work On Problem", minHeading: "Sharing reduces 50% of the Problem", },
    { id: "3", heading: "One to One Consultancy", minHeading: "Direct join to solve your problem", }]
const Consultancy = () => {
    return (
        <div className='consultancy'>
            <div className="consultancy-detail">
                {
                    data.map((item, index) => <SingleConsultancy
                        key={item.id}
                        item={item}
                        number={index}
                        images={image}></SingleConsultancy>)
                }
            </div>
        </div>
    );
};

export default Consultancy;