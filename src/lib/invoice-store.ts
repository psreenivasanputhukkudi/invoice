import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { InvoiceData, LineItem } from './invoice-types';

function generateInvoiceNumber(): string {
  if (typeof window === 'undefined') return 'INV-0001';
  const lastNum = parseInt(localStorage.getItem('invoice-last-number') || '0', 10);
  const nextNum = lastNum + 1;
  localStorage.setItem('invoice-last-number', nextNum.toString());
  return `INV-${nextNum.toString().padStart(4, '0')}`;
}

function createEmptyItem(): LineItem {
  return {
    id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2),
    description: '',
    quantity: 1,
    unitPrice: 0,
  };
}

const today = typeof window !== 'undefined'
  ? new Date().toISOString().split('T')[0]
  : '';

const dueDate = typeof window !== 'undefined'
  ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  : '';

interface InvoiceStore extends InvoiceData {
  // Computed
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  grandTotal: number;

  // Actions
  updateField: <K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) => void;
  addItem: () => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, field: keyof LineItem, value: string | number) => void;
  setLogo: (type: 'sender' | 'client', base64: string) => void;
  resetInvoice: () => void;
}

export const useInvoiceStore = create<InvoiceStore>()(
  persist(
    (set) => {
      const computeTotals = (state: InvoiceData) => {
        const subtotal = state.items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0
        );
        const taxAmount = subtotal * (state.taxRate / 100);
        const discountAmount = Math.min(state.discount, subtotal + taxAmount);
        const grandTotal = Math.max(0, subtotal + taxAmount - discountAmount);
        return { subtotal, taxAmount, discountAmount, grandTotal };
      };

      const initialState: InvoiceData = {
        senderName: '',
        senderAddress: '',
        senderEmail: '',
        senderPhone: '',
        senderLogo: '',
        clientName: '',
        clientAddress: '',
        clientEmail: '',
        clientPhone: '',
        clientLogo: '',
        invoiceNumber: 'INV-0001',
        invoiceDate: today,
        dueDate: dueDate,
        items: [createEmptyItem()],
        taxRate: 0,
        discount: 0,
        currency: 'USD',
        notes: '',
        paymentTerms: 'Payment is due within 30 days of invoice date.',
        bankDetails: '',
      };

      const initialTotals = computeTotals(initialState);

      return {
        ...initialState,
        ...initialTotals,

        updateField: (key, value) => {
          set((state) => {
            const newData = { ...state, [key]: value };
            const totals = computeTotals(newData as unknown as InvoiceData);
            return { ...newData, ...totals };
          });
        },

        addItem: () => {
          set((state) => {
            const newItems = [...state.items, createEmptyItem()];
            const newData = { ...state, items: newItems };
            const totals = computeTotals(newData as unknown as InvoiceData);
            return { ...newData, ...totals };
          });
        },

        removeItem: (id) => {
          set((state) => {
            const newItems = state.items.filter((item) => item.id !== id);
            if (newItems.length === 0) newItems.push(createEmptyItem());
            const newData = { ...state, items: newItems };
            const totals = computeTotals(newData as unknown as InvoiceData);
            return { ...newData, ...totals };
          });
        },

        updateItem: (id, field, value) => {
          set((state) => {
            const newItems = state.items.map((item) =>
              item.id === id ? { ...item, [field]: value } : item
            );
            const newData = { ...state, items: newItems };
            const totals = computeTotals(newData as unknown as InvoiceData);
            return { ...newData, ...totals };
          });
        },

        setLogo: (type, base64) => {
          const key = type === 'sender' ? 'senderLogo' : 'clientLogo';
          set({ [key]: base64 });
        },

        resetInvoice: () => {
          const newInvoiceNumber = generateInvoiceNumber();
          const freshState: InvoiceData = {
            senderName: '',
            senderAddress: '',
            senderEmail: '',
            senderPhone: '',
            senderLogo: '',
            clientName: '',
            clientAddress: '',
            clientEmail: '',
            clientPhone: '',
            clientLogo: '',
            invoiceNumber: newInvoiceNumber,
            invoiceDate: today,
            dueDate: dueDate,
            items: [createEmptyItem()],
            taxRate: 0,
            discount: 0,
            currency: 'USD',
            notes: '',
            paymentTerms: 'Payment is due within 30 days of invoice date.',
            bankDetails: '',
          };
          const totals = computeTotals(freshState);
          set({ ...freshState, ...totals });
        },
      };
    },
    {
      name: 'invoice-storage',
      partialize: (state) => ({
        senderName: state.senderName,
        senderAddress: state.senderAddress,
        senderEmail: state.senderEmail,
        senderPhone: state.senderPhone,
        senderLogo: state.senderLogo,
        clientName: state.clientName,
        clientAddress: state.clientAddress,
        clientEmail: state.clientEmail,
        clientPhone: state.clientPhone,
        clientLogo: state.clientLogo,
        invoiceNumber: state.invoiceNumber,
        invoiceDate: state.invoiceDate,
        dueDate: state.dueDate,
        items: state.items,
        taxRate: state.taxRate,
        discount: state.discount,
        currency: state.currency,
        notes: state.notes,
        paymentTerms: state.paymentTerms,
        bankDetails: state.bankDetails,
      }),
      onRehydrateStorage: () => {
        return (_state, error) => {
          if (!error && _state && !_state.invoiceNumber) {
            _state.invoiceNumber = generateInvoiceNumber();
          }
        };
      },
    }
  )
);
