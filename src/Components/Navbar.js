import './Navbar.css';
import React, {useState}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Navbar(){
    const[showMenu, setShowMenu]=useState(false);

    const ShowMenuButtonClick = () => {
        setShowMenu(!showMenu)
    }
    return(
        <div className="navbar">
            <div className='header-icon'>
                <div className="Heading">
                    <div className='Grocery'>
                        <h1> Eddah's Grocery </h1>
                    </div>
                </div>

                <div className="Icon">
                    <FontAwesomeIcon icon={faBars} onClick={ShowMenuButtonClick}/>
                </div>
            </div>
            <div className="main-nav">
                <Link to='/Home' >Home</Link>
                <Link to='/Signup'>Signup</Link>
                <Link to='/Signin'>Signin</Link>
                <Link to='/Shop' >Shop</Link>
                <Link to='/Services' >Services</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
            {showMenu && (
                <div className="mobile-nav">
                 <Link to='/Home'>Home</Link>
                <Link to='/Signup'>Signup</Link>
                 <Link to='/Signin'>Signin</Link>
                <Link to='/Shop'>Shop</Link>
                <Link to='/Services'>Services</Link>
                <Link to='/Contact'>Contact</Link>
                </div>
            )}
        </div>

    );

}
export default Navbar