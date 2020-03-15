import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const Navbar = () => {
    const { cars } = useContext(CarContext);
    return (
        <div className="navbar">
            <h1>Lista de veículos</h1>
            <p>Atualmente você tem { cars.length } veículos cadastrados </p>
        </div>
    );
}

export default Navbar