import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setAuth(user.email);
      } else {
        setAuth(false);
        // User is signed out.
        // ...
      }
    });
    return () => {};
  }, [auth]);
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
