'use client';

import { useRef, useState } from 'react';
import { InvoiceHeader } from '@/components/invoice/InvoiceHeader';
import { InvoiceForm } from '@/components/invoice/InvoiceForm';
import { InvoicePreview } from '@/components/invoice/InvoicePreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, PenLine } from 'lucide-react';

export default function Home() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [mobileTab, setMobileTab] = useState('edit');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <InvoiceHeader previewRef={previewRef} />

      <main className="flex-1 max-w-[1600px] mx-auto w-full">
        {/* Desktop: Split-screen layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-57px)]">
          {/* Left: Form */}
          <div className="border-r border-border overflow-y-auto p-4 sm:p-6">
            <div className="max-w-2xl mx-auto">
              <InvoiceForm />
            </div>
          </div>

          {/* Right: Preview */}
          <div className="overflow-y-auto p-4 sm:p-6 bg-muted/30" id="preview-wrapper">
            <div className="max-w-2xl mx-auto sticky top-4">
              <div className="mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-medium text-muted-foreground">Live Preview</h2>
              </div>
              <InvoicePreview ref={previewRef} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Tabs layout */}
        <div className="lg:hidden">
          <div className="border-b border-border sticky top-[57px] z-40 bg-background/80 backdrop-blur-md">
            <Tabs value={mobileTab} onValueChange={setMobileTab} className="w-full">
              <TabsList className="w-full rounded-none bg-transparent h-11 p-0">
                <TabsTrigger
                  value="edit"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-foreground"
                >
                  <PenLine className="mr-1.5 h-4 w-4" />
                  Edit
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-foreground"
                >
                  <Eye className="mr-1.5 h-4 w-4" />
                  Preview
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Tabs value={mobileTab} onValueChange={setMobileTab} className="w-full">
            <TabsContent value="edit" className="mt-0">
              <div className="p-4 sm:p-6">
                <InvoiceForm />
              </div>
            </TabsContent>
            <TabsContent value="preview" className="mt-0">
              <div className="p-4 sm:p-6 bg-muted/30 min-h-[calc(100vh-110px)]" id="preview-wrapper">
                <InvoicePreview ref={previewRef} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
