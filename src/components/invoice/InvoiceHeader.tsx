'use client';

import { useRef, useCallback } from 'react';
import { Download, Printer, RotateCcw, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { useInvoiceStore } from '@/lib/invoice-store';
import { exportToPDF } from '@/lib/pdf-export';

interface InvoiceHeaderProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
}

export function InvoiceHeader({ previewRef }: InvoiceHeaderProps) {
  const { theme, setTheme } = useTheme();
  const invoiceNumber = useInvoiceStore((s) => s.invoiceNumber);
  const clientName = useInvoiceStore((s) => s.clientName);
  const items = useInvoiceStore((s) => s.items);
  const resetInvoice = useInvoiceStore((s) => s.resetInvoice);

  const validateBeforeExport = useCallback((): boolean => {
    if (!clientName.trim()) {
      toast.error('Client name is required');
      return false;
    }
    const validItems = items.filter((item) => item.description.trim());
    if (validItems.length === 0) {
      toast.error('At least one item with a description is required');
      return false;
    }
    return true;
  }, [clientName, items]);

  const handleDownloadPDF = useCallback(async () => {
    if (!validateBeforeExport()) return;
    if (!previewRef.current) {
      toast.error('Preview element not found');
      return;
    }

    toast.loading('Generating PDF...', { id: 'pdf-export' });

    try {
      await exportToPDF(previewRef.current, `${invoiceNumber || 'invoice'}.pdf`);
      toast.success('PDF downloaded successfully!', { id: 'pdf-export' });
    } catch (error) {
      console.error('PDF export error:', error);
      toast.error('Failed to generate PDF', { id: 'pdf-export' });
    }
  }, [validateBeforeExport, previewRef, invoiceNumber]);

  const handlePrint = useCallback(() => {
    if (!validateBeforeExport()) return;
    window.print();
  }, [validateBeforeExport]);

  const handleReset = useCallback(() => {
    resetInvoice();
    toast.success('Invoice reset successfully');
  }, [resetInvoice]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IN</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground leading-tight">
                  Invoice Generator
                </h1>
                <p className="text-xs text-muted-foreground">
                  Create professional invoices
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex h-9 text-muted-foreground hover:text-destructive"
              onClick={handleReset}
            >
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Reset
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden h-9 w-9 text-muted-foreground hover:text-destructive"
              onClick={handleReset}
              aria-label="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex h-9"
              onClick={handlePrint}
            >
              <Printer className="mr-1.5 h-4 w-4" />
              Print
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="sm:hidden h-9 w-9"
              onClick={handlePrint}
              aria-label="Print"
            >
              <Printer className="h-4 w-4" />
            </Button>

            <Button
              size="sm"
              className="h-9 bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleDownloadPDF}
            >
              <Download className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
