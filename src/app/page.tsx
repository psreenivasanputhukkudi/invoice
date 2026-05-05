'use client';

import { useRef, useState } from 'react';
import { InvoiceHeader } from '@/components/invoice/InvoiceHeader';
import { InvoiceForm } from '@/components/invoice/InvoiceForm';
import { InvoicePreview } from '@/components/invoice/InvoicePreview';
import { TemplateSwitcher } from '@/components/invoice/TemplateSwitcher';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, PenLine, Palette } from 'lucide-react';

export default function Home() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [mobileTab, setMobileTab] = useState('edit');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <InvoiceHeader previewRef={previewRef} />

      <main className="flex-1 max-w-[1600px] mx-auto w-full">
        {/* Desktop: Split-screen layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-97px)]">
          {/* Left: Form */}
          <div
            className="overflow-y-auto p-5 sm:p-6"
            style={{
              borderRight: '1px solid var(--border)',
              background: 'var(--background)',
            }}
          >
            <div className="max-w-xl mx-auto pb-8">
              <InvoiceForm />
            </div>
          </div>

          {/* Right: Preview */}
          <div
            className="overflow-y-auto"
            style={{
              padding: '20px',
              background: 'var(--muted)',
              backgroundSize: '20px 20px',
              backgroundImage: 'radial-gradient(circle, var(--border) 0.5px, transparent 0.5px)',
            }}
            id="preview-wrapper"
          >
            <div className="max-w-xl mx-auto sticky top-[100px]">
              {/* Preview toolbar */}
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TemplateSwitcher />
                </div>
              </div>
              <InvoicePreview ref={previewRef} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Tabs layout */}
        <div className="lg:hidden">
          <div className="sticky top-[97px] z-40" style={{ borderBottom: '1px solid var(--border)', background: 'var(--background)' }}>
            <Tabs value={mobileTab} onValueChange={setMobileTab} className="w-full">
              <TabsList className="w-full rounded-none bg-transparent h-11 p-0">
                <TabsTrigger
                  value="edit"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-foreground transition-colors"
                >
                  <PenLine className="mr-1.5 h-3.5 w-3.5" />
                  Edit
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-foreground transition-colors"
                >
                  <Palette className="mr-1.5 h-3.5 w-3.5" />
                  Preview
                </TabsTrigger>
              </TabsList>

              <TabsContent value="edit" className="mt-0">
                <div className="p-4 sm:p-5">
                  <div className="max-w-xl mx-auto pb-6">
                    <InvoiceForm />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preview" className="mt-0">
                <div
                  className="p-4 sm:p-5 pb-8"
                  style={{
                    background: 'var(--muted)',
                    backgroundSize: '16px 16px',
                    backgroundImage: 'radial-gradient(circle, var(--border) 0.5px, transparent 0.5px)',
                  }}
                  id="preview-wrapper"
                >
                  <div className="max-w-xl mx-auto">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Preview</span>
                      <TemplateSwitcher />
                    </div>
                    <InvoicePreview ref={previewRef} />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
