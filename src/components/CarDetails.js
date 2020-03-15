import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const CarDetails = ({ car }) => {
    const { removeCar } = useContext(CarContext)
    return (
        <li>
            <div className="placa">Placa: { car.placa }</div>
            <div className="marca">Marca: { car.marca }</div>
            <div className="modelo">Modelo: { car.modelo }</div>
            <div className="ano">Ano: { car.ano }</div>
            <div className="quilometragem">Quilometragem: { car.quilometragem } KM</div>
            <div className="deletar-veiculo" onClick={() => removeCar(car.id)}>X</div>
        </li>
    );
}

export default CarDetails