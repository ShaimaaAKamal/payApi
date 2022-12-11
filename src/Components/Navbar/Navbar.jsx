import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg'

export default function Navbar() {
  const handleOpenMenu=()=>{
    const menu=document.querySelector('#menu');
    const navbarCollapse=document.querySelector('.navbar-collapse');
    menu.classList.add('d-none');
    menu.nextElementSibling.classList.remove('d-none');
    menu.nextElementSibling.classList.add('adjustBtn');
    navbarCollapse.classList.add('adjustMenu');
  }
  const handleCloseMenu=(e)=>{
    const close=document.querySelector('#close');
    const navbarCollapse=document.querySelector('.navbar-collapse');
    close.classList.add('d-none');
    close.previousElementSibling.classList.remove('d-none');
    navbarCollapse.classList.remove('adjustMenu');
  }
  return (
   <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand me-4" to=""><img src={logo} alt="logo Image" className='w-100'/></NavLink>
        <button className="navbar-toggler" onClick={handleOpenMenu} id='menu' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="28" height="17" xmlns="http://www.w3.org/2000/svg">
              <g fill="#36536B" fillRule="evenodd">
              <path d="M0 0h28v3H0zM0 7h28v3H0zM0 14h28v3H0z"/></g>
            </svg>
        </button>
        <button className="navbar-toggler d-none d-md-none"  id ='close' onClick={handleCloseMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg width="22" height="23" xmlns="http://www.w3.org/2000/svg"  >
              <path d="M19.839.54L21.96 2.66 13.12 11.5l8.84 8.839-2.121 2.121-8.84-8.84-8.838 8.84L.04 20.34l8.838-8.84L.04 2.662 2.16.54 11 9.378 19.839.54z" fill="#FBFCFE" fillRule="evenodd"/>
            </svg>
        </button>
        <div className="collapse adjustMenu navbar-collapse text-center text-lg-start" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-md-auto me-lg-auto ms-lg-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/pricing">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <button className="mainBtn">Schedule a Demo</button>
        </div>
      </div>
</nav>
  )
}
