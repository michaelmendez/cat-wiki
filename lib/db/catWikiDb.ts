import type { CatBreedImageData } from '@/types/common';

export interface CatBreedDBCollection extends CatBreedImageData {
  searchCount: number;
}

const catWikiDB = async () => {
  const client = (await import('@/lib/db/mongo')).default;
  return (await client).db('catWiki');
};

export default catWikiDB;
