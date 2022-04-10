import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import img from "../../images/Blue_Globe_Technology_Logo__220___140_px___400___350_px_-removebg-preview.png"
import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    const location = useLocation()
    return (
        <div className='header'>
            <nav>


                <img src={img} alt="" />

                <div className="menu">
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li> <CustomLink to='/bootcamps'>Bootcamps</CustomLink></li>
                    <li>  <CustomLink to='/consultancy'>Consultancy</CustomLink></li>
                    <li><CustomLink to='/courses'>Courses</CustomLink></li>

                    <li>
                        {

                            location.pathname === '/courses' && <div className="search-box">
                                <input type="search" className='ps-3' name="search" id="search" placeholder='Search' />
                                <FontAwesomeIcon className='icon' icon={faSearch}></FontAwesomeIcon>
                            </div>


                        }
                    </li>

                </div>



                <div className='log-in-sign-up'>
                    <p style={{ marginRight: "20px", fontWeight: "bolder" }}>{user ? user.displayName : "You"}</p>


                    {user
                        ?
                        <button style={{ color: "crimson" }} onClick={logOut} className='sign-in'>Sign Out</button>
                        :
                        <Link to='/contact'>
                            <button className='sign-in'>Sign in</button>
                        </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;