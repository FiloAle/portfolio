import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from 'app/db/projects';

export const metadata = {
  title: 'Projects',
  description: 'Discover more on my recent projects.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className="w-full">
      <h1 className="font-medium text-2xl mb-8">
        My recent projects
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here you can find some of my latest design projects, ordered by the most recent one.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
              <p className="h-6 text-neutral-600 dark:text-neutral-400">
                {post.metadata.summary}
              </p>
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}
