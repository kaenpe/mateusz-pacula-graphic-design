import { useEffect, useState } from 'react';
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from '../firebase/config';
const useStorage = (file, title, category) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storage = projectStorage.ref(file.name);
    const collection = projectFirestore.collection(`photoshop`);
    storage.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },

      async () => {
        const url = await storage.getDownloadURL();
        collection.add({
          url,
          title: title,
          category: category,
          createdAt: timestamp(),
        });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url };
};

export default useStorage;
