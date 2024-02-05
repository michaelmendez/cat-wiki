import { FunctionComponent } from 'react';
import { MdSearch } from 'react-icons/md';

interface SearchProps {
  placeholder: string;
  searchValue: string;
  className?: string;
  handleOnChange: Function;
  onClick?: Function;
  autoFocus?: boolean
}

const Search: FunctionComponent<SearchProps> = ({
  placeholder,
  searchValue,
  handleOnChange,
  onClick = null,
  className = '',
  autoFocus = false,
}) => {
  return (
    <div className={className}>
      <MdSearch
        className="absolute mr-2 w-12 pointer-events-none"
        fontSize={18}
      />
      <input
        autoFocus={autoFocus}
        placeholder={placeholder}
        className="rounded-full h-14 w-full px-7 placeholder-black focus:outline-none focus:ring focus:ring-stone-300 transition-all duration-300"
        value={searchValue}
        onChange={(e) => handleOnChange(e)}
        onClick={() => onClick?.()}
      />
    </div>
  );
};

export default Search;
