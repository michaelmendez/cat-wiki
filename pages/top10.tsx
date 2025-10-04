import { FunctionComponent } from 'react';
import Head from 'next/head';
import getMostSearchedBreeds from '@/lib/api/breeds';
import TopSearches from '@/components/top10/TopSearches';
import type { CatBreedImageData } from '@/types/common';

interface Top10Props {
  mostSearchedBreeds: CatBreedImageData[];
}

const Top10: FunctionComponent<Top10Props> = ({
  mostSearchedBreeds,
}) => {
  return (
    <>
      <Head>
        <title>CatWiki - Most searched breeds</title>
        <meta name="description" content="Most searched breeds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSearches breeds={mostSearchedBreeds} />
    </>
  );
};

export const getStaticProps = async () => {
  const mostSearchedBreeds = await getMostSearchedBreeds({ top: 10 });

  return {
    props: {
      mostSearchedBreeds,
    },
    revalidate: 60, // Regenerate page every 60 seconds
  };
};

export default Top10;
