import Link from 'next/link';
import { FunctionComponent } from 'react';
import CatWikiLogo from '@/public/logo.svg';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className="py-5">
      <Link href="/">
        <CatWikiLogo width={150} />
      </Link>
    </nav>
  );
};

export default Header;
