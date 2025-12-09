import Link from 'next/link';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import CatWikiLogo from '@/public/logo.svg';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className="py-5">
      <Link href="/">
        <Image src={CatWikiLogo} alt="CatWiki Logo" width={150} height={50} />
      </Link>
    </nav>
  );
};

export default Header;
