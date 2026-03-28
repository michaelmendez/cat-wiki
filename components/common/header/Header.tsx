import CatWikiLogo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className="py-5 flex justify-start">
      <Link href="/">
        <Image src={CatWikiLogo} alt="CatWiki Logo" width={220} height={75} className="h-auto" />
      </Link>
    </nav>
  );
};

export default Header;
