import { FunctionComponent } from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Top5ReasonsCatProps {}

const Top5ReasonsCat: FunctionComponent<Top5ReasonsCatProps> = () => {
  return (
    <>
      <Head>
        <title>CatWiki - Why should you have a cat?</title>
        <meta name="description" content="CatWiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid place-items-center md:mx-52 md:mb-5">
        <Image
          src="/britishShorthair.webp"
          width={600}
          height={600}
          alt="British Shorthair Cat"
          className="mb-10 rounded-3xl"
        />
        <div className="grid justify-center md:text-justify [&>h3]:font-semibold [&>h3]:text-3xl [&>p]:mb-10">
          <p>
            Cats are one of the best pets you can get. If you are hesitant to
            take on the responsibility of owning a pet, you might want to look
            again at the benefits of having a cat. They are sweet, quiet and
            independent, and hearing a cat&apos;s purr can melt your heart. Here
            are the top five reasons you should own a cat.
          </p>
          <h3>1. Cats can bathe themselves</h3>
          <p>
            Cats are clean pretty much 100 percent of the time. That means you
            never have to take the time out of your day to perform the somewhat
            painstaking task of washing and grooming your cat
          </p>
          <h3>2. Cats will keep your house and yard rodent-free</h3>
          <p>
            If you are not a fan of rats, chipmunk, voles or mice in your home,
            owning a cat will take care of that right away. Your cat may even
            bring you its prize to make you proud!
          </p>
          <h3>3. Cats are low-maintenance and independent</h3>
          <p>
            If you think you do not have the time or energy to own a pet, then a
            cat could be perfect for you. Taking care of a cat requires less
            responsibility than some other animals. Those who have full-time
            jobs can rest easy, knowing that their kitty can take care of itself
            for the most part. And when you do have extra time, cuddling up with
            your cat will feel better than ever.
          </p>
          <h3>4. Cats are an eco-friendly pet choice</h3>
          <p>
            Living a “green” lifestyle can be difficult, but a cat is a great
            choice for potential pet owners looking to stay eco-friendly.
            Studies show that the lifetime resources needed to feed and care for
            a cat have a smaller carbon footprint than for other animals. Plus,
            most cats prefer fish to beef or corn, which is better for the
            environment. You can feel good about owning your kitty.
          </p>
          <h3>5. Cats can help reduce stress</h3>
          <p>
            We all get stressed out, and people have many different ways of
            relieving their stress. Cat owners can reduce tensions by just
            stroking their furry friend&apos;s head. Petting a cat releases
            endorphins into the brain, which makes you happier. Also, cats have
            the softest fur! There are so many more reasons that you should get
            a cat to fill your home with love. Check out your local shelter to
            find a kitty that really needs a home.
          </p>
        </div>
      </div>
    </>
  );
};

export default Top5ReasonsCat;
