import React from 'react';
import styled from 'styled-components';
import { projectFirestore } from '../../firebase/config';
const StyledCategoryWrapper = styled.div``;
const Category = ({ images }) => {
  return (
    <StyledCategoryWrapper>
      {images &&
        images.map((img) => {
          <img src={img.url} alt='image' />;
        })}
    </StyledCategoryWrapper>
  );
};

export const getStaticProps = async () => {
  const images = projectFirestore
    .collection('banery')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      snap.forEach((doc) =>
        setDocs((prevDocs) => [...prevDocs, { ...doc.data() }])
      );
    });

  return (props = {
    images,
  });
};
export default Category;
