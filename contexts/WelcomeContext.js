import React, { createContext, useState } from 'react';
export const WelcomeContext = createContext();
export const WelcomeContextProvider = ({ children }) => {
  const [welcome, setWelcome] = useState(true);
  const value = { welcome, setWelcome };
  return (
    <WelcomeContext.Provider value={value}>{children}</WelcomeContext.Provider>
  );
};
export default WelcomeContextProvider;
