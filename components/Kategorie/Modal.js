import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
//styled
const StyledModal = styled(motion.img)`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  position: fixed;
  z-index: 3;
  top: -10px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: block;
  max-width: 90vw;
  max-height: 80vh;
  margin: 100px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

const ModalBackdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: black;
  opacity: 0.2;
`;
//
const Modal = ({ image, closeModal }) => {
  //consts//
  const theme = useTheme();
  //states//
  //functions//
  //effects//
  return (
    <>
      <ModalBackdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => closeModal()}
      ></ModalBackdrop>
      <StyledModal
        theme={theme}
        initial={{ y: '-110vh', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        exit={{ y: '-110vh', opacity: 0 }}
        transition={{ duration: 0.5 }}
        src={image}
      ></StyledModal>
    </>
  );
};

export default Modal;
