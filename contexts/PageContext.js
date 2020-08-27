import React, { createContext, useState } from 'react';
export const Page = createContext();
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const value = { currentPage, setCurrentPage };
  return <Page.Provider value={value}>{children}</Page.Provider>;
};
export default PageProvider;
