import { useRouter } from 'next/router';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { projectFirestore } from '../../firebase/config';
const StyledCategoryWrapper = styled.div`
  grid-row: 2;
  width: 100vw;
`;
const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  grid-row: 2;
  grid-column: 2;
`;
const Category = ({ filteredDocs }) => {
  const router = useRouter();

  return (
    <StyledCategoryWrapper>
      {router.isFallback
        ? null
        : filteredDocs.map((doc) => (
            <StyledImg key={uuid()} src={doc.url}></StyledImg>
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
