import React from 'react';
import EasyImplement from './EasyImplement/EasyImplement';
import HomeHeading from './HomeHeading/HomeHeading';
import SimpleUi from './SimpleUi/SimpleUi';
import WhoWork from './WhoWork/WhoWork';
import HomeCard from './HomeCard/HomeCard';
import financeImage from '../../assets/home/desktop/icon-personal-finances.svg';
import paymentImage from '../../assets/home/desktop/icon-consumer-payments.svg';
import coverageImage from '../../assets/home/desktop/icon-banking-and-coverage.svg';


export default function Home() {
  const titles=['Personal Finances','Banking & Coverage','Consumer Payments'];
  const descriptions=[
  `Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.`
    ,`With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.`
    ,`It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.`
  ]
  const Images=[financeImage,coverageImage,paymentImage]
  return (
    <>
      <HomeHeading/>
      <WhoWork/>
      <EasyImplement/>
      <SimpleUi/>
      <div className="container-md py-5">
         <div className="row gy-5">
          {
            titles.map((title,index)=>    <div className="col-md-4" key={index}>
                <HomeCard image={Images[index]} title={title}>
                  {descriptions[index]}
                </HomeCard>
            </div> )
          }
         
            {/* <div className="col-md-4">
                <HomeCard image={coverageImage} title='Banking & Coverage'>
                  With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                </HomeCard>
            </div>
            <div className="col-md-4">
                <HomeCard image={paymentImage} title='Consumer Payments'>
                  It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
                </HomeCard>
            </div> */}
         </div>
      </div>
    </>
  )
}
