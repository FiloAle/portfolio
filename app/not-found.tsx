import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn't exist.
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        If you expected to see something here, let me know via <Link href="mailto:ciao@filippoalessandrini.com">ciao@filippoalessandrini.com</Link>.
      </p>
    </section>
  );
}
