'use client';

import { forwardRef } from 'react';
import { useInvoiceStore } from '@/lib/invoice-store';
import { useInvoiceFormatters } from '../useInvoiceFormatters';

export const ClassicTemplate = forwardRef<HTMLDivElement>(function ClassicTemplate(_props, ref) {
  const store = useInvoiceStore();
  const { formatCurrency, formatDate } = useInvoiceFormatters();

  return (
    <div
      ref={ref}
      id="invoice-preview"
      className="w-full max-w-[210mm] mx-auto shadow-2xl overflow-hidden"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: '#ffffff',
        border: '1px solid #d1d5db',
      }}
    >
      <div style={{ padding: '40px 48px 32px 48px' }}>

        {/* Header: INVOICE title + sender/client side by side */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111827', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Invoice
          </h1>
          <div style={{ width: '60px', height: '3px', background: '#111827', marginBottom: '28px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* From */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>From</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                {store.senderLogo ? (
                  <img src={store.senderLogo} alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                ) : null}
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '4px', lineHeight: 1.3 }}>
                    {store.senderName || 'Your Company Name'}
                  </p>
                  {store.senderAddress && (
                    <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{store.senderAddress}</p>
                  )}
                  {store.senderEmail && <p style={{ fontSize: '13px', color: '#6b7280' }}>{store.senderEmail}</p>}
                  {store.senderPhone && <p style={{ fontSize: '13px', color: '#6b7280' }}>{store.senderPhone}</p>}
                </div>
              </div>
            </div>

            {/* Bill To */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Bill To</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                {store.clientLogo ? (
                  <img src={store.clientLogo} alt="Client" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                ) : null}
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '4px', lineHeight: 1.3 }}>
                    {store.clientName || 'Client Name'}
                  </p>
                  {store.clientAddress && (
                    <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{store.clientAddress}</p>
                  )}
                  {store.clientEmail && <p style={{ fontSize: '13px', color: '#6b7280' }}>{store.clientEmail}</p>}
                  {store.clientPhone && <p style={{ fontSize: '13px', color: '#6b7280' }}>{store.clientPhone}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Details Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '36px', padding: '16px 20px', border: '1px solid #e5e7eb', background: '#fafafa' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Invoice No.</p>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>{store.invoiceNumber}</p>
          </div>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Date</p>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>{formatDate(store.invoiceDate)}</p>
          </div>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Due Date</p>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>{formatDate(store.dueDate)}</p>
          </div>
        </div>

        {/* Items Table */}
        <div style={{ marginBottom: '28px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #111827' }}>
                <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '11px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Description</th>
                <th style={{ textAlign: 'center', padding: '10px 12px', fontSize: '11px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px', width: '70px' }}>Qty</th>
                <th style={{ textAlign: 'right', padding: '10px 12px', fontSize: '11px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px', width: '110px' }}>Unit Price</th>
                <th style={{ textAlign: 'right', padding: '10px 12px', fontSize: '11px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px', width: '110px' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {store.items.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '12px 12px', fontSize: '14px', color: '#374151' }}>{item.description || '—'}</td>
                  <td style={{ padding: '12px 12px', fontSize: '14px', color: '#374151', textAlign: 'center' }}>{item.quantity}</td>
                  <td style={{ padding: '12px 12px', fontSize: '14px', color: '#374151', textAlign: 'right' }}>{formatCurrency(item.unitPrice)}</td>
                  <td style={{ padding: '12px 12px', fontSize: '14px', color: '#111827', textAlign: 'right', fontWeight: 600 }}>{formatCurrency(item.quantity * item.unitPrice)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
          <div style={{ width: '260px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Subtotal</span>
              <span style={{ fontSize: '14px', color: '#111827' }}>{formatCurrency(store.subtotal)}</span>
            </div>
            {store.taxRate > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Tax ({store.taxRate}%)</span>
                <span style={{ fontSize: '14px', color: '#111827' }}>{formatCurrency(store.taxAmount)}</span>
              </div>
            )}
            {store.discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Discount</span>
                <span style={{ fontSize: '14px', color: '#111827' }}>-{formatCurrency(store.discountAmount)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '4px', borderTop: '2px solid #111827' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#111827' }}>Total Due</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#111827' }}>{formatCurrency(store.grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(store.notes || store.paymentTerms || store.bankDetails) && (
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', display: 'grid', gridTemplateColumns: store.bankDetails ? '1fr 1fr' : '1fr', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {store.paymentTerms && (
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Terms</p>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{store.paymentTerms}</p>
                </div>
              )}
              {store.notes && (
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Notes</p>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{store.notes}</p>
                </div>
              )}
            </div>
            {store.bankDetails && (
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Bank Details</p>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{store.bankDetails}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
