'use client';

import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useInvoiceStore } from '@/lib/invoice-store';

export function LineItemsTable() {
  const items = useInvoiceStore((s) => s.items);
  const addItem = useInvoiceStore((s) => s.addItem);
  const removeItem = useInvoiceStore((s) => s.removeItem);
  const updateItem = useInvoiceStore((s) => s.updateItem);
  const currency = useInvoiceStore((s) => s.currency);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Line Items</h3>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="mr-1 h-4 w-4" />
          Add Item
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-lg border border-border overflow-hidden">
        <div className="grid grid-cols-12 gap-0 bg-muted/50 px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          <div className="col-span-5">Description</div>
          <div className="col-span-2">Qty</div>
          <div className="col-span-2">Unit Price</div>
          <div className="col-span-2 text-right">Total</div>
          <div className="col-span-1" />
        </div>
        <div className="max-h-96 overflow-y-auto">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-12 gap-0 items-center px-4 py-2 border-t border-border ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
              }`}
            >
              <div className="col-span-5 pr-2">
                <Input
                  type="text"
                  placeholder="Item description..."
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <div className="col-span-2 px-1">
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={item.quantity || ''}
                  onChange={(e) =>
                    updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)
                  }
                  className="h-8 text-sm text-center"
                />
              </div>
              <div className="col-span-2 px-1">
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice || ''}
                  onChange={(e) =>
                    updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)
                  }
                  className="h-8 text-sm"
                />
              </div>
              <div className="col-span-2 px-1 text-right text-sm font-medium">
                {formatCurrency(item.quantity * item.unitPrice)}
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive"
                  onClick={() => removeItem(item.id)}
                  disabled={items.length <= 1}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3 max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="rounded-lg border border-border p-3 space-y-2 bg-card"
          >
            <div className="flex items-start justify-between gap-2">
              <Input
                type="text"
                placeholder="Item description..."
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="text-sm"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeItem(item.id)}
                disabled={items.length <= 1}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Quantity</label>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={item.quantity || ''}
                  onChange={(e) =>
                    updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)
                  }
                  className="h-8 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Unit Price</label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice || ''}
                  onChange={(e) =>
                    updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)
                  }
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <div className="text-right text-sm font-semibold">
              Total: {formatCurrency(item.quantity * item.unitPrice)}
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full"
          onClick={addItem}
        >
          <Plus className="mr-1 h-4 w-4" />
          Add Item
        </Button>
      </div>
    </div>
  );
}
