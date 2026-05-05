'use client';

import { useInvoiceStore } from '@/lib/invoice-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LogoUpload } from './LogoUpload';
import { LineItemsTable } from './LineItemsTable';
import { DollarSign, Percent, Tag } from 'lucide-react';

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
    <div className="space-y-6">
      {/* Sender Details */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">From (Sender)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LogoUpload
              logo={store.senderLogo}
              onLogoChange={(b64) => store.setLogo('sender', b64)}
              label="Company Logo"
            />
            <div className="sm:col-span-1" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="senderName">Company Name</Label>
              <Input
                id="senderName"
                placeholder="Your Company Name"
                value={store.senderName}
                onChange={(e) => store.updateField('senderName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senderEmail">Email</Label>
              <Input
                id="senderEmail"
                type="email"
                placeholder="email@company.com"
                value={store.senderEmail}
                onChange={(e) => store.updateField('senderEmail', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="senderAddress">Address</Label>
            <Textarea
              id="senderAddress"
              placeholder="Full address..."
              value={store.senderAddress}
              onChange={(e) => store.updateField('senderAddress', e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senderPhone">Phone</Label>
            <Input
              id="senderPhone"
              placeholder="+1 (555) 000-0000"
              value={store.senderPhone}
              onChange={(e) => store.updateField('senderPhone', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Bill To (Client)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LogoUpload
              logo={store.clientLogo}
              onLogoChange={(b64) => store.setLogo('client', b64)}
              label="Client Logo"
            />
            <div className="sm:col-span-1" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                placeholder="Client Company Name"
                value={store.clientName}
                onChange={(e) => store.updateField('clientName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Email</Label>
              <Input
                id="clientEmail"
                type="email"
                placeholder="client@email.com"
                value={store.clientEmail}
                onChange={(e) => store.updateField('clientEmail', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientAddress">Address</Label>
            <Textarea
              id="clientAddress"
              placeholder="Client address..."
              value={store.clientAddress}
              onChange={(e) => store.updateField('clientAddress', e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientPhone">Phone</Label>
            <Input
              id="clientPhone"
              placeholder="+1 (555) 000-0000"
              value={store.clientPhone}
              onChange={(e) => store.updateField('clientPhone', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Invoice Metadata */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={store.invoiceNumber}
                onChange={(e) => store.updateField('invoiceNumber', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoiceDate">Invoice Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={store.invoiceDate}
                onChange={(e) => store.updateField('invoiceDate', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={store.dueDate}
                onChange={(e) => store.updateField('dueDate', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                id="currency"
                value={store.currency}
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
        <CardContent className="pt-6">
          <LineItemsTable />
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Financial Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="taxRate">
                <Percent className="inline h-3.5 w-3.5 mr-1" />
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discount">
                <DollarSign className="inline h-3.5 w-3.5 mr-1" />
                Discount (Flat Amount)
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
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-2 bg-muted/30 rounded-lg p-4">
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
            <div className="flex justify-between text-base font-bold">
              <span>Grand Total</span>
              <span>{formatCurrency(store.grandTotal)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes & Terms */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Notes & Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="paymentTerms">Payment Terms</Label>
            <Textarea
              id="paymentTerms"
              placeholder="Payment terms..."
              value={store.paymentTerms}
              onChange={(e) => store.updateField('paymentTerms', e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bankDetails">Bank Details</Label>
            <Textarea
              id="bankDetails"
              placeholder="Bank name, account number, routing number..."
              value={store.bankDetails}
              onChange={(e) => store.updateField('bankDetails', e.target.value)}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes..."
              value={store.notes}
              onChange={(e) => store.updateField('notes', e.target.value)}
              rows={2}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
