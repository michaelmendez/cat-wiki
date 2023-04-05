import Link from 'next/link';
import { FunctionComponent } from 'react';
import CatWikiLogo from '@/public/logo.svg';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header role="navigation" className="py-5">
      <Link href="/">
        <CatWikiLogo width={150} />
      </Link>
    </header>
  );
};

export default Header;
