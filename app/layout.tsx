import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { SandpackCSS } from './projects/[slug]/sandpack';
import { Navbar } from './components/nav';
import {
  CheckBadgeIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/24/solid';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://filippoalessandrini.com'),
  title: {
    default: 'Filippo Alessandrini',
    template: '%s | Filippo Alessandrini',
  },
  description: 'Designer and front-end developer.',
  openGraph: {
    title: 'Filippo Alessandrini',
    description: 'Designer and front-end developer.',
    url: 'https://filippoalessandrini.com',
    siteName: 'Filippo Alessandrini',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Filippo Alessandrini',
    card: 'summary_large_image',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-20 flex flex-col sm:flex-row mx-4 mt-8 sm:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-0">
          <Navbar />
          {children}
          <ul className="font-sm mt-8 flex flex-col gap-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-blue-600 dark:hover:text-blue-400"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/_filippoalessandrini_"
              >
                <CheckBadgeIcon className="h-4 w-4 mb-1" />
                <p className="ml-1 h-7">follow me</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-amber-600 dark:hover:text-amber-400"
                rel="noopener noreferrer"
                href="mailto:ciao@filippoalessandrini.com"
              >
                <EnvelopeIcon className="h-4 w-4 mb-1" />
                <p className="ml-1 h-7">text me</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-red-600 dark:hover:text-red-400"
                rel="noopener noreferrer"
                target="_blank"
                href="https://buymeacoffee.com/filippoalessandrini"
              >
                <HeartIcon className="h-4 w-4 mb-1" />
                <p className="ml-1 h-7">buy me a coffee</p>
              </a>
            </li>
          </ul>
          <div className="font-sm mt-16">
            <p className="text-black dark:text-white opacity-30">
              © 2024 Filippo Alessandrini.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}