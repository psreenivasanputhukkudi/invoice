'use client';

import { useRef, useCallback } from 'react';
import { Download, Printer, RotateCcw, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useInvoiceStore } from '@/lib/invoice-store';
import { exportToPDF } from '@/lib/pdf-export';
import { SiteNav } from '@/components/SiteNav';

interface InvoiceHeaderProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
}

export function InvoiceHeader({ previewRef }: InvoiceHeaderProps) {
  const invoiceNumber = useInvoiceStore((s) => s.invoiceNumber);
  const items = useInvoiceStore((s) => s.items);
  const resetInvoice = useInvoiceStore((s) => s.resetInvoice);

  const validateBeforeExport = useCallback((): boolean => {
    const validItems = items.filter((item) => item.description.trim());
    if (validItems.length === 0) {
      toast.error('At least one item with a description is required');
      return false;
    }
    return true;
  }, [items]);

  const getPreviewElement = useCallback((): HTMLElement | null => {
    if (previewRef.current) {
      return previewRef.current;
    }
    return document.getElementById('invoice-preview');
  }, [previewRef]);

  const handleDownloadPDF = useCallback(async () => {
    if (!validateBeforeExport()) return;

    const element = getPreviewElement();
    if (!element) {
      toast.error('Invoice preview not found. Please make sure the preview is visible.');
      return;
    }

    toast.loading('Generating PDF...', { id: 'pdf-export' });

    try {
      await exportToPDF(element, `${invoiceNumber || 'invoice'}.pdf`);
      toast.success('PDF downloaded successfully!', { id: 'pdf-export' });
    } catch (error) {
      console.error('PDF export error:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to generate PDF: ${message}`, { id: 'pdf-export', duration: 5000 });
    }
  }, [validateBeforeExport, getPreviewElement, invoiceNumber]);

  const handlePrint = useCallback(() => {
    if (!validateBeforeExport()) return;
    window.print();
  }, [validateBeforeExport]);

  const handleReset = useCallback(() => {
    resetInvoice();
    toast.success('Invoice reset successfully');
  }, [resetInvoice]);

  return (
    <>
      <SiteNav />
      {/* Invoice Action Bar (below nav) */}
      <div className="border-b border-border/60 bg-background/50 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-end gap-1.5 h-10">
            <div className="hidden sm:flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 rounded-lg text-xs text-muted-foreground hover:text-destructive px-2.5"
                onClick={handleReset}
              >
                <RotateCcw className="mr-1 h-3 w-3" />
                Reset
              </Button>

              <div className="w-px h-4 bg-border mx-0.5" />

              <Button
                variant="ghost"
                size="sm"
                className="h-7 rounded-lg text-xs px-2.5"
                onClick={handlePrint}
              >
                <Printer className="mr-1 h-3 w-3" />
                Print
              </Button>

              <Button
                size="sm"
                className="h-7 rounded-lg text-xs px-3 text-white"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: 'none',
                }}
                onClick={handleDownloadPDF}
              >
                <Download className="mr-1.5 h-3 w-3" />
                Download PDF
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex sm:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-lg text-muted-foreground hover:text-destructive"
                onClick={handleReset}
                aria-label="Reset"
              >
                <RotateCcw className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-lg"
                onClick={handlePrint}
                aria-label="Print"
              >
                <Printer className="h-3 w-3" />
              </Button>
              <Button
                size="icon"
                className="h-7 w-7 rounded-lg text-white"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: 'none',
                }}
                onClick={handleDownloadPDF}
                aria-label="Download PDF"
              >
                <Download className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
