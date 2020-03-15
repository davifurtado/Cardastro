import React from 'react';
import CarContextProvider from './contexts/CarContext';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CarContextProvider>
          <Navbar />
          <CarList />
          <CarForm />
        </CarContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
