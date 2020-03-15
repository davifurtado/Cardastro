import React from 'react';
import CarContextProvider from './contexts/CarContext';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import CarForm from './components/CarForm';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <Navbar />
        <CarList />
        <CarForm />
      </CarContextProvider>
    </div>
  );
}

export default App;
