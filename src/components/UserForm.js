import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// O código foi convertido para componentes do primeReact

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
            <InputText
                placeholder="Nome de Usuário..."
                className="user-form-primereact"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                maxLength={9}
            />
            <Password
                type="text"
                placeholder="Senha..."
                className="user-form-primereact"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                maxLength={9}
                feedback={false}
            />
            <div>
                <Button className="p-button-secondary button-primereact" type="submit" label="Fazer Login"/>
            </div>
        </form>
    );
}

export default UserForm
