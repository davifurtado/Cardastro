import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const CarContext = createContext();

const CarContextProvider = (props) => {
    const localData = localStorage.getItem('cars')
    const [cars, setCars] = useState(
        localData ? JSON.parse(localData) : []
    );
    useEffect(() => {
        localStorage.setItem('cars', JSON.stringify(cars))
    }, [cars])
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