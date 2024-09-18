import type { Metadata } from 'next';

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
          love and, along the way, shape the future of web and graphic design.
          Here's a summary of my experiences so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Politecnico di Milano</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Student, since 2021
        </p>
        <p>
          I started my design experience at <a href="https://polimi.it" target="_blank">Politecnico di Milano</a> more
          than three years ago getting to know with Communication Design. Now, after my BA graduation, I'm happy to continue
          my path at PoliMi attending an MSc about Digital and Interaction Design.
        </p>
        <ul>
          <li>
            Digital and Interaction Design MSc <span className="text-neutral-600 dark:text-neutral-400">(since 2024)</span>
          </li>
          <li>
            Communication Design BA <span className="text-neutral-600 dark:text-neutral-400">(2021-2024)</span>
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">ITT Blaise Pascal</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Student, 2016-2021
        </p>
        <p>
          My passion for technology led me to study Information Technology and Telecoms 
          at <a href="https://www.ispascalcomandini.it/itt-b-pascal/" target="_blank">ITT Blaise Pascal</a>,
          where I had the opportunity to develop several skills and methods I'm still making advantage of nowadays.
          There, I've learned the basics of Computer Science and coding, having to deal with different tools and
          programming languages such as:
        </p>
        <ul>
          <li>
            C# and C++
          </li>
          <li>
            Kotlin
          </li>
          <li>
            Python
          </li>
        </ul>
      </div>
    </section>
  );
}
