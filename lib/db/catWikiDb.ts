import type { CatBreedImageData } from '@/types/common';

export interface CatBreedDBCollection extends CatBreedImageData {
  searchCount: number;
}

const catWikiDB = async () => {
  const getClientPromise = (await import('@/lib/db/mongo')).default;
  return (await getClientPromise()).db('catWiki');
};

export default catWikiDB;
