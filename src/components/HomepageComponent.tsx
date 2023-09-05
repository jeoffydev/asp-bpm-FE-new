import React from 'react'; 
import HeaderComponent from './header/HeaderComponent';
import BodyContentComponent from './body/BodyContentComponent';
import FooterComponent from './footer/FooterComponent';
 

function HomepageComponent() {
  return (
   <>
    <HeaderComponent />
    <BodyContentComponent />
    <FooterComponent />
   </>
  );
}

export default HomepageComponent;
