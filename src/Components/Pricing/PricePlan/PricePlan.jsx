import React from 'react'

export default function PricePlan({title,price,planOptionsTitles,planOptions,children}) {
  return (
    <div className='text-center text-lg-start position-relative'>
      <h2 className='h3 fmHeading textSite mb-3'>{title}</h2>
      <p className='mb-4 textLightBlue small d-none d-md-block pe-3 pe-md-0 pe-lg-3'>{children}</p>
      <h4 className='display-5 fmHeading textSanBlue fw-normal borderBottom pb-3'>{price}</h4>
      <div className='d-flex align-items-center py-2 option'>
        <i className="fa-solid fa-check textSite me-3"></i>
        <span className='textSanBlue'>Transactions</span>
      </div>
       <div className='d-flex align-items-center py-2 option'>
        <i className="fa-solid fa-check textSite me-3"></i>
        <span className='textSanBlue'>Auth</span>
      </div>
      <div className='d-flex align-items-center py-2  option'>
        <i className="fa-solid fa-check textSite me-3"></i>
        <span className='textSanBlue'>Identity</span>
      </div>
      {
        planOptionsTitles.map((optionTitle,index) => <div key={indexh} className={`d-flex option  align-items-center pt-2 ${index === 3 ? 'pb-4':'pb-2'}`}>
        <i className={`fa-solid fa-check  me-3 ${planOptions[index]? 'textSite':'textTransparent'}`}></i>
        <span className={`${planOptions[index]? 'textSanBlue':'optionInactive'}`}>{optionTitle}</span>
      </div>)
      } 
      <div className='borderTop pt-4'>
         <button className='secondaryDarkBtn bg-transparent'>Request Access</button>
      </div>
    </div>
  )
}
