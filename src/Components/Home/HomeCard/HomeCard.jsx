import React from 'react';

export default function HomeCard({image,title,children}) {
  return (
    <div className='text-center'>
       <div className='mb-4'>
         <img src={image} alt={title} />
       </div>
        <h6 className='textSansBlue'>{title}</h6>
        <p className='mb-0 px-5 px-md-2 px-5 small textLightBlue'>{children}</p>
    </div>
  )
}
