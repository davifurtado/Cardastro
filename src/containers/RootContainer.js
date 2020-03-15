import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserForm from '../components/UserForm';
import CarList from '../components/CarList';
import NavBar from '../components/NavBar';
import CarForm from '../components/CarForm';

const RootContainer = () => {
    const { user } = useContext(AuthContext);
    return user.length ? (
        <div>
            <NavBar />
            <CarList />
            <CarForm />
        </div>
    ) : (
        <div className="root-container">
            <h1>Faça Login para prosseguir</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer