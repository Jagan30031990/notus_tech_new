'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
        Something went wrong
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
        We&apos;re sorry. Please try again in a moment.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
