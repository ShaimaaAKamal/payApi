import React from 'react'

export default function ReadyToStart() {
  return (
    <section className='container-md  py-5 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between '>
        <h2 className='display-6 fmHeading textSanBlue mb-4 mb-lg-0'>Ready to start?</h2>
        <div className="input-group position-relative readyToStartWidth">
            <input type="email" id='emailInput'className="form-control shadow form-control-lg rounded-pill" placeholder="Enter Email Address" aria-label="Email" aria-describedby="enterEmailBtn"/>
            <button className="input-group-text mainBtn px-4 small" id="enterEmailBtn">Schedule a Demo</button>
        </div>
    </section>
  )
}
