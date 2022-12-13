import React from 'react';
import { Link } from 'react-router-dom';
import phoneHeading from '../../../assets/home/desktop/illustration-phone-mockup.svg';

export default function HomeHeading() {
  return (
     <section className='home'>
          <div className='container-md pb-5'>
            <section className="row gy-0">
                    <div className="col-lg-6 imageHomeHeading">
                        <div className='text-center ps-5 ps-md-0'>
                            <img src={phoneHeading} alt="phone Image" className='imageHomeWidth' />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className='text-center text-lg-start'>
                        <h1 className='display-4 fw-semibold mb-4 pb-1 textSanBlue fmHeading'>Start building with our APIs for absolutely free.</h1>
                        <div className="input-group mb-3 position-relative w-90 mx-auto ms-lg-0">
                            <input type="email" id='emailInput'className="form-control shadow form-control-lg rounded-pill" placeholder="Enter Email Address" aria-label="Email" aria-describedby="enterEmailBtn"/>
                            <button className="input-group-text mainBtn px-4 small" id="enterEmailBtn">Schedule a Demo</button>
                        </div>
                        <p className='textLightBlue ps-4'>
                            <span className='small'>Have any Questions</span>
                            <Link className="text-reset text-decoration-none ms-1 fw-bold" to='/contact'>Contact us</Link>
                        </p>
                        </div>
                    </div>
                </section>
       </div> 
     </section>
  )
}
