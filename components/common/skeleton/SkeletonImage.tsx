import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';
import Skeleton from './Skeleton';

type SkeletonImageProps = ImageProps & {
  containerClassName?: string;
};

const SkeletonImage: FC<SkeletonImageProps> = ({
  containerClassName,
  className = '',
  onLoad,
  fill,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true);
    onLoad?.(e);
  };

  if (fill) {
    return (
      <>
        <Image fill {...props} className={className} onLoad={handleLoad} />
        {!loaded && <Skeleton className="absolute inset-0" />}
      </>
    );
  }

  return (
    <div className={`relative ${containerClassName ?? ''}`}>
      <Image
        {...props}
        className={`${loaded ? '' : 'invisible '}${className}`}
        onLoad={handleLoad}
      />
      {!loaded && <Skeleton className="absolute inset-0" />}
    </div>
  );
};

export default SkeletonImage;
