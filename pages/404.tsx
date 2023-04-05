import { FC } from 'react';
import Fallback from '@/components/common/fallback/Fallback';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  return (
    <Fallback
      statusCode={404}
      title="4 0 4"
      text="Sorry, We couldn't find what you are looking for!"
      imgSrc="/404.webp"
      alt="British Shorthair Cat"
    />
  );
};

export default NotFound;
