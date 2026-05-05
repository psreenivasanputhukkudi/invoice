'use client';

import { forwardRef } from 'react';
import { useInvoiceStore } from '@/lib/invoice-store';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

export const InvoicePreview = forwardRef<HTMLDivElement>(function InvoicePreview(_props, ref) {
  const template = useInvoiceStore((s) => s.template);

  switch (template) {
    case 'classic':
      return <ClassicTemplate ref={ref} />;
    case 'minimal':
      return <MinimalTemplate ref={ref} />;
    case 'modern':
    default:
      return <ModernTemplate ref={ref} />;
  }
});
