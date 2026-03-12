import Link from 'next/link';
import { Image as ImageIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">PhotoShare</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Feed</Link>
          <Link href="#" className="hover:text-indigo-600 transition-colors">Explore</Link>
          <Link href="#" className="hover:text-indigo-600 transition-colors">Profile</Link>
        </nav>
        <div className="flex items-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}
