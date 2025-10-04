import { FunctionComponent } from 'react';
import ImageGallery from '../common/imageGallery/ImageGallery';
import CatAttribute from './CatAttribute';
import CatAttributeLevel from './CatAttributeLevel';
import Image from 'next/image';
import { CatBreedDetails } from '@/types/common';

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

interface CatDetailsProps {
  images: GalleryImage[];
  details: CatBreedDetails;
}

const catDetails: FunctionComponent<CatDetailsProps> = ({
  images,
  details,
}) => {
  return (
    <>
      <div className="grid md:grid-cols-1">
        <Image
          src={images?.at(0)?.src || ''}
          alt={details?.id}
          width={300}
          height={300}
          className="col-end-1 rounded-3xl h-[250px] object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="md:ml-20 [&>*]:mb-5 mt-3">
          <h3 className="text-4xl font-semibold mb-5">{details?.name}</h3>
          <p>{details?.description}</p>
          <div className="[&>p]:font-semibold [&>span]:mb-5">
            <CatAttribute name="Temperament" value={details?.temperament} />
            <CatAttribute name="Origin" value={details?.origin} />
            <CatAttribute
              name="Life Span"
              value={`${details?.life_span} years`}
            />
            <CatAttributeLevel
              name="Adaptability"
              level={details?.adaptability}
            />
            <CatAttributeLevel
              name="Affection Level"
              level={details?.affection_level}
            />
            <CatAttributeLevel
              name="Child Friendly"
              level={details?.child_friendly}
            />
            <CatAttributeLevel
              name="Intelligence"
              level={details?.intelligence}
            />
            <CatAttributeLevel
              name="Health issues"
              level={details?.health_issues}
            />
            <CatAttributeLevel
              name="Social needs"
              level={details?.social_needs}
            />
            <CatAttributeLevel
              name="Stranger friendly"
              level={details?.stranger_friendly}
            />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <p className="text-4xl font-semibold mb-10">Other Photos</p>
        <ImageGallery
          images={images}
          thumbnailClassName="max-w-none h-[250px] w-[300px] object-cover rounded-3xl"
        />
      </div>
    </>
  );
};

export default catDetails;
