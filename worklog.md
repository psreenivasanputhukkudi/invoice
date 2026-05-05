# Worklog

## Invoice Generator Website - Complete Build

### Date: 2026-05-05

### Summary
Built a complete, production-ready Invoice Generator single-page application using Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Zustand. The app features a split-screen layout (desktop) / tabbed layout (mobile) with live invoice preview, PDF export, print support, dark/light mode, and localStorage persistence.

### Files Created
1. **`src/lib/invoice-types.ts`** - TypeScript type definitions for InvoiceData and LineItem interfaces
2. **`src/lib/invoice-store.ts`** - Zustand store with persist middleware, auto-incrementing invoice numbers, computed financial totals (subtotal, tax, discount, grand total), and full CRUD actions for invoice data. SSR-safe with `typeof window` checks.
3. **`src/lib/pdf-export.ts`** - PDF export utility using html2canvas + jsPDF with A4 page size, 2x scale for quality, and multi-page support
4. **`src/components/invoice/LogoUpload.tsx`** - Reusable logo upload component with drag-to-upload, 2MB size limit, base64 conversion, and image preview with remove button
5. **`src/components/invoice/LineItemsTable.tsx`** - Dynamic line items table with add/remove/edit rows, desktop table view and mobile card view, per-row total calculation
6. **`src/components/invoice/InvoicePreview.tsx`** - Live invoice preview rendered as a printable document with company logos, professional table layout, financial summary, and notes/terms sections. Uses forwardRef for html2canvas capture.
7. **`src/components/invoice/InvoiceForm.tsx`** - Complete invoice form with sections for sender details, client details, invoice metadata, line items, financial summary, and notes/terms
8. **`src/components/invoice/InvoiceHeader.tsx`** - Sticky header with app branding, dark/light mode toggle, reset button, print button, and PDF download button with validation

### Files Modified
1. **`src/app/page.tsx`** - Main page with responsive split-screen (desktop) / tabs (mobile) layout
2. **`src/app/layout.tsx`** - Updated metadata, added ThemeProvider from next-themes, switched to sonner Toaster
3. **`src/app/globals.css`** - Added custom scrollbar styles and print-specific CSS (hides form, shows only preview)

### Key Features
- **Real-time preview**: Invoice preview updates live as user types
- **PDF export**: Uses html2canvas + jsPDF for high-quality A4 PDF generation
- **Print support**: Print-specific CSS hides form elements
- **Dark/Light mode**: Via next-themes with system preference detection
- **Responsive**: Split-screen on desktop (lg+), tabbed Edit/Preview on mobile
- **Auto-increment invoice numbers**: `INV-0001`, `INV-0002`, etc. persisted in localStorage
- **Logo upload**: Base64 image upload with 2MB size limit
- **Financial calculations**: Auto-computed subtotal, tax (percentage), discount (flat), grand total
- **Form validation**: Validates client name and at least one item before export
- **Currency support**: 8 currencies (USD, EUR, GBP, JPY, CNY, CAD, AUD, INR)
- **Zustand persistence**: All invoice data persisted to localStorage

### Technical Decisions
- Used `typeof window` checks in store initialization for SSR compatibility
- Invoice preview uses inline styles with `fontFamily` for consistent PDF output
- Mobile uses card-based layout for line items instead of table for better UX
- Financial summary uses `Intl.NumberFormat` for proper currency formatting
- Dates formatted with `date-fns` library
