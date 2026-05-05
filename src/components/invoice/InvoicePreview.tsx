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

  const hasValidItems = store.items.some((item) => item.description.trim() && item.unitPrice > 0);

  return (
    <div
      ref={ref}
      id="invoice-preview"
      className="w-full max-w-[210mm] mx-auto shadow-2xl overflow-hidden"
      style={{
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
        background: '#ffffff',
      }}
    >
      {/* Top Accent Bar */}
      <div
        style={{
          height: '6px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #059669 100%)',
        }}
      />

      <div className="px-8 sm:px-10 py-8 sm:py-10">
        {/* ── Header: Logo + Invoice Badge ── */}
        <div className="flex justify-between items-start mb-10">
          {/* Sender Info */}
          <div className="flex gap-4 items-start flex-1 min-w-0">
            {store.senderLogo ? (
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  border: '1px solid #e2e8f0',
                  padding: '6px',
                }}
              >
                <img
                  src={store.senderLogo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                }}
              >
                <span style={{ color: '#fff', fontSize: '18px', fontWeight: 800 }}>
                  {(store.senderName || 'CO').charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="min-w-0">
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '2px',
                }}
              >
                {store.senderName || 'Your Company'}
              </h2>
              {store.senderEmail && (
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1px' }}>
                  {store.senderEmail}
                </p>
              )}
              {store.senderPhone && (
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1px' }}>
                  {store.senderPhone}
                </p>
              )}
              {store.senderAddress && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                    marginTop: '4px',
                  }}
                >
                  {store.senderAddress}
                </p>
              )}
            </div>
          </div>

          {/* Invoice Badge */}
          <div className="text-right shrink-0 ml-6">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#059669',
                  display: 'inline-block',
                }}
              />
              Invoice
            </div>
            <p
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#0f172a',
                marginTop: '12px',
                letterSpacing: '-0.5px',
              }}
            >
              {store.invoiceNumber || 'INV-0001'}
            </p>
          </div>
        </div>

        {/* ── Date Row ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px',
            padding: '16px 20px',
            borderRadius: '12px',
            background: '#f8fafc',
            border: '1px solid #f1f5f9',
          }}
        >
          <div>
            <p style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600, marginBottom: '4px' }}>
              Invoice Date
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
              {formatDate(store.invoiceDate)}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600, marginBottom: '4px' }}>
              Due Date
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
              {formatDate(store.dueDate)}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600, marginBottom: '4px' }}>
              Amount Due
            </p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#059669' }}>
              {formatCurrency(store.grandTotal)}
            </p>
          </div>
        </div>

        {/* ── Bill To Section ── */}
        <div style={{ marginBottom: '32px' }}>
          <p
            style={{
              fontSize: '11px',
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 700,
              marginBottom: '10px',
            }}
          >
            Bill To
          </p>
          <div className="flex gap-3 items-start">
            {store.clientLogo ? (
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '4px',
                  shrink: 0,
                }}
              >
                <img src={store.clientLogo} alt="Client" className="w-full h-full object-contain" />
              </div>
            ) : null}
            <div>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                {store.clientName || 'Client Name'}
              </p>
              {store.clientEmail && (
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1px' }}>
                  {store.clientEmail}
                </p>
              )}
              {store.clientPhone && (
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1px' }}>
                  {store.clientPhone}
                </p>
              )}
              {store.clientAddress && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                    marginTop: '4px',
                  }}
                >
                  {store.clientAddress}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Items Table ── */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 72px 110px 110px',
                gap: '0',
                padding: '12px 20px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>
                Item
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, textAlign: 'center' }}>
                Qty
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, textAlign: 'right' }}>
                Price
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, textAlign: 'right' }}>
                Total
              </span>
            </div>

            {/* Table Body */}
            {store.items.map((item, index) => {
              const isLast = index === store.items.length - 1;
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 72px 110px 110px',
                    gap: '0',
                    padding: '14px 20px',
                    background: index % 2 === 0 ? '#ffffff' : '#fafbfc',
                    borderBottom: isLast ? 'none' : '1px solid #f1f5f9',
                  }}
                >
                  <span style={{ fontSize: '14px', color: item.description ? '#334155' : '#cbd5e1' }}>
                    {item.description || 'Item description'}
                  </span>
                  <span style={{ fontSize: '14px', color: '#475569', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <span style={{ fontSize: '14px', color: '#475569', textAlign: 'right' }}>
                    {formatCurrency(item.unitPrice)}
                  </span>
                  <span style={{ fontSize: '14px', color: '#0f172a', textAlign: 'right', fontWeight: 600 }}>
                    {formatCurrency(item.quantity * item.unitPrice)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Summary ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '280px' }}>
            {/* Subtotal */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              <span style={{ fontSize: '14px', color: '#64748b' }}>Subtotal</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                {formatCurrency(store.subtotal)}
              </span>
            </div>

            {/* Tax */}
            {store.taxRate > 0 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                <span style={{ fontSize: '14px', color: '#64748b' }}>Tax ({store.taxRate}%)</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                  {formatCurrency(store.taxAmount)}
                </span>
              </div>
            )}

            {/* Discount */}
            {store.discount > 0 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                <span style={{ fontSize: '14px', color: '#64748b' }}>Discount</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#ef4444' }}>
                  -{formatCurrency(store.discountAmount)}
                </span>
              </div>
            )}

            {/* Grand Total */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                marginTop: '8px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                Total
              </span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                {formatCurrency(store.grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* ── Notes & Terms ── */}
        {(store.notes || store.paymentTerms || store.bankDetails) && (
          <div
            style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: '24px',
              display: 'grid',
              gridTemplateColumns: store.bankDetails ? '1fr 1fr' : '1fr',
              gap: '24px',
            }}
          >
            {/* Left column: Terms + Notes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {store.paymentTerms && (
                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    Payment Terms
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {store.paymentTerms}
                  </p>
                </div>
              )}
              {store.notes && (
                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    Notes
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {store.notes}
                  </p>
                </div>
              )}
            </div>

            {/* Right column: Bank Details */}
            {store.bankDetails && (
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700,
                    marginBottom: '6px',
                  }}
                >
                  Bank Details
                </p>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {store.bankDetails}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          padding: '20px 40px',
          background: '#f8fafc',
          borderTop: '1px solid #f1f5f9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>
          Thank you for your business
        </p>
        <p style={{ fontSize: '11px', color: '#cbd5e1' }}>
          {store.invoiceNumber}
        </p>
      </div>
    </div>
  );
});
