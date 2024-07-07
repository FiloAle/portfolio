import { getBlogPosts } from 'app/db/projects';

export default async function sitemap() {
  let projects = getBlogPosts().map((post) => ({
    url: `https://filippoalessandrini.com/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/projects', '/work'].map((route) => ({
    url: `https://filippoalessandrini.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projects];
}
