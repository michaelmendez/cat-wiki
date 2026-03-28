import Search from '@/components/common/search/Search';
import SearchModal from '@/components/home/searchBreeds/SearchModal';
import useWindowSize from '@/hooks/useWindowSize';
import { isMobileDevice } from '@/lib/api/breakpoints';
import { ChangeEvent, FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AutoComplete from './AutoComplete';

interface SearchProps {
  placeholder: string;
}

const SearchBreeds: FunctionComponent<SearchProps> = ({ placeholder }) => {
  const { width = 0 } = useWindowSize();
  const [searchValue, setSearchValue] = useState('');
  const [shouldOpenSearchModal, setShouldOpenSearchModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMemo(() => isMobileDevice(width), [width]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleModalToggle = useCallback(() => {
    setShouldOpenSearchModal(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSearchValue('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
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
