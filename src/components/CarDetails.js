import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const CarDetails = ({ car }) => {
    const { removeCar } = useContext(CarContext)
    return (
        <li>
            <div className="placa">{ car.placa }</div>
            <div className="marca">{ car.marca }</div>
            <div className="modelo">{ car.modelo }</div>
            <div className="ano">{ car.ano }</div>
            <div className="quilometragem">{ car.quilometragem }</div>
            <div onClick={() => removeCar(car.id)}>X</div>
        </li>
    );
}

export default CarDetails