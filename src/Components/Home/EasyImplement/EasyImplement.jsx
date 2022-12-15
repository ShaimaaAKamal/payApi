import React from 'react';
import EasyImplementImage from '../../../assets/home/desktop/illustration-easy-to-implement.svg';

export default function EasyImplement() {
  return (
        <div className='container-md py-5 pb-lg-0'>
            <section className="row gy-0">
                <div className="col-lg-6">
                    <div className='text-center ps-5 ps-lg-0'>
                        <img src={EasyImplementImage} alt="easy Implement Image" className='w-100'/>
                    </div>
                </div>
                <div className="col-lg-6 align-self-lg-center implementInfo">
                    <div className='text-center text-lg-start mb-lg-5'>
                        <h2 className='display-4 fmHeading textSanBlue'>Easy to implement</h2>
                        <p className='small textDark px-5 ps-lg-0 mb-0'>
                            Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                        </p>
                    </div>
                </div>
            </section>
        </div>
  )
}
