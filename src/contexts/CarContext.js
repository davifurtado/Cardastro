import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const CarContext = createContext();

const CarContextProvider = (props) => {
    const [cars, setCars] = useState([
        { placa: '123ABC', marca: 'Ford', modelo: 'Ka', ano: '2010', quilometragem: '2000 KM' },
        { placa: 'abc123', marca: 'Volks', modelo: 'Ka', ano: '2010', quilometragem: '2000 KM' },
        { placa: '12ab3c', marca: 'Chevrolet', modelo: 'Celta', ano: '2010', quilometragem: '2000 KM' }
    ]);
    const addCar = (placa, marca, modelo, ano, quilometragem) => {
        // a função uuid serve para criar um id único aleatório
        setCars([...cars, {placa, marca, modelo, ano, quilometragem, id: uuid() }])
    }
    const removeCar = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }
    return (
        <CarContext.Provider value={{cars, addCar, removeCar}}>
            { props.children }
        </CarContext.Provider>
    );
}

export default CarContextProvider