import { useInvoiceStore } from '@/lib/invoice-store';
import { format, parseISO } from 'date-fns';

export function useInvoiceFormatters() {
  const currency = useInvoiceStore((s) => s.currency);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '\u2014';
    try {
      return format(parseISO(dateStr), 'MMM dd, yyyy');
    } catch {
      return dateStr;
    }
  };

  return { formatCurrency, formatDate };
}
