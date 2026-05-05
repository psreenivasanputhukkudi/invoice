export type InvoiceTemplate = 'modern' | 'classic' | 'minimal';

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceData {
  // Template
  template: InvoiceTemplate;

  // Sender
  senderName: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
  senderLogo: string; // base64

  // Client
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;
  clientLogo: string; // base64

  // Metadata
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;

  // Items
  items: LineItem[];

  // Financial
  taxRate: number; // percentage
  discount: number; // flat amount
  currency: string;

  // Notes
  notes: string;
  paymentTerms: string;
  bankDetails: string;
}
