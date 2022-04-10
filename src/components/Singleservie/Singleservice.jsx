import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLanguage, faCircle, faAslInterpreting, faGears, faProjectDiagram, faParachuteBox, faUsers, faDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./Singleservice.css"

const Singleservice = ({ about, icons, number }) => {
    const { heading, desc } = about;
    return (
        <div className='singleservices'>
            <FontAwesomeIcon icon={icons[number]}></FontAwesomeIcon>
            <h3 className='my-5'>{heading}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Singleservice;