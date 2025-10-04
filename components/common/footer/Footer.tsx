import { FunctionComponent } from 'react';
import CatWikiLogo from '@/public/logo.svg';
import Link from 'next/link';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="mb-auto rounded-t-[40px] bg-black grid md:grid-cols-2 grid-cols-1 md:place-items-center md:h-20 px-10 py-3">
      <CatWikiLogo className="mr-auto brightness-0 invert-[1]" width={150} />
      <span className="text-white md:m-auto mt-2 w-full md:text-right">
        &copy; Created by&nbsp;
        <Link
          href="https://github.com/michaelmendez"
          className="underline underline-offset-2 font-semibold"
        >
          Michael Méndez
        </Link>
        &nbsp;- devChallenge.io {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
