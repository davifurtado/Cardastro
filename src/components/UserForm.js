import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const UserForm = () => {
    const { addUser } = useContext(AuthContext)
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        addUser(user, password);
        setUser('');
        setPassword('');
    }
    return (
        <form className="user-form" onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Nome de Usuário..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                maxLength={9}
            />
            <input
                type="text"
                placeholder="Senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                maxLength={9}
            />
            <input type="submit" value="Fazer Login" />
        </form>
    );
}

export default UserForm
