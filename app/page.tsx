import {
  AcademicCapIcon,
  CommandLineIcon,
  SwatchIcon,
} from '@heroicons/react/24/solid';
import { PreloadResources } from 'app/preload';
import Image from 'next/image';
import Link from 'next/link';
import giardinoLogo from 'public/images/home/giardino_logo.png';
import giardinoPoster from 'public/images/home/giardino_poster.png';
import looperLogo from 'public/images/home/looper_logo.png';
import looperPoster from 'public/images/home/looper_poster.png';
import portorossoLogo from 'public/images/home/portorosso_logo.png';
import portorossoTickets from 'public/images/home/portorosso_tickets.png';
import padiglioneLogo from 'public/images/home/padiglione_logo.png';
import padiglioneCopertina from 'public/images/home/padiglione_copertina.png';
import heepLogo from 'public/images/home/heep_logo.png';
import heepQubo from 'public/images/home/heep_qubo.png';

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
        href={`/projects/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:rotate-45 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium">Ciao! I'm <span className="transition-all hover:text-blue-600 dark:hover:text-blue-400">Filippo</span> 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`If you don't know me yet, I'm a graphic designer and front-end developer. 👨🏻‍💻 I'm currently `}
        <Link href="/work">studying</Link>
        {` Communication Design at `}
        <span className="not-prose">
          <Badge href="https://polimi.it">
            <AcademicCapIcon className="h-3.5 w-3.5 me-1" />
            Politecnico di Milano
          </Badge>
        </span>
        {`, where I have already graduated once; but don't forget I often find myself coding random things like a real geek! 🤓
        Down below you can see some of my most recent projects: take a look! 👀`}
      </p>
      <div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-4 sm:grid-cols-4 gap-4 my-8">
      <Link className="group relative col-span-2 row-span-2" href="/projects">
          <Image
            alt="HEEP logo"
            title="HEEP logo"
            src={heepLogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-100 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            alt="A prototype of Qubo made by HEEP"
            title="A prototype of Qubo made by HEEP"
            src={heepQubo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-0 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <Link className="group relative col-span-2 h-40" href="/projects">
        <Image
            alt="Il Giardino di Lipari logo"
            title="Il Giardino di Lipari logo"
            src={giardinoLogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-100 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            alt="A visual application of Il Giardino di Lipari's brand identity"
            title="A visual application of Il Giardino di Lipari's brand identity"
            src={giardinoPoster}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-0 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <Link className="group relative col-span-1 sm:col-span-2 max-sm:h-40 row-span-2" href="/projects">
          <Image
            alt="Looper logo"
            title="Looper logo"
            src={looperLogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-100 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            alt="One of a series of posters made for the Looper project"
            title="One of a series of posters made for the Looper project"
            src={looperPoster}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-0 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <Link className="group relative col-span-1 sm:col-span-2 max-sm:h-40 row-span-2" href="/projects">
          <Image
            alt="A photo of the final book"
            title="A photo of the final book"
            src={padiglioneLogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-100 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            alt="The front cover of the book written for the project"
            title="The front cover of the book written for the project"
            src={padiglioneCopertina}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-0 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <Link className="group relative col-span-1 sm:col-span-2 h-40 max-sm:hidden" href="/projects">
        <Image
            alt="Portorosso logo"
            title="Portorosso logo"
            src={portorossoLogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-100 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            alt="Train tickets made for Portorosso's new brand identity"
            title="Train tickets made for Portorosso's new brand identity"
            src={portorossoTickets}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="opacity-0 rounded-lg object-cover sm:object-center transition-all group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          As you can see, I usually design brand identities, 
          but I reeeally like to build some fancy websites too!
          In my spare time you'd probably find me watching YouTube videos or
          just making creative stuff with my 3D printer.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Over the past five years I've developed several projects both in
          graphic design and coding fields; you'll find some along the way,
          but if you'd still like to see more of them just check out my personal `}
          <span className="not-prose">
            <Badge href="https://github.com/FiloAle">
              <CommandLineIcon className="h-3.5 w-3.5 me-1" />
              GitHub repos
            </Badge>
          </span>
          {` or my `}
          <span className="not-prose">
            <Badge href="https://behance.net/filippoalessan1">
              <SwatchIcon className="h-3.5 w-3.5 me-1" />
              Behance projects
            </Badge>
          </span>
          .
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
          <Link href="/blog/developer-marketing">marketing</Link>
          {' and '}
          <Link href="/blog/devrel">online communication</Link>, reaching
          broader audiences and building a long-lasting corporate identity.
        </p>
      </div>
    </section>
  );
}