import type { CatBreedImageData } from '@/types/common';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { catApi, incrementSearchCounter } from '@/lib/api/api';
import { MouseEvent } from 'react';

interface AutoCompleteProps {
  searchValue: string;
}

const AutoComplete: FunctionComponent<AutoCompleteProps> = ({
  searchValue,
}) => {
  const { data, isLoading } = useSWR<CatBreedImageData[]>(
    searchValue ? `/breeds?search=${searchValue}&limit=${10}` : null,
    catApi
  );

  const onSearchIncrementCounter = async (e: MouseEvent<HTMLAnchorElement>) => {
    await incrementSearchCounter(e?.currentTarget?.id);
  };

  return (
    <div className="fixed md:absolute right-0 max-h-[250px] rounded-2xl md:h-auto top-36 z-50 px-14 pb-4 w-screen overflow-auto md:w-full md:max-h-[250px] bg-gray-100 md:bg-white md:top-16 md:px-5 md:py-3 md:mt-1">
      {isLoading ? (
        <Skeleton count={3} className="mb-1 h-7" />
      ) : data?.length === 0 || !Array.isArray(data) ? (
        <p>No Results</p>
      ) : (
        data?.map(({ id, name }) => (
          <Link
            id={id}
            key={id}
            href={`/${id}`}
            className="cursor-pointer hover:bg-gray-100 rounded-lg px-2 pb-3 block text-lg"
            onClick={async (e) => onSearchIncrementCounter(e)}
          >
            {name}
          </Link>
        ))
      )}
    </div>
  );
};

export default AutoComplete;
