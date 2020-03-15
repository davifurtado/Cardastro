import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// O sistema de login pode ser feito através do context para englobar a aplicação inteira sem precisar de redux. 
const AuthContextProvider = (props) => {
    const localUser = localStorage.getItem('user')
    const [user, setUser] = useState(
        localUser ? JSON.parse(localUser) : []
    );
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    const addUser = (user, password) => {
        setUser([{ user, password, id: 1 }])
    }
    const logout = () => {
        setUser([])
    }
    return (
        <AuthContext.Provider value={{ user, addUser, logout }}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider