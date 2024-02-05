import Fallback from '@/components/common/fallback/Fallback';
import { FunctionComponent } from 'react';

interface InternalServerErrorProps {}

const InternalServerError: FunctionComponent<InternalServerErrorProps> = () => {
  return (
    <Fallback
      statusCode={500}
      title="Something Went Wrong"
      text="We're sorry for the inconvenience. Please try again later."
      imgSrc="/500.webp"
      alt="Sad Kitten"
    />
  );
};

export default InternalServerError;
