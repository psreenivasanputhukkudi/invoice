'use client';

import { useInvoiceStore } from '@/lib/invoice-store';
import type { InvoiceTemplate } from '@/lib/invoice-types';
import { Sparkles, FileText, Minimize2 } from 'lucide-react';

const templates: { id: InvoiceTemplate; label: string; description: string; icon: React.ReactNode }[] = [
  {
    id: 'modern',
    label: 'Modern',
    description: 'Bold gradients, dark accents',
    icon: <Sparkles className="h-3.5 w-3.5" />,
  },
  {
    id: 'classic',
    label: 'Classic',
    description: 'No color, clean & formal',
    icon: <FileText className="h-3.5 w-3.5" />,
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Ultra-light, whitespace',
    icon: <Minimize2 className="h-3.5 w-3.5" />,
  },
];

export function TemplateSwitcher() {
  const template = useInvoiceStore((s) => s.template);
  const setTemplate = useInvoiceStore((s) => s.setTemplate);

  return (
    <div
      className="inline-flex items-center gap-0.5 p-0.5 rounded-lg"
      style={{ background: 'var(--muted)' }}
    >
      {templates.map((t) => {
        const isActive = template === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplate(t.id)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 cursor-pointer"
            style={{
              background: isActive ? 'var(--background)' : 'transparent',
              color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
              boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
            }}
            title={t.description}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
