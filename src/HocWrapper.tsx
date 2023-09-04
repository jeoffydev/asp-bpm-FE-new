
import  { ReactNode, FC } from 'react';
import './index.css';
 
import { store } from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'; 
import { Internationalization } from './utils/Internationalization';
type Props = { children: ReactNode }

const HocWrapper: FC<Props> = (props) => {
    return (
        <Provider store={store}>
            <Internationalization>
                <BrowserRouter>
                        { props.children }
                </BrowserRouter>
            </Internationalization>
      </Provider>
    )
};

export default HocWrapper;
