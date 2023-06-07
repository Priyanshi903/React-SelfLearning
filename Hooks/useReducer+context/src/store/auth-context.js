import React from 'react';

// AuthContext is an object that contains a component
const AuthContext = React.createContext({
    isLoggedIn: false,
    // not necessary to write but can be used for better IDE suggestionss
    onLogout: () => { }
});

export default AuthContext;