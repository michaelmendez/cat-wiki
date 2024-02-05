import { ChangeEvent, FunctionComponent, useState } from 'react';
import SearchModal from '@/components/home/searchBreeds/SearchModal';
import Search from '@/components/common/search/Search';
import useWindowSize from '@/hooks/useWindowSize';
import { isMobileDevice } from '@/lib/api/breakpoints';
import AutoComplete from './AutoComplete';

interface SearchProps {
  placeholder: string;
}

const SearchBreeds: FunctionComponent<SearchProps> = ({ placeholder }) => {
  const { width = 0 } = useWindowSize();
  const [searchValue, setSearchValue] = useState('');
  const [shouldOpenSearchModal, setShouldOpenSearchModal] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      {shouldOpenSearchModal && isMobileDevice(width) ? (
        <>
          <SearchModal
            setShouldOpenSearchModal={setShouldOpenSearchModal}
            shouldOpenSearchModal={shouldOpenSearchModal}
            handleOnChange={handleOnChange}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {searchValue && <AutoComplete searchValue={searchValue} />}
        </>
      ) : (
        <>
          <Search
            placeholder={isMobileDevice(width) ? 'Search' : placeholder}
            searchValue={searchValue}
            handleOnChange={handleOnChange}
            className="justify-end flex items-center justify-self-start md:justify-self-auto"
            onClick={() => setShouldOpenSearchModal(isMobileDevice(width))}
          />
          {!isMobileDevice(width) && searchValue && <AutoComplete searchValue={searchValue} />}
        </>
      )}
    </div>
  );
};

export default SearchBreeds;
