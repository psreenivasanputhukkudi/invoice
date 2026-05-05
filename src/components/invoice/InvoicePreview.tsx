'use client';

import { forwardRef } from 'react';
import { useInvoiceStore } from '@/lib/invoice-store';
import { format, parseISO } from 'date-fns';

export const InvoicePreview = forwardRef<HTMLDivElement>(function InvoicePreview(_props, ref) {
  const store = useInvoiceStore();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: store.currency || 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '—';
    try {
      return format(parseISO(dateStr), 'MMM dd, yyyy');
    } catch {
      return dateStr;
    }
  };

  return (
    <div
      ref={ref}
      id="invoice-preview"
      className="bg-white text-gray-900 w-full max-w-[210mm] mx-auto shadow-lg"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <div className="p-8 sm:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
          {/* Sender */}
          <div className="flex gap-4 items-start">
            {store.senderLogo && (
              <img
                src={store.senderLogo}
                alt="Sender Logo"
                className="h-16 w-16 rounded-lg object-contain border border-gray-200 p-1"
              />
            )}
            <div>
              {store.senderName && (
                <h2 className="text-lg font-bold text-gray-900">{store.senderName}</h2>
              )}
              {store.senderAddress && (
                <p className="text-sm text-gray-500 mt-0.5 whitespace-pre-line">{store.senderAddress}</p>
              )}
              {store.senderEmail && (
                <p className="text-sm text-gray-500">{store.senderEmail}</p>
              )}
              {store.senderPhone && (
                <p className="text-sm text-gray-500">{store.senderPhone}</p>
              )}
            </div>
          </div>

          {/* Invoice Title & Client */}
          <div className="flex flex-col items-end gap-3">
            <h1 className="text-3xl font-black tracking-tight text-gray-900">INVOICE</h1>
            <div className="text-right">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Invoice #</span>
                  <p className="font-semibold text-gray-900">{store.invoiceNumber}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Date</span>
                  <p className="font-semibold text-gray-900">{formatDate(store.invoiceDate)}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Due Date</span>
                  <p className="font-semibold text-gray-900">{formatDate(store.dueDate)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-10">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Bill To</h3>
          <div className="flex gap-4 items-start">
            {store.clientLogo && (
              <img
                src={store.clientLogo}
                alt="Client Logo"
                className="h-12 w-12 rounded-lg object-contain border border-gray-200 p-1"
              />
            )}
            <div>
              {store.clientName && (
                <p className="text-base font-bold text-gray-900">{store.clientName}</p>
              )}
              {store.clientAddress && (
                <p className="text-sm text-gray-500 mt-0.5 whitespace-pre-line">{store.clientAddress}</p>
              )}
              {store.clientEmail && (
                <p className="text-sm text-gray-500">{store.clientEmail}</p>
              )}
              {store.clientPhone && (
                <p className="text-sm text-gray-500">{store.clientPhone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Description
                </th>
                <th className="text-center py-3 text-xs uppercase tracking-widest text-gray-400 font-semibold w-20">
                  Qty
                </th>
                <th className="text-right py-3 text-xs uppercase tracking-widest text-gray-400 font-semibold w-32">
                  Unit Price
                </th>
                <th className="text-right py-3 text-xs uppercase tracking-widest text-gray-400 font-semibold w-32">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {store.items.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-3 text-gray-700">{item.description || '—'}</td>
                  <td className="py-3 text-center text-gray-700">{item.quantity}</td>
                  <td className="py-3 text-right text-gray-700">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="py-3 text-right font-semibold text-gray-900">
                    {formatCurrency(item.quantity * item.unitPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-end mb-10">
          <div className="w-full sm:w-72 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">{formatCurrency(store.subtotal)}</span>
            </div>
            {store.taxRate > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax ({store.taxRate}%)</span>
                <span className="font-medium text-gray-900">{formatCurrency(store.taxAmount)}</span>
              </div>
            )}
            {store.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Discount</span>
                <span className="font-medium text-red-600">-{formatCurrency(store.discountAmount)}</span>
              </div>
            )}
            <div className="border-t-2 border-gray-900 pt-2 flex justify-between">
              <span className="text-base font-bold text-gray-900">Grand Total</span>
              <span className="text-base font-bold text-gray-900">
                {formatCurrency(store.grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(store.notes || store.paymentTerms || store.bankDetails) && (
          <div className="border-t border-gray-200 pt-6 space-y-4">
            {store.paymentTerms && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                  Payment Terms
                </h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">{store.paymentTerms}</p>
              </div>
            )}
            {store.bankDetails && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                  Bank Details
                </h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">{store.bankDetails}</p>
              </div>
            )}
            {store.notes && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                  Notes
                </h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">{store.notes}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
