import { FunctionComponent } from 'react';
import Image from 'next/image';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';

interface ArticleProps {}

const Article: FunctionComponent<ArticleProps> = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:my-20 my-10">
      <div className="self-center place-self-center md:w-3/4">
        <span>
          <div className="border-solid border-b-4 border-brown-900 w-14 h-2" />
          <h3 className="md:text-6xl text-2xl font-bold mb-10">
            Why should you have a cat?
          </h3>
        </span>
        <p className="md:w-2/3 md:mb-1 mb-5">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels.
        </p>
        <Link
          href="/top-5-reasons-cat"
          className="flex justify-start mt-5 items-center text-brown-100 mb-5"
        >
          <p>READ MORE</p>
          <MdArrowRightAlt fontSize={24} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5 justify-items-end">
          <Image
            src="/image2.webp"
            alt="Cat Photo 1"
            width={350}
            height={200}
            sizes="(max-width: 768px) 50vw, 350px"
            loading="lazy"
          />
          <Image
            src="/image1.webp"
            alt="Cat Photo 2"
            width={250}
            height={200}
            sizes="(max-width: 768px) 50vw, 250px"
            loading="lazy"
          />
        </div>
        <Image
          src="/image3.webp"
          alt="Cat Photo 3"
          width={250}
          height={200}
          sizes="(max-width: 768px) 50vw, 250px"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Article;
