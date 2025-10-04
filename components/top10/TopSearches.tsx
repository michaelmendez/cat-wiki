import Link from 'next/link';
import { FunctionComponent } from 'react';
import { CatBreedImageData } from '@/types/common';
import UnderlinedText from '../common/underline/UnderlinedText';
import Image from 'next/image';

interface Top10Props {
  breeds: CatBreedImageData[];
}

const TopSearches: FunctionComponent<Top10Props> = ({ breeds }) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-12">Top 10 most searched breeds</h1>
      {breeds?.map(
        ({ id, url, name, description }, index: number) => (
          <div key={id} className="grid md:grid-cols-1 mb-10">
            <Image
              src={url}
              alt={id}
              width={300}
              height={200}
              className="col-end-1 rounded-3xl h-[250px] object-cover"
            />
            <div className="md:ml-8 mt-5">
              <Link href={id} className="text-4xl font-semibold mt-3">
                <UnderlinedText value={`${index + 1}. ${name}`} />
              </Link>
              <p className="md:w-1/2 mt-5">{description}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default TopSearches;
