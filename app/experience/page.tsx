import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'A summary of my past experiences.',
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">My experiences so far</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products both my clients and their users{' '}
          <Link href="/blog/developer-experience">love</Link> and, along the
          way, shape the future of web and graphic design.
          Here's a summary of my experiences so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Politecnico di Milano</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Student, since 2021
        </p>
        <p>
          I started my Communication Design experience at <a href="https://polimi.it" target="_blank">Politecnico di Milano</a> after
          I got a high school diploma in Information Technology and Telecoms
          at <a href="https://www.ispascalcomandini.it/itt-b-pascal/" target="_blank">ITT Blaise Pascal</a>.
        </p>
        <ul>
          <li>
            More infos are coming soon!
          </li>
        </ul>
      </div>
    </section>
  );
}
