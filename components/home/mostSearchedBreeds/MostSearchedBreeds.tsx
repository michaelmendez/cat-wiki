import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { motion } from 'framer-motion';
import type { CatBreedImageData } from '@/types/common';

export interface MostSearchedBreedsProps {
  breeds: CatBreedImageData[];
}

const MostSearchedBreeds: FunctionComponent<MostSearchedBreedsProps> = ({
  breeds,
}) => {
  return (
    <div
      className={`grid ${
        breeds?.length ? 'grid-rows-3' : 'grid-rows-1'
      } bg-stone-300`}
    >
      <span className="row-span-full font-semibold">
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
        <div className="grid grid-rows-2">
          <div className="grid lg:grid-cols-2 row-span-full my-10">
            <h3 className="md:text-6xl text-2xl font-bold mb-5 lg:mb-0">
              66+ Breeds For You to Discover
            </h3>
            <Link className="text-right self-end" href="/top10">
              <div className="flex lg:justify-end items-center justify-items-end text-brown-100">
                <p>SEE MORE</p>
                <MdArrowRightAlt fontSize={24} />
              </div>
            </Link>
          </div>
          <div
            className={`md:flex grid grid-cols-2 ${
              breeds?.length > 2 ? 'justify-between' : 'justify-around'
            } gap-6 md:mb-1 mb-10`}
          >
            {breeds?.map(({ id, url, name }, index: number) => (
              <motion.button
                key={id || index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='h-fit'
              >
                <Link href={`/${id}`} className="">
                  <Image
                    src={url}
                    alt={name}
                    width={350}
                    height={350}
                    className="object-center object-cover rounded-3xl lg:h-[250px] mb-5 h-[200px]"
                    priority={index === 0}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 350px"
                  />
                  <p className="font-semibold">{name}</p>
                </Link>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MostSearchedBreeds;
