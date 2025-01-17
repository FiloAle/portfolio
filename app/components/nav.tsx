import Link from 'next/link';
import { HomeSimpleDoor, AppleShortcuts, Post, Minus, Instagram, Mail, CoffeeCup } from 'iconoir-react';

function NavButton(props) {
  return (
    <Link
      {...props}
      className="transition-all hover:text-neutral-950 hover:bg-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-950 flex align-middle relative pt-2.5 py-2 px-4 gap-1 dark:bg-neutral-900 bg-neutral-200 rounded-full max-sm:text-xs"
    />
  );
}

function SocialButton(props) {
  return (
    <Link
      {...props}
      target='_blank'
      className="transition-all hover:text-neutral-950 hover:bg-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-950 flex align-middle relative pt-2.5 py-2 px-2 gap-1 dark:bg-neutral-900 bg-neutral-200 rounded-full max-sm:text-xs"
    />
  );
}

export function Navbar() {
  return (
    <div className="w-lvw tracking-tight fixed top-0 z-50">

      <div className="w-full h-16 sm:h-24 xs:max-sm:opacity-0 backdrop-blur-2xl bg-neutral-50 dark:bg-neutral-950"/>

      <div className="w-full h-full flex justify-center max-sm:px-6">
        <div className="max-w-xl w-full h-full xs:max-sm:w-max -mt-8 backdrop-blur-2xl rounded-full flex flex-row items-center justify-center">
          <nav
            className="w-full px-3.5 py-3.5 sm:py-3 rounded-full border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 opacity-80 shadow-lg dark:shadow-2xl"
            id="nav"
          >
            <div className="flex flex-row items-center gap-2 justify-between">
              <NavButton href="/">
                <HomeSimpleDoor className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                <span className='max-sm:pt-[2px]'>Home</span>
              </NavButton>

              <NavButton href="/projects">
                <AppleShortcuts className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                <span className='max-sm:pt-[2px]'>Projects</span>
              </NavButton>

              <NavButton href="/experience">
                <Post className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                <span className='max-sm:pt-[2px]'>Experience</span>
              </NavButton>

              <div className="max-sm:hidden flex flex-row items-center gap-2">
                <Minus className='rotate-90 -m-3 opacity-10' height={36} width={36}/>

                <SocialButton href="https://instagram.com/_filippoalessandrini_">
                  <Instagram className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                </SocialButton>

                <SocialButton href="mailto:ciao@filippoalessandrini.com">
                  <Mail className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                </SocialButton>

                <SocialButton href="https://buymeacoffee.com/filippoalessandrini">
                  <CoffeeCup className='max-sm:pb-[4px] pb-[1px]' height={22}/>
                </SocialButton>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
