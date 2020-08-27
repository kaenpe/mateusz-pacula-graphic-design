import React, { createContext, useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(user.email);
      } else {
        setAuth(false);
        // User is signed out.
        // ...
      }
    });
  }, []);

  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
