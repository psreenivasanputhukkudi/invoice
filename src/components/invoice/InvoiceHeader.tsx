'use client';

import { useRef, useCallback } from 'react';
import { Download, Printer, RotateCcw, Moon, Sun, FileText } from 'lucide-react';
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

  const handleDownloadPDF = useCallback(async () => {
    if (!validateBeforeExport()) return;
    if (!previewRef.current) {
      toast.error('Preview element not found');
      return false;
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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 h-14">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              <FileText className="text-white" style={{ width: '16px', height: '16px' }} />
            </div>
            <div className="hidden sm:block">
              <h1
                className="leading-tight"
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  letterSpacing: '-0.3px',
                }}
              >
                Invoice Generator
              </h1>
              <p style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '-1px' }}>
                Create professional invoices
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <div className="hidden sm:flex items-center gap-1 ml-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 rounded-lg text-xs text-muted-foreground hover:text-destructive px-3"
                onClick={handleReset}
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                Reset
              </Button>

              <div className="w-px h-5 bg-border mx-1" />

              <Button
                variant="ghost"
                size="sm"
                className="h-8 rounded-lg text-xs px-3"
                onClick={handlePrint}
              >
                <Printer className="mr-1.5 h-3.5 w-3.5" />
                Print
              </Button>

              <Button
                size="sm"
                className="h-8 rounded-lg text-xs px-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: 'none',
                }}
                onClick={handleDownloadPDF}
              >
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Download PDF
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex sm:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive"
                onClick={handleReset}
                aria-label="Reset"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg"
                onClick={handlePrint}
                aria-label="Print"
              >
                <Printer className="h-3.5 w-3.5" />
              </Button>
              <Button
                size="icon"
                className="h-8 w-8 rounded-lg text-white"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: 'none',
                }}
                onClick={handleDownloadPDF}
                aria-label="Download PDF"
              >
                <Download className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
