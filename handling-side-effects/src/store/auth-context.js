import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLoagout: () => { }
});

export default AuthContext;
