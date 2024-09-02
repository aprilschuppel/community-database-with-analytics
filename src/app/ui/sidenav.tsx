import Link from 'next/link';
import NavLinks from './nav-links';
import Logo from './logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col shadow-md">
      <Link
        className="flex h-24 bg-tinybird-mint-green"
        href="/"
      >
        <div className="w-full text-tinybird-space-cadet mb-auto">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-col justify-between">
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-tinybird-gray-background md:block"></div>
      </div>
    </div>
  );
}