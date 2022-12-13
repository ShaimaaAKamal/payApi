import React from 'react';
import Image from '../../../assets/home/desktop/illustration-simple-ui.svg';


export default function SimpleUi() {
  return (
      <section className='simpleUi'>
        <div className='container-md '>
            <section className="row gy-0">
                <div className="col-lg-6 workOrder">
                    <div className='text-center ps-4 ms-2 ms-lg-0 ps-lg-0'>
                        <img src={Image} alt="simple ui images Image" className='w-100'/>
                    </div>
                </div>
                <div className="col-lg-6 align-self-lg-center implementInfo ">
                    <div className='text-center px-xl-5 text-lg-start mb-lg-5'>
                        <h2 className='display-4 fmHeading textSanBlue'>Simple UI & UX</h2>
                        <p className='small textDark px-5 ps-lg-0 mb-0'>
                            Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. 
                        </p>
                    </div>
                </div>
            </section>
        </div>
      </section>
  )
}
