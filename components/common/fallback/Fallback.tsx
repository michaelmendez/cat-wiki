import Head from 'next/head';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FallbackProps {
  statusCode: number;
  title: string;
  text: string;
  imgSrc: string;
  alt: string;
}

const Fallback: FC<FallbackProps> = ({
  statusCode,
  title,
  text,
  imgSrc,
  alt,
}) => {
  return (
    <>
      <Head>
        <title>{`CatWiki - ${statusCode}`}</title>
        <meta name="description" content="Internal Server Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex absolute top-0 right-0 h-screen w-screen justify-center items-center bg-white md:px-auto px-8">
        <div className="grid text-center">
          <Image
            src={imgSrc}
            height={450}
            width={450}
            alt={alt}
            className="place-self-center"
          />
          <h1 className="mt-1 text-[36px] font-bold text-brown-900 lg:text-[50px]">
            {title}
          </h1>
          <p className="mt-3 text-lg text-brown-100">{text}</p>
          {statusCode === 404 && (
            <Link
              href="/"
              className="bg-brown-900 text-white rounded-3xl p-3 w-28 place-self-center mt-5"
            >
              Go Back
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Fallback;
