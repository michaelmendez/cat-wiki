import { FC, lazy, memo, Suspense, useCallback, useState } from 'react';
import 'yet-another-react-lightbox/styles.css';
import SkeletonImage from '../skeleton/SkeletonImage';

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
          <div
            key={image.src}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={() => handleClick(idx)}
          >
            <SkeletonImage
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${thumbnailClassName}`}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
            />
          </div>
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
