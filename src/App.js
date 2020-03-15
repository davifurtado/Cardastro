import React from 'react';
import CarContextProvider from './contexts/CarContext';
import AuthContextProvider from './contexts/AuthContext';
import RootContainer from './containers/RootContainer';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CarContextProvider>
          <RootContainer />
        </CarContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
