
import './App.css';
import RouteHolder from './RouterHolder';
import ErrorBoundary from './utils/utils';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});

function App() {
 
  return (
   <>
    <ThemeProvider theme={theme}>
        <ErrorBoundary>
            <RouteHolder />
        </ErrorBoundary>
    </ThemeProvider>
   </>
  );
}

export default App;
