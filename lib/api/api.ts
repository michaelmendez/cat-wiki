import type { CatBreedDetails, CatBreedImageData } from '@/types/common';

type CatBreedParams = Partial<
  Record<'limit' | 'breed_ids' | 'has_breeds', string>
>;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const catApi = async (path: string) => {
  let instance = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CAT_API_URL}${path}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY as string,
      },
    });

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
  searchValue: string = '',
  catBreeds: CatBreedDetails[],
  limit: number | undefined
): CatBreedImageData[] => {
  const lowerCaseSearchValue = searchValue?.toLocaleLowerCase();
  const filteredBreeds = catBreeds
    ?.filter(({ name }) => name?.toLocaleLowerCase()?.includes(lowerCaseSearchValue))
    ?.slice(0, limit ?? undefined)
    ?.map(({ id, name }) => ({ id, name })) as CatBreedImageData[];

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

export { getCatBreed, getCatBreeds, filterBreeds, fetcher };
