'use client';

import { useInvoiceStore } from '@/lib/invoice-store';
import type { InvoiceTemplate } from '@/lib/invoice-types';
import { Sparkles, FileText, Minimize2 } from 'lucide-react';

const templates: { id: InvoiceTemplate; label: string; description: string; icon: React.ReactNode }[] = [
  {
    id: 'modern',
    label: 'Modern',
    description: 'Bold gradients, dark accents',
    icon: <Sparkles style={{ width: '14px', height: '14px' }} />,
  },
  {
    id: 'classic',
    label: 'Classic',
    description: 'No color, clean & formal',
    icon: <FileText style={{ width: '14px', height: '14px' }} />,
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Ultra-light, whitespace',
    icon: <Minimize2 style={{ width: '14px', height: '14px' }} />,
  },
];

export function TemplateSwitcher() {
  const template = useInvoiceStore((s) => s.template);
  const setTemplate = useInvoiceStore((s) => s.setTemplate);

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-xl" style={{ background: 'var(--muted)' }}>
      {templates.map((t) => {
        const isActive = template === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplate(t.id)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer"
            style={{
              background: isActive ? 'var(--background)' : 'transparent',
              color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
              boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              border: isActive ? '1px solid var(--border)' : '1px solid transparent',
            }}
            title={t.description}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
