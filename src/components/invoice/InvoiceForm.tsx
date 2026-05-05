'use client';

import { useInvoiceStore } from '@/lib/invoice-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LogoUpload } from './LogoUpload';
import { LineItemsTable } from './LineItemsTable';
import { DollarSign, Percent, Tag, Building2, UserCircle, FileText, Receipt, StickyNote, Landmark } from 'lucide-react';

export function InvoiceForm() {
  const store = useInvoiceStore();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: store.currency || 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="space-y-4">
      {/* Sender Details */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              <Building2 className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>From (Sender)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <LogoUpload
            logo={store.senderLogo}
            onLogoChange={(b64) => store.setLogo('sender', b64)}
            label="Company Logo"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="senderName" className="text-xs">Company Name</Label>
              <Input
                id="senderName"
                placeholder="Your Company Name"
                value={store.senderName}
                onChange={(e) => store.updateField('senderName', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="senderEmail" className="text-xs">Email</Label>
              <Input
                id="senderEmail"
                type="email"
                placeholder="email@company.com"
                value={store.senderEmail}
                onChange={(e) => store.updateField('senderEmail', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="senderAddress" className="text-xs">Address</Label>
            <Textarea
              id="senderAddress"
              placeholder="Full address..."
              value={store.senderAddress}
              onChange={(e) => store.updateField('senderAddress', e.target.value)}
              rows={2}
              className="text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="senderPhone" className="text-xs">Phone</Label>
            <Input
              id="senderPhone"
              value={store.senderPhone}
              onChange={(e) => store.updateField('senderPhone', e.target.value)}
              className="h-9 text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              }}
            >
              <UserCircle className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>
              Bill To (Client){' '}
              <span className="text-muted-foreground font-normal text-[11px]">(optional)</span>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <LogoUpload
            logo={store.clientLogo}
            onLogoChange={(b64) => store.setLogo('client', b64)}
            label="Client Logo"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="clientName" className="text-xs">Name</Label>
              <Input
                id="clientName"
                placeholder="Client Company Name"
                value={store.clientName}
                onChange={(e) => store.updateField('clientName', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="clientEmail" className="text-xs">Email</Label>
              <Input
                id="clientEmail"
                type="email"
                placeholder="client@email.com"
                value={store.clientEmail}
                onChange={(e) => store.updateField('clientEmail', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="clientAddress" className="text-xs">Address</Label>
            <Textarea
              id="clientAddress"
              placeholder="Client address..."
              value={store.clientAddress}
              onChange={(e) => store.updateField('clientAddress', e.target.value)}
              rows={2}
              className="text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="clientPhone" className="text-xs">Phone</Label>
            <Input
              id="clientPhone"
              value={store.clientPhone}
              onChange={(e) => store.updateField('clientPhone', e.target.value)}
              className="h-9 text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Invoice Metadata */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              }}
            >
              <FileText className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>Invoice Details</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="invoiceNumber" className="text-xs">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={store.invoiceNumber}
                onChange={(e) => store.updateField('invoiceNumber', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="invoiceDate" className="text-xs">Invoice Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={store.invoiceDate}
                onChange={(e) => store.updateField('invoiceDate', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="dueDate" className="text-xs">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={store.dueDate}
                onChange={(e) => store.updateField('dueDate', e.target.value)}
                className="h-9 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="currency" className="text-xs">Currency</Label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <select
                id="currency"
                value={store.currency || 'USD'}
                onChange={(e) => store.updateField('currency', e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 pl-9 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Line Items */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              }}
            >
              <Receipt className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>Line Items</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <LineItemsTable />
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              <DollarSign className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>Financial Summary</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="taxRate" className="text-xs">
                <Percent className="inline h-3 w-3 mr-1" />
                Tax Rate (%)
              </Label>
              <Input
                id="taxRate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                placeholder="0"
                value={store.taxRate || ''}
                onChange={(e) =>
                  store.updateField('taxRate', parseFloat(e.target.value) || 0)
                }
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="discount" className="text-xs">
                <DollarSign className="inline h-3 w-3 mr-1" />
                Discount (Flat)
              </Label>
              <Input
                id="discount"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={store.discount || ''}
                onChange={(e) =>
                  store.updateField('discount', parseFloat(e.target.value) || 0)
                }
                className="h-9 text-sm"
              />
            </div>
          </div>

          <div
            className="space-y-1.5 p-3.5"
            style={{
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatCurrency(store.subtotal)}</span>
            </div>
            {store.taxRate > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax ({store.taxRate}%)</span>
                <span className="font-medium">{formatCurrency(store.taxAmount)}</span>
              </div>
            )}
            {store.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discount</span>
                <span className="font-medium text-red-500">
                  -{formatCurrency(store.discountAmount)}
                </span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between items-center pt-0.5">
              <span className="text-[15px] font-bold">Grand Total</span>
              <span
                className="text-[17px] font-extrabold"
                style={{ letterSpacing: '-0.5px' }}
              >
                {formatCurrency(store.grandTotal)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes & Terms */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
              }}
            >
              <StickyNote className="text-white" style={{ width: '13px', height: '13px' }} />
            </div>
            <CardTitle className="text-[13px]" style={{ letterSpacing: '-0.2px' }}>Notes & Terms</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <div className="space-y-1.5">
            <Label htmlFor="paymentTerms" className="text-xs">Payment Terms</Label>
            <Textarea
              id="paymentTerms"
              placeholder="Payment terms..."
              value={store.paymentTerms}
              onChange={(e) => store.updateField('paymentTerms', e.target.value)}
              rows={2}
              className="text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bankDetails" className="text-xs">
              <Landmark className="inline h-3 w-3 mr-1" />
              Bank Details
            </Label>
            <Textarea
              id="bankDetails"
              placeholder="Bank name, account number, routing number..."
              value={store.bankDetails}
              onChange={(e) => store.updateField('bankDetails', e.target.value)}
              rows={2}
              className="text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="notes" className="text-xs">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes..."
              value={store.notes}
              onChange={(e) => store.updateField('notes', e.target.value)}
              rows={2}
              className="text-sm"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
