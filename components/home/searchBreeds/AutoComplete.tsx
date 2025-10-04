import Link from 'next/link';
import { FunctionComponent, MouseEvent } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { catApi, incrementSearchCounter } from '@/lib/api/api';

interface AutoCompleteProps {
  searchValue: string;
}

const AutoComplete: FunctionComponent<AutoCompleteProps> = ({
  searchValue,
}) => {
  const { data, isLoading } = useSWR<Array<{ id: string; name: string }>>(
    searchValue ? `/api/breeds?search=${searchValue}&limit=${10}` : null,
    (url) => catApi(url, { isInternal: true }),
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
      keepPreviousData: true,
    }
  );

  const onSearchIncrementCounter = async (e: MouseEvent<HTMLAnchorElement>) => {
    await incrementSearchCounter(e?.currentTarget?.id);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Skeleton count={3} className="mb-1 h-7" />;
    }

    if (data?.length === 0 || !Array.isArray(data)) {
      return <p>No Results</p>;
    }

    return data?.map(({ id, name }) => (
      <Link
        id={id}
        key={id}
        href={`/${id}`}
        className="cursor-pointer hover:bg-gray-100 rounded-lg px-2 pb-3 block text-lg"
        onClick={async (e) => onSearchIncrementCounter(e)}
      >
        {name}
      </Link>
    ));
  };

  return (
    <div className="fixed md:absolute right-0 max-h-[250px] rounded-2xl md:h-auto top-36 z-50 px-14 pb-4 w-screen overflow-auto md:w-full md:max-h-[250px] bg-gray-100 md:bg-white md:top-16 md:px-5 md:py-3 md:mt-1">
      {renderContent()}
    </div>
  );
};

export default AutoComplete;
