import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { PortfolioItem } from '@/types/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white rounded-full p-1.5 shadow-md">
            <ArrowUpRight size={14} className="text-gray-900" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="subtle">{item.client}</Badge>
          <Badge variant="default">{item.industry}</Badge>
        </div>
        <h3 className="font-display font-semibold text-gray-900 text-lg leading-snug mb-2 group-hover:text-brand transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {item.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
