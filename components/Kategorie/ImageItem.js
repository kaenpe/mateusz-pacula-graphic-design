import { fade, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import EditModal from './EditModal';

//styled
const StyledImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
const StyledImageItemWrapper = styled(motion.div)`
  transition: opacity 1s ease-out;
  position: relative;
  overflow: hidden;
  padding: 40%;
  opacity: 0.8;
  border-radius: 40px;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.dark}`};
  cursor: pointer;
  &::after {
    background-color: ${({ theme }) => fade(theme.palette.secondary.dark, 0.2)};
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 40px;
    position: absolute;
    transition: transform 0.3s ease-out;
    transform: scale(0.001, 0.001);
    pointer-events: none;
  }
  &:hover {
    &::after {
      transform: scale(1, 1);
      cursor: pointer;
    }
  }
`; //
const StyledButton = styled.button`
  position: absolute;
  max-width: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  font-size: 0.7em;
  top: 10px;
  right: 20px;
  z-index: 3;
  padding: 5px;
  background-color: #d32f2f75;
  border: 0.5px solid black;
  &:hover {
    cursor: pointer;
    background-color: #d32f2f50;
  }
`;

const ImageItem = ({ deleteImage, image, handleModal, updateImage }) => {
  //vars
  const theme = useTheme();
  //
  //states//
  const [edit, setEdit] = useState(false);
  const { auth } = useContext(AuthContext);
  //functions//
  //effects//

  return (
    <>
      {edit && (
        <EditModal
          id={image.id}
          deleteImage={deleteImage}
          image={image}
          setEdit={setEdit}
          updateImage={updateImage}
        ></EditModal>
      )}
      <StyledImageItemWrapper theme={theme}>
        {auth && (
          <StyledButton
            onClick={() => {
              setEdit(true);
            }}
          >
            <strong>edytuj</strong>
          </StyledButton>
        )}
        <StyledImg
          onClick={() => handleModal(image.url)}
          src={image.url}
          alt={image.title}
        ></StyledImg>
      </StyledImageItemWrapper>
    </>
  );
};

export default ImageItem;
