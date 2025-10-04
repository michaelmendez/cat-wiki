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
    <div className={`relative ${className}`}>
      <input
        autoFocus={autoFocus}
        placeholder={placeholder}
        className="rounded-full h-14 w-full pl-4 pr-10 placeholder:text-black focus:outline-none focus:ring focus:ring-stone-300 transition-all duration-300 bg-white"
        value={searchValue}
        onChange={(e) => handleOnChange(e)}
        onClick={() => onClick?.()}
      />
      <MdSearch
        className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
        fontSize={18}
      />
    </div>
  );
};

export default Search;
