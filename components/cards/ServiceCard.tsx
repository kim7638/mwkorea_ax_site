import { Compass, Cpu, Workflow, Layers } from 'lucide-react';
import { Service } from '@/types/service';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Cpu,
  Workflow,
  Layers,
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'minimal';
}

export default function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Layers;

  if (variant === 'minimal') {
    return (
      <div className="group p-6 rounded-2xl border border-gray-100 hover:border-brand/30 hover:bg-brand-light/30 transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mb-4">
          <Icon size={20} className="text-brand" />
        </div>
        <h3 className="font-display font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500">{service.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6">
        <Icon size={22} className="text-brand" />
      </div>
      <div className="mb-1">
        <p className="text-xs text-brand font-semibold uppercase tracking-widest">{`0${service.order}`}</p>
      </div>
      <h3 className="font-display font-700 text-xl text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm text-brand font-medium mb-4">{service.subtitle}</p>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2.5 text-sm text-gray-600">
            <div className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
            {cap}
          </li>
        ))}
      </ul>
    </div>
  );
}
