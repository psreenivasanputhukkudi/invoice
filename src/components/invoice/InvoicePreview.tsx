'use client';

import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { useInvoiceStore } from '@/lib/invoice-store';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

export const InvoicePreview = forwardRef<HTMLDivElement>(function InvoicePreview(_props, ref) {
  const template = useInvoiceStore((s) => s.template);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Rehydrate from localStorage on client, then reveal preview
    useInvoiceStore.persist.rehydrate().then(() => setHydrated(true));
  }, []);

  // Before hydration: render a matching skeleton so server/client HTML are identical
  if (!hydrated) {
    return (
      <div
        ref={ref}
        className="w-full max-w-[210mm] mx-auto shadow-2xl overflow-hidden bg-white"
        style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}
      >
        <div style={{ height: '6px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #059669 100%)' }} />
        <div className="px-8 sm:px-10 py-8 sm:py-10">
          {/* Header skeleton */}
          <div className="flex justify-between items-start mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-[14px] bg-gray-200 animate-pulse" />
              <div className="space-y-2">
                <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
                <div className="w-40 h-3 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
            <div className="text-right">
              <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse ml-auto" />
              <div className="w-24 h-7 bg-gray-100 rounded mt-3 animate-pulse ml-auto" />
            </div>
          </div>
          {/* Date row skeleton */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-gray-50 border border-gray-100">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="w-16 h-2.5 bg-gray-200 rounded animate-pulse" />
                <div className="w-24 h-4 bg-gray-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
          {/* Table skeleton */}
          <div className="rounded-xl border border-gray-200 overflow-hidden mb-7">
            <div className="grid grid-cols-4 gap-3 p-3 bg-gray-50 border-b border-gray-200">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-2.5 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="p-5 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-3">
                  <div className="h-3.5 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3.5 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3.5 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3.5 bg-gray-100 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
          {/* Summary skeleton */}
          <div className="flex justify-end mb-8">
            <div className="w-[280px] space-y-3">
              <div className="flex justify-between">
                <div className="w-14 h-3.5 bg-gray-100 rounded animate-pulse" />
                <div className="w-20 h-3.5 bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="p-4 rounded-xl bg-gray-800 flex justify-between">
                <div className="w-10 h-4 bg-gray-600 rounded animate-pulse" />
                <div className="w-24 h-5 bg-gray-600 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer skeleton */}
        <div className="px-10 py-5 bg-gray-50 border-t border-gray-100 flex justify-between">
          <div className="w-36 h-3 bg-gray-200 rounded animate-pulse" />
          <div className="w-16 h-3 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    );
  }

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
