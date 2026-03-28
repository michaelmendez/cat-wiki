import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 ${className}`} />
);

export default Skeleton;
