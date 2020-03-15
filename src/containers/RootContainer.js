import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserForm from '../components/UserForm';
import Navbar from '../components/Navbar';
import CarList from '../components/CarList';
import CarForm from '../components/CarForm';

const RootContainer = () => {
    const { user } = useContext(AuthContext);
    return user.length ? (
        <div>
            <Navbar />
            <CarList />
            <CarForm />
        </div>
    ) : (
        <div>
            <h1>Faça Login para prosseguir</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer