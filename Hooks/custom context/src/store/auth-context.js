import React, { useEffect, useState } from 'react';

// AuthContext is an object that contains a component
const AuthContext = React.createContext({
    isLoggedIn: false,
    // not necessary to write but can be used for better IDE suggestionss
    onLogout: () => { },
    // just a prototype
    onLogin: (email, password) => { }
});

export const AuthcontextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    // wrap those components that needs the variable state ,: isLoggedIn passing from app.js 
    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            // passing function through context
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;