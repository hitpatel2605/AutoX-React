import React from 'react'
import "./navbar.css"
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <NavLink className="navbar-brand" to="/">Navbar</NavLink> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light mx-4" aria-current="page" to="/">Home</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link mx-4 text-light" to="/Service">Services</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link mx-4 text-light" to="/Contact">Contact Us</NavLink>
                        </li>
                        </ul>
                    <div className="profile">
                        <li>
                            <Link to="/Login"><i class="fa-regular fa-user"></i></Link>
                        </li>
                    </div>
             
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
