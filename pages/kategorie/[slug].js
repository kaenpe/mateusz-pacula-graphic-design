import Head from 'next/head';
import { useRouter } from 'next/router';

import ImageGrid from '../../components/Kategorie/ImageGrid';
import { projectFirestore } from '../../firebase/config';

const Kategoria = ({ images }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.slug}</title>
      </Head>
      <ImageGrid docs={images}></ImageGrid>
    </>
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
  const images = [];
  await projectFirestore
    .collection('photoshop')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      snapshot.forEach((image) => {
        (params.slug === image.data().category ||
          params.slug === 'photoshop') &&
          images.push({
            ...image.data(),
            id: image.id,
            createdAt: new Date(
              image.data().createdAt.seconds * 1000
            ).toLocaleDateString('en-US'),
          });
      });
    });

  return {
    revalidate: 1,
    props: {
      images,
    },
  };
};
export default Kategoria;
