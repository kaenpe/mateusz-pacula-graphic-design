import { fade, useTheme } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import ImageItem from '../../components/Kategorie/ImageItem';
import { PageContext } from '../../contexts/PageContext';
import { projectFirestore } from '../../firebase/config';
import Link from '../../src/Link';
var _ = require('lodash');
const StyledCategoryWrapper = styled(motion.div)`
  grid-row: 2;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  padding: 40px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
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

const Category = ({ filteredDocs }) => {
  const router = useRouter();
  const theme = useTheme();
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [direction, setDirection] = useState('left');
  return (
    <StyledCategoryWrapper>
      {router.isFallback
        ? null
        : filteredDocs
            .filter(
              (doc, index) =>
                _.range(currentPage * 9 - 9, currentPage * 9).includes(index) &&
                true
            )
            .map((doc) => <ImageItem key={uuid()} doc={doc}></ImageItem>)}
      <Link
        href='/kategorie/[slug]/[id]'
        as={`/kategorie/${router.query.slug}/${currentPage - 1}`}
      >
        <StyledIconButton
          theme={theme}
          left
          onClick={() => {
            currentPage > 1 && setCurrentPage((prevState) => (prevState -= 1));
            setDirection('left');
          }}
        >
          <NavigateBeforeIcon
            style={{ position: 'absolute' }}
          ></NavigateBeforeIcon>
        </StyledIconButton>
      </Link>{' '}
      <Link
        href='/kategorie/[slug]/[id]'
        as={`/kategorie/${router.query.slug}/${currentPage + 1}`}
      >
        {' '}
        <StyledIconButton
          theme={theme}
          right
          onClick={() => {
            setCurrentPage((prevState) => (prevState += 1));
            setDirection('right');
          }}
        >
          {' '}
          <NavigateNextIcon style={{ position: 'absolute' }}></NavigateNextIcon>
        </StyledIconButton>
      </Link>
    </StyledCategoryWrapper>
  );
};
export const getStaticPaths = async () => {
  const paths = [
    { params: { slug: 'banery' } },
    { params: { slug: 'before after' } },
    { params: { slug: 'miniatury' } },
    { params: { slug: 'tapety' } },
    { params: { slug: 'photoshop' } },
  ];

  return { paths, fallback: true };
};
export const getStaticProps = async ({ params }) => {
  const docs = [];
  await projectFirestore
    .collection(params.slug)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
    });
  const filteredDocs = docs.map((doc) => {
    return { ...doc, createdAt: JSON.stringify(doc.createdAt) };
  });
  return {
    revalidate: 1,
    props: {
      filteredDocs,
    },
  };
};
export default Category;
