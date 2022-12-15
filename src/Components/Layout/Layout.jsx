import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location=useLocation();
  const path=location.pathname;
  useEffect(()=>{
      const collapse =document.querySelector('.collapse ');   
      const close=document.querySelector('#close');
      const menu=document.querySelector('#menu');  
      if(collapse.classList.contains('d-block')) {
          collapse.classList.add('d-none');
          close.classList.add('d-none');
          menu.classList.remove('d-none');
          collapse.classList.remove('d-block');
      }
  },[path])
  return (
      <div className="bigContainer">
          <Navbar/>
          <Outlet/>
          <Footer/>
    </div>
  )
}
