import React from 'react';
import AboutLarge from '../../assets/about/desktop/image-team-members.jpg';
import AboutMedium from '../../assets/about/tablet/image-team-members.jpg';
import AboutSmall from '../../assets/about/mobile/image-team-members.jpg';
import ReadyToStart from '../ReadyToStart/ReadyToStart'


export default function About() {
  return (
    <>
    <div className='about'>
        <div className="container-md">
           <div className="aboutHeading">
             <div>
                <h1 className='fmHeading textSanBlue text-center text-lg-start display-5 mb-5'>We empower innovators<br/>
                    by delivering access to the<br/>financial system</h1>
            </div>
            <div className="row gx-0 mb-4">
               <div className="col-md-3">
                    <div>
                          <h4 className='text-center text-md-start mb-3 mb-md-0 fmHeading textSanBlue'>Our Vision</h4>
                    </div>
               </div>
                <div className="col-md-9">
                  <div>
                        <p className='small textLightBlue text-center text-md-start'>
                          Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.
                        </p>
                  </div>
               </div>
            </div>
              <div className="row gx-0">
               <div className="col-md-3">
                    <div>
                          <h4 className=' fmHeading text-center text-md-start mb-3 mb-md-0 textSanBlue'>Our Business</h4>
                    </div>
               </div>
                <div className="col-md-9">
                  <div>
                        <p className='small textLightBlue text-center text-md-start'>
                          At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. 
                        </p>
                  </div>
               </div>
            </div>
           </div>
        </div>
    </div>
    <div className='py-5'>
      <img src={AboutLarge} alt="large about image" className='w-100 d-none d-lg-inline-block'/>
      <img src={AboutMedium} alt="medium about image" className='w-100 d-none d-md-inline-block d-lg-none'/>
      <img src={AboutSmall} alt="small about image" className='w-100  d-md-none'/>
    </div>
    <div className="container-md mb-5">
      <div className="row gy-2">
         <div className="col-md-4">
            <div className=' aboutBorder topaboutBorder pt-3 pb-2 text-center text-md-start'>
                <span className='textLightBlue small mb-2 d-inline-block'>Team Members</span>
                <h6 className='display-3 textSite fmHeading mb-0 pb-0'>300+</h6>
            </div>
         </div>
          <div className="col-md-4">
            <div className=' aboutBorder pt-3 pb-2 text-center text-md-start'>
                <span className='textLightBlue small mb-2 d-inline-block'>Offices in the US</span>
                <h6 className='display-3 textSite fmHeading mb-0 pb-0'>3</h6>
            </div>
         </div>
          <div className="col-md-4">
              <div className=' aboutBorder smallaboutBorder pt-3 pb-2 text-center text-md-start'>
                <span className='textLightBlue small mb-2 d-inline-block'>Transactions analyzed</span>
                <h6 className='display-3 textSite fmHeading mb-0 pb-0'>10M+</h6>
            </div>
         </div>
      </div>
    </div>
    <div className="container-md">
           <div className="aboutHeading">
            <div className="row gx-0 mb-4">
               <div className="col-md-3">
                    <div>
                          <h4 className='text-center text-md-start mb-3 mb-md-0 fmHeading textSanBlue'>The Culture</h4>
                    </div>
               </div>
                <div className="col-md-9">
                  <div>
                        <p className='small textLightBlue text-center text-md-start'>
                          We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
                        </p>
                  </div>
               </div>
            </div>
              <div className="row gx-0">
               <div className="col-md-3">
                    <div>
                          <h4 className=' fmHeading text-center text-md-start mb-3 mb-md-0 textSanBlue'>The People</h4>
                    </div>
               </div>
                <div className="col-md-9">
                  <div>
                        <p className='small textLightBlue text-center text-md-start'>
                          We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
                        </p>
                  </div>
               </div>
            </div>
           </div>
    </div>
    <ReadyToStart/>
    </>
  )
}
