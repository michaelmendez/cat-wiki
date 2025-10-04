import { FunctionComponent, memo } from 'react';

interface CatAttributeProps {
  name: string;
  value: string;
}

const CatAttribute: FunctionComponent<CatAttributeProps> = ({
  name,
  value,
}) => {
  return (
    <span className="grid grid-cols-2 [&>p]:col-end-1 [&>p]:mr-3 [&>p]:font-semibold">
      <p>{name}:</p>
      {value}
    </span>
  );
};

export default memo(CatAttribute);
