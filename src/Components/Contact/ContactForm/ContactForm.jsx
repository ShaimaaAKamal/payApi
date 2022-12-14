import React from 'react'

export default function ContactForm() {
  return (
    <div className='contact mt-lg-5'>
        <div className="mb-3">
            <input type="text" className="form-control" id="name" placeholder="Name"/>
        </div>
         <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email Address"/>
        </div>
        <div >
            <input type="text" className="form-control" id="companyName" placeholder="Company Name"/>
        </div>
        <div className="mb-4">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Message" id="message" style={{height:'130px'}}>Message</textarea>
          </div>
        </div>
         <div className="form-check pt-2 mb-4">
              <input className="form-check-input" type="checkbox" value="updated" id="update"/>
              <label className="form-check-label textLightBlue small px-3 w-85" for="update">
                Stay up-to-date with company announcements and updates to our API
              </label>
        </div>
         <div>
              <button className='secondaryDarkBtn bg-transparent px-5'>Submit</button>
         </div>
    </div>
  )
}
