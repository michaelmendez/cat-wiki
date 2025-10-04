import type { CatBreedDetails, CatBreedImageData } from '@/types/common';
import { API_CONFIG, buildApiUrl, buildInternalApiUrl } from '@/lib/config/api';

type CatBreedParams = Partial<
  Record<'limit' | 'breed_ids' | 'has_breeds', string>
>;

type ApiCallOptions = {
  isInternal?: boolean;
  params?: Record<string, string>;
};

const catApi = async (endpoint: string, options: ApiCallOptions = {}) => {
  let instance = null;

  try {
    const { isInternal = false, params } = options;

    // Build URL based on whether it's internal or external API
    const url = isInternal
      ? buildInternalApiUrl(endpoint)
      : buildApiUrl(endpoint, params);

    // Set headers based on API type
    const headers: HeadersInit = isInternal
      ? {} // No API key needed for internal routes
      : { 'x-api-key': API_CONFIG.CAT_API.API_KEY };

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
  const catBreeds = await catApi(API_CONFIG.CAT_API.ENDPOINTS.BREEDS);
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
  const catBreed = (await catApi(
    API_CONFIG.CAT_API.ENDPOINTS.IMAGES_SEARCH,
    { params: params as Record<string, string> }
  )) as CatBreedImageData[];
  return catBreed;
};

export const incrementSearchCounter = async (breedId: string) => {
  const url = buildInternalApiUrl(`${API_CONFIG.INTERNAL_API.BREEDS}/${breedId}`);
  return await fetch(url, { method: 'POST' });
};

export { getCatBreed, getCatBreeds, filterBreeds, catApi };
