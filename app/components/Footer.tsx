export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
          Mobile Works Korea
        </p>

        <nav className="flex gap-6">
          <a href="/about" className="text-xs text-gray-400 transition-colors hover:text-gray-700">
            About
          </a>
          <a
            href="/portfolio/list"
            className="text-xs text-gray-400 transition-colors hover:text-gray-700"
          >
            Works
          </a>
          <a
            href="/contact"
            className="text-xs text-gray-400 transition-colors hover:text-gray-700"
          >
            Contact
          </a>
        </nav>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Mobile Works Korea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
