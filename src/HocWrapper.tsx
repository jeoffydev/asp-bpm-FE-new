
import  { ReactNode, FC } from 'react';
import './index.css';
 
import { store } from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'; 
type Props = { children: ReactNode }

const HocWrapper: FC<Props> = (props) => {
    return (
        <Provider store={store}>
        <BrowserRouter>
                { props.children }
          </BrowserRouter>
      </Provider>
    )
};

export default HocWrapper;
