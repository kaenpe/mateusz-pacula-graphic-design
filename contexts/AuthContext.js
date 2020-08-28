import React, { createContext, useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(user.email);
      } else {
        setAuth(null);
        // User is signed out.
        // ...
      }
    });
  }, []);

  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
//styled//
//vars//
//states//
//functions//
//effects//
