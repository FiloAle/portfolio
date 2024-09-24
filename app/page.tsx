import {
  AcademicCapIcon,
  CommandLineIcon,
  SwatchIcon,
} from '@heroicons/react/24/solid';
import { PreloadResources } from 'app/preload';
import Image from 'next/image';
import Link from 'next/link';
import giardinoLogo from 'public/images/Il-Giardino-di-Lipari/logo.png';
import looperLogo from 'public/images/Looper/logo.png';
import heepLogo from 'public/images/HEEP/logo.png';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 mx-0.5 px-2 py-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-100 dark:hover:border-neutral-200 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
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

function BlogLink({ slug, name, img }) {
  return (
    <div className="group">
      <a
        href={`/projects/${slug}`}
        className="flex flex-col overflow-hidden w-full items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className='w-full h-40 sm:h-72 p-1'>
          <Image src={img} alt='' className='h-full object-cover rounded-lg'/>
        </div>
        <div className='flex w-full items-center justify-between px-4 py-3'>
          <div className="flex flex-col">
            <p className="font-medium transition-colors duration-300 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400">
              {name}
            </p>
          </div>
          <div className="transform text-neutral-900 transition-all duration-300 group-hover:rotate-45 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400">
            <ArrowIcon />
          </div>
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
        <Link href="/experience">studying</Link>
        {` Digital and Interaction Design MSc at `}
        <span className="not-prose">
          <Badge href="https://polimi.it">
            <AcademicCapIcon className="h-3.5 w-3.5 me-1" />
            Politecnico di Milano
          </Badge>
        </span>
        {`, as I've already graduated in Communication Design BA! 🤓
           Down below you can see some of my latest projects. Take a look! 👀`}
        </p>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="The HEEP Project"
          slug="HEEP"
          img={heepLogo}
        />
        <BlogLink
          name="The making of Looper"
          slug="Looper" 
          img={looperLogo}
        />
        <BlogLink
          name="Il Giardino di Lipari's brand identity"
          slug="Il-Giardino-di-Lipari"
          img={giardinoLogo}
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
          {` As you can see, I usually design brand identities but I really like building 
          some fancy websites too: over the past five years, in fact, I've developed several 
          projects both in graphics design and coding fields; you'll find some along the way,
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
        <p>
          I've also already worked with and advised a company on{' '}
          <Link href="/experience">marketing and communication</Link>, reaching
          broader audiences and building a long-lasting corporate identity.
        </p>
        <p>
          Have a nice stay! ✨
        </p>
      </div>
    </section>
  );
}