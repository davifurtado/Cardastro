import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarDetails from '../components/CarDetails';

const CarList = () => {
    const { cars } = useContext(CarContext);
    return cars.length ? (
        <div className="car-list">
            <ul>
                { cars.map(car => {
                    return ( <CarDetails car={car} key={car.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            Nenhum veículo encontrado
        </div>
    )
}

export default CarList