import React from 'react'

export default function About() {
  return (
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
  )
}
