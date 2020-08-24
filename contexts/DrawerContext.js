import React, { createContext, useState } from 'react';
export const DrawerContext = createContext();
export const DrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
export default DrawerContextProvider;
