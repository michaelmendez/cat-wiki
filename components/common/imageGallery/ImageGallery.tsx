import { FC, useState, useCallback, memo, lazy, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'yet-another-react-lightbox/styles.css';

const Lightbox = lazy(() => import('yet-another-react-lightbox'));

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGallery {
  images: ImageType[];
  className?: string;
  thumbnailClassName: string;
}

const ImageGallery: FC<ImageGallery> = memo(({
  images,
  className = '',
  thumbnailClassName,
}) => {
  const [index, setIndex] = useState<number>(-1);
  const handleClick = useCallback((clickedIndex: number) => setIndex(clickedIndex), []);
  const handleClose = useCallback(() => setIndex(-1), []);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {images.map((image, idx) => (
          <motion.div
            key={image.src}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${thumbnailClassName}`}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      {index >= 0 && (
        <Suspense fallback={null}>
          <Lightbox
            slides={images}
            animation={{ fade: 700 }}
            controller={{ touchAction: 'pan-y' }}
            open={index >= 0}
            index={index}
            close={handleClose}
          />
        </Suspense>
      )}
    </div>
  );
});

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;
