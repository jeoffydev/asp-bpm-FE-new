import { styled } from '@mui/material/styles';

const FooterPara = styled('p')({ 
    textAlign: 'center',
    fontSize: '0.8rem'
  });  


function OwnerFooterComponent() {
   
    let d = new Date();
  return (
   <>
      <FooterPara>{`All Rights Reserved ${d.getFullYear()}`}</FooterPara>
   </>
  );
}

export default OwnerFooterComponent;
