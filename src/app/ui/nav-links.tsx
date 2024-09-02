'use client';

import {
  HomeIcon,
  PuzzlePieceIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Games',
    href: '/games',
    icon: PuzzlePieceIcon,
  },
  { name: 'Add Game', href: '/add-game', icon: PlusIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-16 grow items-center justify-center gap-2 bg-tinybird-gray-background p-3 font-medium hover:bg-tinybird-mint-green hover:text-tinybird-space-cadet md:flex-none md:justify-start md:p-2 md:px-3',
              {
                 'bg-tinybird-mint-green': pathname === link.href,
              },
            )}
          >
            <LinkIcon className='w-6' />
                <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}