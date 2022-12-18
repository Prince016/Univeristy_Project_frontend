import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import nculogo from './images/NCUlogo.jpg'
import { NavLink } from "react-router-dom";
import './css/navbar.css'


const Navbar = () => {
  return (
    <>
      <nav className='nav bg-color' >
        <div className="left-nav">
          <NavLink className="left-navlink" to="#" >

            <img src={nculogo} alt="ncu-logo"  />
            <h3 className='website-name' > Shiksha Mirtra</h3>
          </NavLink>

        </div>

        <div className="mid-nav">
          <ul className='nav-ul' >
            <li className='nav-li' > <NavLink className="nav-links" aria-current="page" to="/" > Home </NavLink> </li>
          </ul>
          <ul className='nav-ul' >
            <li className='nav-li' > <NavLink className="nav-links" aria-current="page" to="#About" > About </NavLink> </li>
          </ul>
          <ul className='nav-ul' >
            <li className='nav-li' > <NavLink className="nav-links" aria-current="page" to="#" > Login </NavLink> </li>
          </ul>
          <ul className='nav-ul' >
            <li className='nav-li' > <NavLink className="nav-links" aria-current="page" to="#" > SignUp </NavLink> </li>
          </ul>

        </div>
        <div className="right-nav">
        <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success btn-bg" type="submit">
                Search
              </button>
            </form>
        </div>


      </nav>




    </>
  )
}

export default Navbar;