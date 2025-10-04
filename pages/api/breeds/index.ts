import type { NextApiRequest, NextApiResponse } from 'next';
import { getCatBreeds, filterBreeds, getCatBreed } from '@/lib/api/api';
import type { CatBreedImageData, ErrorResponse } from '@/types/common';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';
import catWikiDB, { CatBreedDBCollection } from '@/lib/db/catWikiDb';

interface NextCustomApiRequest extends NextApiRequest {
  query: NextApiRequestQuery & {
    search: string;
    limit: number | undefined;
    orderBy: string;
  };
}

export default async function handler(
  req: NextCustomApiRequest,
  res: NextApiResponse<Array<{ id: string; name: string }> | CatBreedImageData[] | ErrorResponse>
) {
  try {
    let response: Array<{ id: string; name: string }> | CatBreedDBCollection[] = [];

    const { search = '', limit = undefined, orderBy } = req.query;
    if (orderBy) {
      const db = await catWikiDB();
      const breeds = (await db
        .collection('breeds')
        .find({}, { sort: { [orderBy]: -1 }, limit, projection: { _id: false } })
        .toArray()) as unknown as CatBreedDBCollection[];

      for (const breed of breeds) {
        const [{ url = '' } = {}] = (await getCatBreed({ limit: '1', breed_ids: breed?.id })) || [];
        const catBreedData = { ...breed, url } as CatBreedDBCollection;
        response.push(catBreedData);
      }
    } else {
      const catBreeds = await getCatBreeds();
      const catBreedsFiltered = filterBreeds(catBreeds, limit, search);
      response = catBreedsFiltered;
    }
    res.status(200).json(response);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    res.status(500).json({ message: errorMessage });
  }
}
