import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';
export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const router = useRouter();
  const [category, setCategory] = useState('KATEGORIE');
  const { slug } = router.query;
  useEffect(() => {
    setCategory(router.pathname === ('/' || '/kontakt/') ? 'KATEGORIE' : slug);
  }, [slug, router.pathname]);

  const value = { category, setCategory };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;
