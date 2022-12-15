import React from 'react';
import image from '../../assets/download-1.jpg'

export default function NotFound() {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
        <img src={image} alt="not found image" className='w-75' />
    </div>
  )
}
