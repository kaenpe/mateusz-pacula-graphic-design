import { useRouter } from 'next/router';
import uuid from 'react-uuid';
import styled from 'styled-components';
import ImageItem from '../../components/Kategorie/ImageItem';
import { projectFirestore } from '../../firebase/config';
const StyledCategoryWrapper = styled.div`
  grid-row: 2;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  margin: 20px auto;
`;

const Category = ({ filteredDocs }) => {
  const router = useRouter();

  return (
    <StyledCategoryWrapper>
      {router.isFallback
        ? null
        : filteredDocs.map((doc) => (
            <ImageItem key={uuid()} doc={doc}></ImageItem>
          ))}
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
