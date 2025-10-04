import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next/types';
import Head from 'next/head';
import { getCatBreed, getCatBreeds } from '@/lib/api/api';
import type { CatBreedDetails } from '@/types/common';
import { ParsedUrlQuery } from 'querystring';
import CatDetails from '@/components/catInfo/CatDetails';

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  catDetails: CatBreedDetails;
  galleryData: GalleryImage[];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

function CatInfo({
  catDetails,
  galleryData,
}: Readonly<InferGetStaticPropsType<typeof getStaticProps>>) {
  return (
    <>
      <Head>
        <title>{`CatWiki - ${catDetails?.name}`}</title>
        <meta name="description" content="CatWiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatDetails images={galleryData} details={catDetails} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const breeds = await getCatBreeds();
  const ids = (breeds || [])
    .filter((breed: CatBreedDetails) => breed?.id) // Filter out any breeds without valid IDs
    .map((breed: CatBreedDetails) => ({
      params: { id: breed.id },
    }));

  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  try {
    const catImagesDetails = await getCatBreed({
      limit: '8',
      breed_ids: params?.id,
      has_breeds: '1',
    });

    const [catDetails] = catImagesDetails || [];
    const [breed] = catDetails?.breeds || [];

    // Ensure all values are properly serializable
    const galleryData: GalleryImage[] = (catImagesDetails || []).map(
      ({ height, width, url, id }, index: number) => ({
        height: Number(height) || 0,
        width: Number(width) || 0,
        src: url || '',
        alt: `${breed?.name || 'Cat'} ${index + 1}`,
      })
    );

    // Return only serializable data
    return {
      props: {
        catDetails: JSON.parse(JSON.stringify(breed || {})),
        galleryData: JSON.parse(JSON.stringify(galleryData)),
      },
    };
  } catch (error) {
    console.error(`Error fetching data for breed ${params?.id}:`, error);
    // Return empty data if there's an error
    return {
      props: {
        catDetails: {},
        galleryData: [],
      },
    };
  }
};

export default CatInfo;
