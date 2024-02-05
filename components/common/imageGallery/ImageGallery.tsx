import { FC, useState } from 'react';
import {
  Gallery,
  Image as ImageProps,
  ThumbnailImageComponentImageProps,
} from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'yet-another-react-lightbox/styles.css';

interface renderThumbnailsProps {
  imageProps: ThumbnailImageComponentImageProps;
  thumbnailClassName: string;
}

interface ImageGallery {
  images: ImageProps[];
  className?: string;
  thumbnailClassName: string;
}

const renderThumbnails: FC<renderThumbnailsProps> = ({
  imageProps,
  thumbnailClassName,
}) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="h-full"
  >
    <Image
      src={imageProps?.src}
      alt={imageProps?.alt}
      height={500}
      width={500}
      className={`cursor-pointer ${thumbnailClassName}`}
    />
  </motion.div>
);

const ImageGallery: FC<ImageGallery> = ({
  images,
  className = '',
  thumbnailClassName,
}) => {
  const [index, setIndex] = useState<number>(-1);
  const handleClick = (index: number) => setIndex(index);

  return (
    <div className={className}>
      <Gallery
        images={images}
        onClick={handleClick}
        thumbnailImageComponent={({ imageProps }) =>
          renderThumbnails({ imageProps, thumbnailClassName })
        }
        enableImageSelection={false}
        rowHeight={300}
        margin={10}
        tileViewportStyle={{ background: 'white', height: '100%' }}
      />
      <Lightbox
        slides={images}
        animation={{ fade: 700 }}
        controller={{ touchAction: 'pan-y' }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default ImageGallery;
