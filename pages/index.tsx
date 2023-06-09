import Head from 'next/head';
import { InferGetStaticPropsType as InferGetServerSidePropsType } from 'next/types';
import Article from '@/components/home/article/Article';
import MostSearchedBreeds from '@/components/home/mostSearchedBreeds/MostSearchedBreeds';
import SearchBanner from '@/components/home/SearchBanner/SearchBanner';
import getMostSearchedBreeds from '@/lib/api/breeds';

export default function Home({
  mostSearchedBreeds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>CatWiki - Home</title>
        <meta name="description" content="CatWiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="rounded-[40px] overflow-hidden md:[&>div]:px-28 md:[&>div]:py-20 [&>div]:px-10 [&>div]:pt-5">
        <SearchBanner />
        <MostSearchedBreeds breeds={mostSearchedBreeds} />
      </div>
      <Article />
    </>
  );
}

export const getServerSideProps = async () => {
  const mostSearchedBreeds = await getMostSearchedBreeds({ top: 4 });

  return {
    props: {
      mostSearchedBreeds,
    },
  };
};
