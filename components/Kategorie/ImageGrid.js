import { fade, useTheme } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PageContext } from '../../contexts/PageContext';
import ImageItem from './ImageItem';
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

const ImageGrid = ({ docs }) => {
  //vars
  const router = useRouter();
  const theme = useTheme();
  //
  //states
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const { showModal, setShowModal } = useState(false);
  //
  //functions//
  //effects//

  return (
    <>
      {showModal && <Modal></Modal>}
      <StyledCategoryWrapper>
        {router.isFallback
          ? null
          : docs
              .filter(
                (doc, index) =>
                  _.range(currentPage * 8 - 8, currentPage * 8).includes(
                    index
                  ) && true
              )
              .map((doc) => <ImageItem key={uuid()} doc={doc}></ImageItem>)}
        <StyledIconButton
          theme={theme}
          left
          onClick={() => {
            currentPage > 1 && setCurrentPage((prevState) => (prevState -= 1));
          }}
        >
          <NavigateBeforeIcon
            style={{ position: 'absolute' }}
          ></NavigateBeforeIcon>
        </StyledIconButton>{' '}
        <StyledIconButton
          theme={theme}
          right
          onClick={() => {
            setCurrentPage((prevState) => (prevState += 1));
          }}
        >
          {' '}
          <NavigateNextIcon style={{ position: 'absolute' }}></NavigateNextIcon>
        </StyledIconButton>
      </StyledCategoryWrapper>
    </>
  );
};

export default ImageGrid;
