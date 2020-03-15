import React, { createContext, useState } from 'react';

export const CarContext = createContext();

const CarContextProvider = (props) => {
    const [cars, setCars] = useState([
        { placa: '123ABC', marca: 'Ford', modelo: 'Ka', ano: '2010', quilometragem: '2000 KM' },
        { placa: 'abc123', marca: 'Volks', modelo: 'Ka', ano: '2010', quilometragem: '2000 KM' },
        { placa: '12ab3c', marca: 'Chevrolet', modelo: 'Celta', ano: '2010', quilometragem: '2000 KM' }
    ]);
    return (
        <CarContext.Provider value={{cars}}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarContextProvider