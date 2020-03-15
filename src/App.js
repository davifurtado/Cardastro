import React from 'react';
import CarContextProvider from './contexts/CarContext';
import Navbar from './components/Navbar';
import CarList from './components/CarList';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <Navbar />
        <CarList />
      </CarContextProvider>
    </div>
  );
}

export default App;
