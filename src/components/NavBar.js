import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
    const { cars } = useContext(CarContext);
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <button onClick={logout} className="sair">Sair</button>
            <h1>Bem vindo, { user[0].user}</h1>
            <h2>Consulta de veículos</h2>
            <p>Atualmente você tem { cars.length } veículos cadastrados </p>
        </div>
    );
}

export default NavBar