import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icons d-flex flex-column'>
                <SocialIcon url="https://twitter.com/jaketrent" />
                <SocialIcon className='mt-3' url="https://facebook.com/jaketrent" />
                <SocialIcon className='mt-3' url="https://instagram.com/jaketrent" />
                <SocialIcon className='mt-3' url="https://linkedin.com/jaketrent" />
            </div>
            <div className='mt-5'>
                <Link className='text-decoration-none me-3 text-black' to='/home'>Home</Link>
                <Link className='text-decoration-none me-3 text-black' to='/courses'>All Courses</Link>
            </div>
            <hr />
            {'u+00A9'} copyright restricted by Webian
        </div>
    );
};

export default Footer;