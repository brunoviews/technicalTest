'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  const sectionTitle = pathname === '/compare' ? 'Compare Teams' : 'Team Statistics';
  return (
    <>
      <header className="w-full bg-white shadow sticky top-0 z-20">
        <div className="max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
          <span className="text-xl font-bold text-blue-700 tracking-tight">{sectionTitle}</span>
        </div>
      </header>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white border-t border-gray-200 flex justify-around items-center py-2 z-30 shadow-lg rounded-t-2xl">
        <Link href="/" className={`flex flex-col items-center font-semibold text-sm transition rounded-lg px-3 py-1 ${pathname === '/' ? 'bg-blue-900 text-white' : 'text-blue-700 hover:text-blue-900'}`}>
          {/* Stadium icon */}
          <svg className={`w-6 h-6 mb-1 ${pathname === '/' ? 'stroke-white' : 'stroke-blue-700'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="7" rx="9" ry="4" />
            <path d="M3 7v5c0 2.21 4.03 4 9 4s9-1.79 9-4V7" />
            <path d="M3 12v2c0 2.21 4.03 4 9 4s9-1.79 9-4v-2" />
          </svg>
          Teams
        </Link>
        <Link href="/compare" className={`flex flex-col items-center font-semibold text-sm transition rounded-lg px-3 py-1 ${pathname === '/compare' ? 'bg-blue-900 text-white' : 'text-blue-700 hover:text-blue-900'}`}>
          {/* Two squares with arrows between them */}
          <svg className={`w-6 h-6 mb-1 ${pathname === '/compare' ? 'stroke-white' : 'stroke-blue-700'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="6" height="6" rx="1" />
            <rect x="15" y="11" width="6" height="6" rx="1" />
            <path d="M9 10h6m0 0-2-2m2 2-2 2" />
            <path d="M15 14H9m0 0 2 2m-2-2 2-2" />
          </svg>
          Compare
        </Link>
      </nav>
    </>
  );
}
