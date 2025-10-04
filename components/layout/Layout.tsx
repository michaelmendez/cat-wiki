import { Montserrat } from 'next/font/google';
import { FunctionComponent, ReactNode } from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';

const montserrat = Montserrat({ subsets: ['latin'], weight: '500' });

interface SearchLayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<SearchLayoutProps> = ({
  className = '',
  children,
}) => {
  return (
    <div className="lg:mx-36 mx-5 flex flex-col min-h-screen">
      <Header />
      <main className={`${montserrat.className} ${className} grow`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
