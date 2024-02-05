import { FunctionComponent } from 'react';
import SearchBreeds from '@/components/home/searchBreeds/SearchBreeds';
import CatWikiLogo from '@/public/logo.svg';

interface SearchProps {}

const SearchBanner: FunctionComponent<SearchProps> = () => {
  return (
    <div className="bg-cat w-full md:bg-cover md:bg-center md:h-[550px] bg-[75%] bg-no-repeat bg-cover">
      <div className="md:w-96 grid grid-rows-3 [&>p]:text-white">
        <CatWikiLogo className="brightness-0 invert-[1] place-self-center" />
        <p className="md:text-2xl text-md md:w-auto w-52 my-5">
          Get to know more about your cat breed
        </p>
        <SearchBreeds placeholder="Enter your cat breed" />
      </div>
    </div>
  );
};

export default SearchBanner;
