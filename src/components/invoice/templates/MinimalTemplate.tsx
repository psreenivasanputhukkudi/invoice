'use client';

import { forwardRef } from 'react';
import { useInvoiceStore } from '@/lib/invoice-store';
import { useInvoiceFormatters } from '../useInvoiceFormatters';

export const MinimalTemplate = forwardRef<HTMLDivElement>(function MinimalTemplate(_props, ref) {
  const store = useInvoiceStore();
  const { formatCurrency, formatDate } = useInvoiceFormatters();

  return (
    <div
      ref={ref}
      id="invoice-preview"
      className="w-full max-w-[210mm] mx-auto shadow-2xl overflow-hidden"
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        background: '#ffffff',
      }}
    >
      <div style={{ padding: '48px 48px 0 48px' }}>

        {/* Header: simple two-column */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
          {/* Left: Sender */}
          <div>
            {store.senderLogo ? (
              <img src={store.senderLogo} alt="Logo" style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '12px' }} />
            ) : null}
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
              {store.senderName || 'Your Company'}
            </p>
            <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.7 }}>
              {store.senderEmail && <p>{store.senderEmail}</p>}
              {store.senderPhone && <p>{store.senderPhone}</p>}
              {store.senderAddress && <p style={{ whiteSpace: 'pre-line' }}>{store.senderAddress}</p>}
            </div>
          </div>

          {/* Right: Invoice info */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '28px', fontWeight: 300, color: '#111827', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Invoice
            </p>
            <div style={{ fontSize: '13px', lineHeight: 2, color: '#6b7280' }}>
              <p><span style={{ color: '#9ca3af' }}>No. </span><span style={{ fontWeight: 500, color: '#111827' }}>{store.invoiceNumber}</span></p>
              <p><span style={{ color: '#9ca3af' }}>Date: </span><span style={{ color: '#111827' }}>{formatDate(store.invoiceDate)}</span></p>
              <p><span style={{ color: '#9ca3af' }}>Due: </span><span style={{ color: '#111827' }}>{formatDate(store.dueDate)}</span></p>
            </div>
          </div>
        </div>

        {/* Bill To - subtle underline */}
        <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #f3f4f6' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Bill To</p>
          <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
            {store.clientName || 'Client Name'}
          </p>
          <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.7 }}>
            {store.clientEmail && <p>{store.clientEmail}</p>}
            {store.clientPhone && <p>{store.clientPhone}</p>}
            {store.clientAddress && <p style={{ whiteSpace: 'pre-line' }}>{store.clientAddress}</p>}
          </div>
        </div>

        {/* Items - ultra clean, no borders */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 100px 100px', padding: '0 0 12px 0', borderBottom: '1px solid #f3f4f6', marginBottom: '4px' }}>
            <span style={{ fontSize: '10px', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>Description</span>
            <span style={{ fontSize: '10px', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500, textAlign: 'center' }}>Qty</span>
            <span style={{ fontSize: '10px', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500, textAlign: 'right' }}>Price</span>
            <span style={{ fontSize: '10px', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500, textAlign: 'right' }}>Amount</span>
          </div>
          {store.items.map((item) => (
            <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 60px 100px 100px', padding: '14px 0', borderBottom: '1px solid #fafafa' }}>
              <span style={{ fontSize: '14px', color: '#374151' }}>{item.description || '\u2014'}</span>
              <span style={{ fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>{item.quantity}</span>
              <span style={{ fontSize: '14px', color: '#9ca3af', textAlign: 'right' }}>{formatCurrency(item.unitPrice)}</span>
              <span style={{ fontSize: '14px', color: '#111827', textAlign: 'right', fontWeight: 500 }}>{formatCurrency(item.quantity * item.unitPrice)}</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <div style={{ width: '240px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
              <span style={{ fontSize: '13px', color: '#9ca3af' }}>Subtotal</span>
              <span style={{ fontSize: '13px', color: '#374151' }}>{formatCurrency(store.subtotal)}</span>
            </div>
            {store.taxRate > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                <span style={{ fontSize: '13px', color: '#9ca3af' }}>Tax</span>
                <span style={{ fontSize: '13px', color: '#374151' }}>{formatCurrency(store.taxAmount)}</span>
              </div>
            )}
            {store.discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                <span style={{ fontSize: '13px', color: '#9ca3af' }}>Discount</span>
                <span style={{ fontSize: '13px', color: '#374151' }}>-{formatCurrency(store.discountAmount)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 0 0', marginTop: '8px', borderTop: '1px solid #111827' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>Total</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#111827', letterSpacing: '-0.3px' }}>{formatCurrency(store.grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes & Terms - very subtle */}
      {(store.notes || store.paymentTerms || store.bankDetails) && (
        <div style={{ padding: '0 48px', borderTop: '1px solid #f3f4f6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: store.bankDetails ? '1fr 1fr' : '1fr', gap: '24px', padding: '24px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {store.paymentTerms && (
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 500, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Terms</p>
                  <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{store.paymentTerms}</p>
                </div>
              )}
              {store.notes && (
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 500, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Notes</p>
                  <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{store.notes}</p>
                </div>
              )}
            </div>
            {store.bankDetails && (
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Bank Details</p>
                <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{store.bankDetails}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});
