import React, { createContext, useState } from 'react';
export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const value = { currentPage, setCurrentPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
export default PageContextProvider;
//styled//
//vars//
//states//
//functions//
//effects//
