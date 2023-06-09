import { FunctionComponent } from 'react';

interface LevelBarProps {
  level: number;
}

const LevelBar: FunctionComponent<LevelBarProps> = ({ level }) => {
  return (
    <div className="grid grid-cols-5 md:w-[300px] w-[150px]">
      {[...Array(5)].map((_, index: number) => (
        <div
          key={index}
          className={`${
            level >= index + 1 ? 'bg-brown-100' : 'bg-gray-200'
          } h-3 rounded-full mr-1`}
        />
      ))}
    </div>
  );
};

export default LevelBar;
