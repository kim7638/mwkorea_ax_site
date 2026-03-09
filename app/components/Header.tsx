export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-10 lg:px-20">
      <a href="/" className="text-sm font-bold tracking-widest text-gray-900 uppercase">
        Mobile Works Korea
      </a>

      <nav className="hidden gap-8 sm:flex">
        <a
          href="/about"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          About
        </a>
        <a
          href="/portfolio/list"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          Works
        </a>
        <a
          href="/contact"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          Contact
        </a>
      </nav>

      {/* Mobile: show only Contact CTA */}
      <a
        href="/contact"
        className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:hidden"
      >
        Contact
      </a>
    </header>
  );
}
