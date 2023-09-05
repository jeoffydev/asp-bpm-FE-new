import  { ReactNode, FC } from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
 
type Props = { 
    children?: ReactNode,
}

const  ThemePageComponent: FC<Props> = (props)  => {
    const { children } = props;
  return (
   <>
    <HeaderComponent />
        {children}
    <FooterComponent />
   </>
  );
}

export default ThemePageComponent;
