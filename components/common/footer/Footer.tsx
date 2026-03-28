import CatWikiLogo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaGithub } from 'react-icons/fa';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="mb-auto rounded-t-[40px] bg-black grid md:grid-cols-2 grid-cols-1 md:place-items-center md:h-20 px-10 py-3">
      <Image src={CatWikiLogo} alt="CatWiki Logo" className="mr-auto brightness-0 invert-[1] h-auto" width={150} height={50} />
      <Link
        href="https://github.com/michaelmendez/cat-wiki"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white md:ml-auto mt-2 flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <FaGithub fontSize={24} />
        <span className="font-semibold">Created by Michael Méndez</span>
      </Link>
    </footer>
  );
};

export default Footer;
