import catWikiDB from '@/lib/db/catWikiDb';
import { getCatBreed } from '@/lib/api/api';
import type { CatBreedImageData } from '@/types/common';

const getMostSearchedBreeds = async ({ top }: { top: number }) => {
  const mostSearchedBreeds: CatBreedImageData[] = [];
  const requests = [];

  const db = await catWikiDB();
  const breeds = (await db
    .collection('breeds')
    .find({}, { sort: { searchCount: -1 }, limit: top, projection: { _id: false } })
    .toArray()) as unknown as CatBreedImageData[];

  for (const breed of breeds) {
    requests.push(
      getCatBreed({
        limit: '1',
        breed_ids: breed?.id,
        has_breeds: '1',
      })
    );
  }

  return await Promise.all(requests).then(async (catBreeds) => {
    catBreeds
      ?.filter((catBreed) => catBreed && Array.isArray(catBreed) && catBreed.length > 0)
      ?.forEach((catBreed: CatBreedImageData[]) => {
        const [firstCat] = catBreed;
        const { url = '', breeds = [] } = firstCat ?? {};
        const [{ name = '', description = '', id = '' } = {}] = breeds;
        name && mostSearchedBreeds?.push({ ...firstCat, id, url, name, description });
      });

    return mostSearchedBreeds;
  });
};

export default getMostSearchedBreeds;
