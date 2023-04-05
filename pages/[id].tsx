import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next/types';
import Head from 'next/head';
import { getCatBreed, getCatBreeds } from '@/lib/api/api';
import type { CatBreedDetails } from '@/types/common';
import { ParsedUrlQuery } from 'querystring';
import type { Image as GalleryData } from 'react-grid-gallery';
import CatDetails from '@/components/catInfo/CatDetails';

type Props = {
  catDetails: CatBreedDetails;
  galleryData: GalleryData[];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

function CatInfo({
  catDetails,
  galleryData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
  const ids = breeds?.map((breed: CatBreedDetails) => ({
    params: { id: breed?.id },
  }));

  return {
    paths: [...ids],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const catImagesDetails = await getCatBreed({
    limit: '8',
    breed_ids: params?.id,
    has_breeds: '1',
  });

  const [catDetails] = catImagesDetails || [];
  const [breed] = catDetails?.breeds || [];

  const galleryData: GalleryData[] = catImagesDetails?.map(
    ({ height, width, url, id }, index: number) => ({
      key: id,
      height,
      width,
      src: url,
      alt: `${breed?.name} ${index + 1}`,
    })
  );

  return {
    props: {
      catDetails: breed || {},
      galleryData,
    },
  };
};

export default CatInfo;
