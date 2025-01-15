import { PreloadResources } from 'app/preload';
import Image from 'next/image';
import Link from 'next/link';
import giardinoLogo from 'public/images/Il-Giardino-di-Lipari/poster.png';
import looperLogo from 'public/images/Looper/sito.png';
import heepLogo from 'public/images/HEEP/qubo.png';
import { EditPencil, SquareCursorSolid, Message } from 'iconoir-react';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center font-medium underline text-neutral-900  dark:text-neutral-100 transition-all duration-300 hover:text-neutral-600 dark:hover:text-neutral-400"
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
        className="flex flex-col overflow-hidden w-full items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className='w-full h-40 sm:h-72 p-1'>
          <Image src={img} alt='' className='h-full object-cover rounded-xl'/>
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
      <h1 className="mb-8 text-2xl">
        <span className="font-semibold">Ciao! I'm Filippo</span><span className="text-neutral-600  dark:text-neutral-400">,<br /> a graphic designer <br className="sm:hidden"/> based in Milan.</span>
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          As someone used to say, I think
          {` `}
          <span className="text-neutral-900  dark:text-neutral-100 font-medium">the key is in the details</span>
          {` `}
          and I'm not done until everything works like I want it to: that's why I'm always satisfied
          with my projects' outcomes.
        </p>

        <p>
          {`Right now I'm studying Digital and Interaction Design MSc at `}
          <span className="not-prose">
            <Badge href="https://polimi.it">
              Politecnico di Milano
            </Badge>
          </span>
          {`, as I've graduated in Communication Design BA in 2024.`}
        </p>
      </div>

      <div className="mt-12 mb-14 w-full">
        <a className="w-max h-full px-6 py-3.5 rounded-full transition-all duration-300 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-neutral-50  dark:text-neutral-800 flex flex-row items-center justify-center gap-1 font-medium shadow-lg dark:shadow-neutral-900 hover:shadow-xl" href="mailto:ciao@filippoalessandrini.com">
          <Message className="h-[18px] -mt-[1.5px] -ms-1" strokeWidth={2.2}/> Get in touch
        </a>
      </div>

      <div className="my-10 flex w-full flex-col space-y-4">
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
        {`As you can see, I usually design brand identities but I also like coding:
        over the past five years, in fact, I've developed several IT projects; you'll
        find some along the way, but if you'd still like to see more of them just check out my `}

        <span className="not-prose">
          <Badge href="https://github.com/FiloAle">
            GitHub repos
          </Badge>
        </span>
        .

        <p>
          I've also already worked with and advised a company on{' '}
          <Link href="/experience">marketing and communication</Link>, reaching
          broader audiences and building a long-lasting corporate identity.
        </p>
        
        <p>
          Have a nice stay!
        </p>
      </div>
    </section>
  );
}