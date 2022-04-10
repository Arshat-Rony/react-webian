import React, { useEffect, useState } from 'react';
import Singleservice from '../Singleservie/Singleservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLanguage, faCircle, faAslInterpreting, faGears, faProjectDiagram, faParachuteBox, faUsers, faDownload } from '@fortawesome/free-solid-svg-icons';
import './About.css'
const icons = [faBook, faLanguage, faCircle, faAslInterpreting, faGears, faProjectDiagram, faParachuteBox, faUsers, faDownload]

const About = () => {
    const [abouts, setAbout] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div className='about'>
            {
                abouts.map((about, index) => <Singleservice key={about.id}
                    about={about}
                    icons={icons}
                    number={index}>

                </Singleservice>)
            }
        </div>
    );
};

export default About;