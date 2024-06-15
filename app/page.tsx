import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getViewsCount,
} from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Ciao! I'm Filippo 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a graphic designer and front-end developer. 👨🏻‍💻`}
        <br/>
        {`I'm currently `}
        <Link href="/work">studying</Link>
        {` Communication Design at `}
        <span className="not-prose">
          <Badge href="https://polimi.it">
            Politecnico di Milano
          </Badge>
        </span>
        {`, where I am going to graduate this July. In my free time I often like to code random things like a real geek. 🤓`}
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I usually design brand identities and guidelines, but as you can see from
          this portfolio I often like to build some websites too!
          In my spare time you'd probably find me watching YouTube videos
          or just making fancy stuff with my 3D printer.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Over the past five years I've developed several projects both in
          graphic design and coding fields; you'll find some along the way,
          but if you'd still like to see more of them just visit my personal `}
          <span className="not-prose">
            <Badge href="https://github.com/FiloAle">
            <svg
              width="12"
              height="12"
              role="img"
              aria-label="GitHub logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#github" />
            </svg>
              GitHub profile
            </Badge>
          </span>.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've already worked with and advised a company on{' '}
          <Link href="/blog/developer-marketing">marketing</Link>{' and '}
          <Link href="/blog/devrel">online communication</Link>, reaching
          broader audiences and building a long-lasting corporate identity.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/_filippoalessandrini_"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="mailto:ciao@filippoalessandrini.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">text me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
