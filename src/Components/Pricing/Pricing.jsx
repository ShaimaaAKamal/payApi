import React from 'react';
import PricePlan from './PricePlan/PricePlan';
import ReadyToStart from '../ReadyToStart/ReadyToStart';

export default function Pricing() {
  const plansTitles=['Free Plan','Basic Plan','Premium Plan'];
  const planDecriptions=[`Build and test using our core set of products with up to 100 API requests`,
                          `Launch your project with unlimited requests and no contractual minimums`,
                          `Get tailored solutions, volume pricing, and dedicated support for your team`];
  const planPrices=['$0.00','$249.00','$499.00'];
  const plansOptions=[
    [false,false,false,false],[true,true,false,false],[true,true,true,true]
  ]
  const planOptionsTitles=['Investments','Assets','Liabilities','Income']
  return (
    <>
    <div className='pricing'>
       <div className="container-md">
                    <h1 className='display-5 fmHeading text-center text-lg-start textSanBlue'>Pricing</h1>
       </div>
    </div>
    <div className='plans'>
        <div className="container-md">
          <div className="row g-5">
          {
            plansTitles.map((planTitle,index)=>   <div key={index} className="col-md-4">
              <PricePlan title={planTitle} price={planPrices[index]} planOptions={plansOptions[index]} planOptionsTitles={planOptionsTitles}>
                 {planDecriptions[index]}
              </PricePlan>
          </div>)
          }
          </div>
        </div>
    </div>
    <ReadyToStart/>
    </>
  )
}
