import { FunctionComponent } from 'react';

interface UnderlinedTextProps {
  value: string;
}

const UnderlinedText: FunctionComponent<UnderlinedTextProps> = ({ value }) => {
  return (
    <span className="block group transition duration-300 w-fit">
      <p>{value}</p>
      <span className="block max-w-0 group-hover:max-w-prose transition-all duration-700 h-1 bg-brown-100" />
    </span>
  );
};

export default UnderlinedText;
