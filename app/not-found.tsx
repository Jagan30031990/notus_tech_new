import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Notus Technologies',
  description: 'The page you are looking for could not be found. Return to Notus Technologies homepage.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-800">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    );
  }