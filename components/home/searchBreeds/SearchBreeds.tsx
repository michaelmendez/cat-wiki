import { ChangeEvent, FunctionComponent, useState, useCallback, useMemo } from 'react';
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

  const isMobile = useMemo(() => isMobileDevice(width), [width]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleModalToggle = useCallback(() => {
    setShouldOpenSearchModal(isMobile);
  }, [isMobile]);

  return (
    <div className="relative">
      {shouldOpenSearchModal && isMobile ? (
        <>
          <SearchModal
            setShouldOpenSearchModal={setShouldOpenSearchModal}
            handleOnChange={handleOnChange}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {searchValue && <AutoComplete searchValue={searchValue} />}
        </>
      ) : (
        <>
          <Search
            placeholder={isMobile ? 'Search' : placeholder}
            searchValue={searchValue}
            handleOnChange={handleOnChange}
            className="flex items-center justify-self-start md:justify-self-auto w-full"
            onClick={handleModalToggle}
          />
          {!isMobile && searchValue && <AutoComplete searchValue={searchValue} />}
        </>
      )}
    </div>
  );
};

export default SearchBreeds;
