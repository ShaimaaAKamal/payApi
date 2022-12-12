import React from 'react';
import EasyImplement from './EasyImplement/EasyImplement';
import HomeHeading from './HomeHeading/HomeHeading';
import SimpleUi from './SimpleUi/SimpleUi';
import WhoWork from './WhoWork/WhoWork';

export default function Home() {
  return (
    <>
      <HomeHeading/>
      <WhoWork/>
      <EasyImplement/>
      <SimpleUi/>
    </>
  )
}
