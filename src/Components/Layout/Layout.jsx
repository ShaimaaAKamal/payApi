import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  useEffect(()=>{
      
  },[])
  return (
      <div className="bigContainer">
          <Navbar/>
          <Outlet/>
          <Footer/>
    </div>
  )
}
