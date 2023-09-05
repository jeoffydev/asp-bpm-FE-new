import React from 'react'; 
import BodyContentComponent from './body/BodyContentComponent';
import ThemePageComponent from './ThemePageComponent';
 

function HomepageComponent() {
  return (
   <>
    <ThemePageComponent>
      <BodyContentComponent />
    </ThemePageComponent>
   </>
  );
}

export default HomepageComponent;
