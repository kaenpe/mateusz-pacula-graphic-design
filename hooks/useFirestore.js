import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        snap.forEach((doc) =>
          setDocs((prevDocs) => [...prevDocs, { ...doc.data(), id: doc.id }])
        );
      });
    return () => unsub;
  }, [collection]);
  return { docs };
};

export default useFirestore;
