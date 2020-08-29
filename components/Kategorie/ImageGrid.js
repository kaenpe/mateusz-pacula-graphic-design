import { fade, useTheme } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PageContext } from '../../contexts/PageContext';
import ImageItem from './ImageItem';
import Modal from './Modal';
import range from 'lodash/range';
import { projectFirestore } from '../../firebase/config';

//styled//
const StyledImageGrid = styled(motion.main)`
  grid-row: 2;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 5% 8%;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
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
    width: 100%;
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
  const [modal, setModal] = useState({ show: false, image: null });
  const [images, setImages] = useState(docs);
  //effects
  useEffect(() => {
    setImages(docs);
  }, [router.query.slug, router.pathname, images]);
  //
  //functions//
  const deleteImageFromDom = (imageId) => {
    setImages(
      setImages((prevState) =>
        prevState.filter((image) => image.id !== imageId)
      )
    );
  };
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

  const deleteImage = (imageId) => {
    projectFirestore
      .collection('photoshop')
      .doc(imageId)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
    setImages((prevState) => prevState.filter((image) => image.id !== imageId));
  };
  //effects//

  return (
    <>
      <StyledImageGrid>
        <AnimatePresence>
          {modal.show && (
            <Modal closeModal={closeModalHandler} image={modal.image}></Modal>
          )}
        </AnimatePresence>
        {router.isFallback
          ? null
          : images &&
            images
              .filter(
                (image, index) =>
                  range(currentPage * 8 - 8, currentPage * 8).includes(index) &&
                  true
              )
              .map((image) => (
                <ImageItem
                  deleteImage={deleteImage}
                  handleModal={openModalHandler}
                  key={uuid()}
                  image={image}
                  closeModal={closeModalHandler}
                  updateImage={deleteImageFromDom}
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
      </StyledImageGrid>
    </>
  );
};

export default ImageGrid;
