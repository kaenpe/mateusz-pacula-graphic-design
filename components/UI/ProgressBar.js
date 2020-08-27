import React from 'react';
import useStorage from '../../hooks/useStorage';
const ProgressBar = ({ file, setFile, title, category }) => {
  const { url, progress } = useStorage(file, category, title);
  return <div className='progress-bar'></div>;
};

export default ProgressBar;
