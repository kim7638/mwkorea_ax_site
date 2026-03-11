import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-display font-700 text-gray-100 mb-4">404</p>
        <h1 className="text-2xl font-display font-semibold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
