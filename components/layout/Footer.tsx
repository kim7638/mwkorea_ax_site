import Link from 'next/link';

const footerLinks = {
  Services: [
    { label: 'AX Strategy', href: '/services#ax-strategy' },
    { label: 'AI Product Development', href: '/services#ai-product' },
    { label: 'AI Operations', href: '/services#ai-operations' },
    { label: 'Enterprise Delivery', href: '/services#enterprise-delivery' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold font-display">MW</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Mobile<span className="text-brand">Works</span> Korea
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-500">
              엔터프라이즈 AI 서비스 빌더. AI 서비스를 직접 구축하고, 기업 서비스가 AI로 만들어지는 방식을 바꿉니다.
            </p>
            <div className="mt-6">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">문의</p>
              <a
                href="mailto:hello@mobileworks.kr"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                hello@mobileworks.kr
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mobile Works Korea. 모든 권리 보유.
          </p>
          <p className="text-xs text-gray-700">
            서울, 대한민국
          </p>
        </div>
      </div>
    </footer>
  );
}
