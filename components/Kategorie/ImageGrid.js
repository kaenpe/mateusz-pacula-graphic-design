import { fade, useTheme } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PageContext } from '../../contexts/PageContext';
import { StyledBackdrop } from '../UI/SideDrawer';
import ImageItem from './ImageItem';
import Modal from './Modal';
var _ = require('lodash');

//styled//
const StyledCategoryWrapper = styled(motion.div)`
  grid-row: 2;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 40px 100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 3000px) {
    grid-template-columns: repeat(10, 1fr);
  }
`;
const StyledIconButton = styled.div`
  position: fixed;
  top: 47.5%;
  left: ${({ left }) => left && 0};
  right: ${({ right }) => right && 0};
  width: 5%;
  height: 5%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &::after {
    background-color: ${({ theme }) =>
      fade(theme.palette.secondary.dark, 0.25)};
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    transition: transform 0.3s ease-in;
    transform: scale(0.001, 0.001);
  }
  &:hover {
    &::after {
      transform: scale(1, 1);
    }
  }
`;
const StyledModalWrapper = styled(motion.div)`
  height: max-content;
  width: max-content;
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
const ImageGrid = ({ docs }) => {
  //vars
  const router = useRouter();
  const theme = useTheme();
  //
  //states
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [modal, setModal] = useState({ show: false, image: null });
  //
  //functions//
  const nextPageHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  const previousPageHandler = () => {
    currentPage > 1 && setCurrentPage((prevState) => prevState - 1);
  };

  const openModalHandler = (image) => {
    setModal({ show: true, image: image });
  };
  const closeModalHandler = () => {
    setModal({ show: false, image: null });
  };
  //effects//

  return (
    <>
      <StyledCategoryWrapper>
        {modal.show && (
          <StyledBackdrop onClick={() => closeModalHandler()}></StyledBackdrop>
        )}
        <AnimatePresence>
          {modal.show && (
            <>
              <StyledModalWrapper
                theme={theme}
                initial={{ y: '-110vh', opacity: 0 }}
                animate={{ y: '0', opacity: 1 }}
                exit={{ y: '-110vh', opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Modal image={modal.image}></Modal>
              </StyledModalWrapper>
            </>
          )}
        </AnimatePresence>
        {router.isFallback
          ? null
          : docs
              .filter(
                (doc, index) =>
                  _.range(currentPage * 8 - 8, currentPage * 8).includes(
                    index
                  ) && true
              )
              .map((doc) => (
                <ImageItem
                  handleModal={openModalHandler}
                  key={uuid()}
                  doc={doc}
                ></ImageItem>
              ))}
        <StyledIconButton
          theme={theme}
          left
          onClick={() => previousPageHandler()}
        >
          <NavigateBeforeIcon
            style={{ position: 'absolute' }}
          ></NavigateBeforeIcon>
        </StyledIconButton>{' '}
        <StyledIconButton theme={theme} right onClick={() => nextPageHandler()}>
          <NavigateNextIcon style={{ position: 'absolute' }}></NavigateNextIcon>
        </StyledIconButton>
      </StyledCategoryWrapper>
    </>
  );
};

export default ImageGrid;
