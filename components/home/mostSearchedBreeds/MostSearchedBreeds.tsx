import type { CatBreedImageData } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import SkeletonImage from '../../common/skeleton/SkeletonImage';

export interface MostSearchedBreedsProps {
  breeds: CatBreedImageData[];
}

const MostSearchedBreeds: FunctionComponent<MostSearchedBreedsProps> = ({
  breeds,
}) => {
  return (
    <div className="flex flex-col bg-stone-300 px-0 py-6">
      <span className="font-semibold mb-4">
        <p>Most Searched Breeds</p>
        <div className="border-solid border-b-4 border-brown-900 w-14 h-2" />
      </span>
      {!breeds?.length ? (
        <div className="place-self-center">
          <p className="md:text-4xl text-2xl font-semibold w-full text-center pt-8">
            Not Enough Breeds Have Been Searched For Yet
          </p>
          <Image
            src="/emptyScreenCats.webp"
            height={1000}
            width={1000}
            alt="Empty Screen Cats"
            className="md:h-[450px] h-[250px] pb-10 md:pb-1 object-cover md:w-auto w-full aspect-square m-auto"
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row lg:items-end mb-10 gap-3">
            <h3 className="md:text-6xl text-2xl font-bold flex-1">
              66+ Breeds For You to Discover
            </h3>
            <Link href="/top10">
              <div className="flex items-center text-brown-100">
                <p>SEE MORE</p>
                <MdArrowRightAlt fontSize={24} />
              </div>
            </Link>
          </div>
          <div
            className={`grid grid-cols-2 md:flex ${
              breeds?.length > 2 ? 'md:justify-between' : 'md:justify-around'
            } gap-4 md:gap-6 mb-10`}
          >
            {breeds?.map(({ id, url, name }, index: number) => (
              <button
                key={id || index}
                className='h-fit w-full transition-transform duration-200 hover:scale-110 active:scale-90'
              >
                <Link href={`/${id}`} className="block">
                  <div className="relative rounded-3xl overflow-hidden w-full aspect-square lg:w-[250px] lg:h-[250px] mb-3">
                    <SkeletonImage
                      src={url}
                      alt={name}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 200px, 250px"
                      quality={90}
                    />
                  </div>
                  <p className="font-semibold text-sm md:text-base">{name}</p>
                </Link>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MostSearchedBreeds;
