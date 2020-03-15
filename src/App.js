import React from 'react';
import CarContextProvider from './contexts/CarContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <Navbar />
      </CarContextProvider>
    </div>
  );
}

export default App;
