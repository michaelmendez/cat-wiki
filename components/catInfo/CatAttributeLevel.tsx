import { FunctionComponent, memo } from 'react';
import LevelBar from '@/components/catInfo/LevelBar';

interface CatAttributeLevelProps {
  name: string;
  level: number;
}

const CatAttributeLevelProps: FunctionComponent<CatAttributeLevelProps> = ({
  name,
  level,
}) => {
  return (
    <span className="grid grid-cols-2 items-center">
      <p className="col-end-1 mr-5 font-semibold">{name}:</p>
      <LevelBar level={level} />
    </span>
  );
};

export default memo(CatAttributeLevelProps);
