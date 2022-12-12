import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
      <div className="bigContainer">
          <Navbar/>
          <div className="parent">
              <Outlet/>
          </div>
          <Footer/>
    </div>
  )
}
