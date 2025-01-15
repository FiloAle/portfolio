import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'A summary of my past experiences.',
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">My experience so far</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here's a summary of knowledge and skills I have learnt and developed so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Politecnico di Milano</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Student, since 2021
        </p>
        <p>
          I've started my design experience at <a href="https://polimi.it" target="_blank">Politecnico di Milano</a> more
          than three years ago getting to know with Communication Design. Now, after my BA graduation, I'm happy to continue
          my path at PoliMi attending an MSc about Digital and Interaction Design.
        </p>
        <ul>
          <li>
            Digital and Interaction Design MSc <span className="text-neutral-600 dark:text-neutral-400">(since 2024)</span>
          </li>
          <li>
            Communication Design BA <span className="text-neutral-600 dark:text-neutral-400">(2021 – 2024)</span>
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">CopySystem SnC</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Marketing & Communication strategist, 2022 – 2023
        </p>
        <p>
          During my second year at Politecnico di Milano, I've had the opportunity to apply my
          communication design skills in a real world case scenario by working at CopySystem.
          There, I've been collaborating with a workgroup in order to deliver both digital and
          physical artifacts, continuously developing a deeper knowledge in fields regarding:
        </p>
        <ul>
          <li>
            Graphic design
          </li>
          <li>
            Editorial design
          </li>
          <li>
            Marketing
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">ITT Blaise Pascal</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Student, 2016 – 2021
        </p>
        <p>
          My passion for technology led me to study Information Technology and Telecoms 
          at <a href="https://www.ispascalcomandini.it/itt-b-pascal/" target="_blank">ITT Blaise Pascal</a>,
          where I've had the opportunity to develop several skills and methods I'm still making advantage of nowadays.
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
