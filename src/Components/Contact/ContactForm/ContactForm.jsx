import React, { useEffect, useRef, useState } from 'react'

export default function ContactForm() {
 const name=useRef();
 const email=useRef();
 const company=useRef();
 const title=useRef();
 const message=useRef();
 const check=useRef();
 const success=useRef();
 let [btnDisplayed,setBtn]=useState(false);

 const formValidate=()=>{
        const formElements=[name.current,email.current,company.current];
        const valid = formElements.every(element => element.value !== '');
        if(valid)  setBtn(valid);
 }
 const display=(e)=>{
     if (!e.value) {
            e.classList.add('contactError');
            e.nextElementSibling.classList.remove('d-none');
          }
          else{
            e.classList.remove('contactError');
            e.nextElementSibling.classList.add('d-none');
          }
 }
  const setMessage=(e)=>{
     e.value = 'Message';
     e.style.color='#6c8294';
  }
 const handleChange=(e)=>{
          success.current.classList.add('d-none')
          display(e.target);
          formValidate();
 }
  const handleSubmit=(e)=>{
      e.preventDefault();
      const formElements=[name.current,email.current,company.current];
      formElements.forEach(e => {
        display(e);
      })
      if(btnDisplayed) {
        const allElements=[name.current,email.current,company.current,title.current,message.current,check.current];
        allElements.forEach(e => {
          (e.name !== 'update') ? e.value='' : e.checked=false;
      })
      setMessage(message.current);
      success.current.classList.remove('d-none');
      setBtn(false);
      }
  }
 
  const handleMessage=()=>{
    message.current.addEventListener('focus',function(e){
      if(e.target.value === 'Message') e.target.value='';
    });
    message.current.addEventListener('blur',function(e){
      if(e.target.value !== 'Message' && e.target.value !== '') e.target.style.color='#36536b';
    });
     message.current.addEventListener('keyup',function(e){
      if(e.target.value == '')  setMessage(e.target);
    });
  }

useEffect(()=>{
  handleMessage();
},[])

  
  return (
    <form className='contact mt-lg-5' onSubmit={handleSubmit}>
       <div className='alert alert-success text-center d-none' ref={success}>Message has been sent.</div>
        <div className="mb-3">
            <input type="text" className="form-control ps-3" name="name" placeholder="Name" ref={name} onChange={handleChange}/>
            <p className='small textLightSite ps-3 mb-0 mt-1 d-none'>Can't be Empty</p>
        </div>
         <div className="mb-3">
            <input type="email" className="form-control ps-3" name="email" placeholder="Email Address" ref={email} onChange={handleChange}/>
            <p className='small textLightSite ps-3 mb-0 mt-1 d-none'>Can't be Empty</p>
        </div>
        <div className='mb-3' >
            <input type="text" className="form-control ps-3" name="companyName" placeholder="Company Name" ref={company} onChange={handleChange}/>
            <p className='small textLightSite ps-3 mb-0 mt-1 d-none'>Can't be Empty</p>
        </div>
         <div >
            <input type="text" className="form-control ps-3" name="title" placeholder="Title" ref={title}/>
        </div>
        <div className="mb-4">
          <div className="form-floating">
            <textarea className="form-control ps-3" placeholder="Message" id='message' name="message" ref={message} defaultValue='Message' style={{height:'130px'}}></textarea>
          </div>
        </div>
         <div className="form-check pt-2 mb-4">
              <input className="form-check-input" ref={check} type="checkbox" value="updated" name="update"/>
              <label className="form-check-label textLightBlue small px-3 w-85" htmlFor="update">
                Stay up-to-date with company announcements and updates to our API
              </label>
        </div>
         <div>
              <button type='submit' disabled={!btnDisplayed} className='secondaryDarkBtn bg-transparent px-5'>Submit</button>
         </div>
    </form>
  )
}
