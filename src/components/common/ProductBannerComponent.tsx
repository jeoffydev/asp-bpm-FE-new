import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';
 
type Props = { 
    marginTop?: string
}

const CardMediaImg = styled(Card)(() => ({
   borderRadius: '1.25rem',
   border: `1px solid ${themeColours.black}`

}));

const ProductBannerComponent = (props: Props)  => {
    const { marginTop } = props;
  return (
    <>
     <CardMediaImg sx={{ maxWidth: 420, marginTop: marginTop ?? '' }}>
      <CardMedia
        sx={{ height: 388 }}
        image={require('../../assets/images/product-img.png')}
      />
      </CardMediaImg>
    </>
  );
}

export default ProductBannerComponent;
