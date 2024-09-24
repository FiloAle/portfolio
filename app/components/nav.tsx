import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/experience': {
    name: 'Experience',
  },
};

export function Navbar() {
  return (
    <div className="w-full mb-16 pt-6 min-[480px]:pt-10 tracking-tight sticky top-0 bg-white dark:bg-[#111010] rounded-b-xl z-50">
        <nav
          className="flex flex-row items-start relative p-3 fade md:overflow-auto scroll-pr-6 rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 shadow-lg dark:shadow-2xl"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
    </div>
  );
}
