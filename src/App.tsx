
import './App.css';
import RouteHolder from './RouterHolder';
import ErrorBoundary from './utils/utils';

function App() {

 
  return (
   <>
      <ErrorBoundary>
          <RouteHolder />
      </ErrorBoundary>
    
   </>
  );
}

export default App;
