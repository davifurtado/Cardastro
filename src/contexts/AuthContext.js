import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// O sistema de login pode ser feito através do context para englobar a aplicação inteira sem precisar de redux. 
const AuthContextProvider = (props) => {
    const [user, setUser] = useState([
    ]);
    const addUser = (user, password) => {
        // a função uuid serve para criar um id único aleatório
        setUser([{ user, password, id: 1 }])
    }
    return (
        <AuthContext.Provider value={{ user, addUser }}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider