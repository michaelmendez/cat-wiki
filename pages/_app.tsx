import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import ErrorBoundary from '@/components/common/error/ErrorBoundary';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
