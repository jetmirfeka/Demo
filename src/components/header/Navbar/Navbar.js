import React,{useState} from 'react';
import './style.scss';
import logo from '../../../assets/images/logo.png';
import {Link} from 'gatsby';
import {navLink} from '../../../constants/nav-link'

const Navbar = () => {

    return (
        <div className="row navbar">
            <div className="col-md-5 p-0">
                <Link to="/">
                    <img className="p-2" src={logo} />
                </Link>
            </div>
            <div className="col-md-7 p-0 ">
                <ul className="nav nav-style">
                    {
                        navLink.map((res,index) =>{
                            return(
                                <li  key={index}>
                                    <Link
                                        activeClassName="active" 
                                        to={res.path}
                                        className="text-decoration-none" >
                                            {res.name}
                                    </Link>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
