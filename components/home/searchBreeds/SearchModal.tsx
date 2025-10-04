import { FunctionComponent } from 'react';
import Search from '@/components/common/search/Search';
import { MdClose } from 'react-icons/md';

interface SearchModalProps {
  setShouldOpenSearchModal: Function;
  handleOnChange: Function;
  setSearchValue: Function;
  searchValue: string;
}

const SearchModal: FunctionComponent<SearchModalProps> = ({
  setShouldOpenSearchModal,
  setSearchValue,
  searchValue,
  handleOnChange,
}) => {
  const handleOnClose = () => {
    setShouldOpenSearchModal(false);
    setSearchValue('');
  };

  return (
    <div className="fixed max-h-[500px] min-h-[270px] z-10 bg-gray-100 rounded-2xl overflow-auto w-screen top-0 left-0 text-black pt-5">
      <button
        className="flex justify-end w-full px-12 mb-5"
        onClick={() => handleOnClose()}
      >
        <MdClose fontSize={20} />
      </button>
      <Search
        autoFocus
        placeholder="Search"
        searchValue={searchValue}
        handleOnChange={handleOnChange}
        className="w-full flex justify-end items-center px-10"
      />
    </div>
  );
};

export default SearchModal;
