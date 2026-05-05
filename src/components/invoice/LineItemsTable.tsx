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
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {items.filter((i) => i.description.trim()).length} item{items.length !== 1 ? 's' : ''} added
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addItem}
          className="h-8 text-xs rounded-lg"
        >
          <Plus className="mr-1 h-3.5 w-3.5" />
          Add Item
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-12 gap-0 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide"
            style={{
              background: 'var(--muted)',
              color: 'var(--muted-foreground)',
            }}
          >
            <div className="col-span-5">Description</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2">Unit Price</div>
            <div className="col-span-2 text-right">Total</div>
            <div className="col-span-1" />
          </div>
          {/* Rows */}
          <div className="max-h-72 overflow-y-auto">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-0 items-center px-3 py-1.5"
                  style={{
                    background: index % 2 === 0 ? 'var(--background)' : 'var(--card)',
                    borderBottom: isLast ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <div className="col-span-5 pr-2">
                    <Input
                      type="text"
                      placeholder="Item description..."
                      value={item.description}
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      className="h-8 text-sm border-0 shadow-none focus-visible:ring-0 bg-transparent px-0"
                    />
                  </div>
                  <div className="col-span-2 px-0.5">
                    <Input
                      type="number"
                      min="0"
                      step="1"
                      value={item.quantity || ''}
                      onChange={(e) =>
                        updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)
                      }
                      className="h-8 text-sm text-center border-0 shadow-none focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="col-span-2 px-0.5">
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unitPrice || ''}
                      onChange={(e) =>
                        updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)
                      }
                      className="h-8 text-sm border-0 shadow-none focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="col-span-2 px-1 text-right text-sm font-semibold" style={{ letterSpacing: '-0.3px' }}>
                    {formatCurrency(item.quantity * item.unitPrice)}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-lg text-muted-foreground/60 hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length <= 1}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-2 max-h-72 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-3 space-y-2"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <Input
                type="text"
                placeholder="Item description..."
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="text-sm h-8"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-lg text-muted-foreground/60 hover:text-destructive"
                onClick={() => removeItem(item.id)}
                disabled={items.length <= 1}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Qty</label>
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
                <label className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Price</label>
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
            <div
              className="flex items-center justify-between pt-1.5"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Total</span>
              <span className="text-sm font-bold" style={{ letterSpacing: '-0.3px' }}>
                {formatCurrency(item.quantity * item.unitPrice)}
              </span>
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full h-9 rounded-lg text-xs border-dashed"
          onClick={addItem}
        >
          <Plus className="mr-1 h-3.5 w-3.5" />
          Add Item
        </Button>
      </div>
    </div>
  );
}
