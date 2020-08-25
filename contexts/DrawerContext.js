import React, { createContext, useState } from 'react';
export const DrawerContext = createContext();
export const DrawerContextProvider = ({ children }) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);
  const value = {
    openSideDrawer,
    setOpenSideDrawer,
    openCategoryDrawer,
    setOpenCategoryDrawer,
  };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
export default DrawerContextProvider;
