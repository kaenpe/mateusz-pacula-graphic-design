import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import ImageGrid from '../../components/Kategorie/ImageGrid';
import { projectFirestore } from '../../firebase/config';
const Kategoria = ({ filteredDocs }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.slug}</title>
      </Head>
      <ImageGrid docs={filteredDocs}></ImageGrid>
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
  const docs = [];
  await projectFirestore
    .collection('photoshop')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        (params.slug === doc.data().category || params.slug === 'photoshop') &&
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
export default Kategoria;
