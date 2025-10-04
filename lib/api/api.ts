import type { CatBreedDetails, CatBreedImageData } from '@/types/common';

type CatBreedParams = Partial<
  Record<'limit' | 'breed_ids' | 'has_breeds', string>
>;

const catApi = async (path: string) => {
  let instance = null;

  try {
    // Check if path starts with /api (internal API) or external API
    const url = path.startsWith('/api')
      ? path
      : `${process.env.NEXT_PUBLIC_CAT_API_URL}${path}`;

    const headers: HeadersInit = path.startsWith('/api')
      ? {} // No API key needed for internal routes
      : { 'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY as string };

    const response = await fetch(url, { headers });

    if (response?.ok) {
      instance = await response.json();
    }

    return instance;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const getCatBreeds = async (): Promise<CatBreedDetails[]> => {
  const catBreeds = await catApi('/breeds');
  return catBreeds;
};

const filterBreeds = (
  catBreeds: CatBreedDetails[],
  limit: number | undefined,
  searchValue: string = ''
): Array<{ id: string; name: string }> => {
  const lowerCaseSearchValue = searchValue?.toLocaleLowerCase();
  const filteredBreeds = catBreeds
    ?.filter(({ name }) => name?.toLocaleLowerCase()?.includes(lowerCaseSearchValue))
    ?.slice(0, limit ?? undefined)
    ?.map(({ id, name }) => ({ id, name }));

  return filteredBreeds;
};

const getCatBreed = async (params: CatBreedParams) => {
  const queryParams = new URLSearchParams(params).toString();
  const catBreed = (await catApi(
    `/images/search?${queryParams}`
  )) as CatBreedImageData[];
  return catBreed;
};

export const incrementSearchCounter = async (breedId: string) => {
  return await fetch(`/api/breeds/${breedId}`, { method: 'POST' });
};

export { getCatBreed, getCatBreeds, filterBreeds, catApi };
