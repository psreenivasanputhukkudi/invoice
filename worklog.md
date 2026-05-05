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

---

## PDF Generation Error Fix

### Date: 2026-05-05

### Summary
Fixed PDF generation error caused by hidden elements (e.g., on mobile when preview tab is inactive) and improved html2canvas capture reliability.

### Files Modified
1. **`src/lib/pdf-export.ts`** - Complete rewrite with:
   - Hidden element detection via `isElementHidden()` that walks the DOM tree
   - Clone-based capture: temporarily clones hidden elements, appends to body for rendering, captures, then removes
   - Added `windowWidth`/`windowHeight` html2canvas options for full content capture
   - `ignoreElements` callback to skip hidden child nodes
   - Canvas validation check (zero dimensions = error)
   - Proper cleanup in `finally` block
2. **`src/components/invoice/InvoiceHeader.tsx`** - Improved error handling:
   - Added `getPreviewElement()` helper with `getElementById('invoice-preview')` fallback
   - Descriptive error messages shown via toast with longer duration
   - Better null checks before export

---

## About Page, Blog Pages & SEO

### Date: 2026-05-05

### Summary
Added About page, Blog listing page, 6 individual blog post pages, shared site-wide navigation, and comprehensive SEO metadata across all routes.

### Files Created
1. **`src/components/SiteNav.tsx`** - Shared navigation bar with logo, desktop nav links (Generator, About, Blog), active route indicator, theme toggle, and responsive mobile hamburger menu
2. **`src/app/about/page.tsx`** - About page with: hero section with gradient background, stats bar (100% Free, 8+ Currencies, 3 Templates, 0 Sign-ups), 6 feature cards, "How It Works" 3-step section, 5 FAQs, CTA banner, and footer
3. **`src/app/blog/page.tsx`** - Blog listing page with: 6 blog post cards with gradient thumbnails, category badges, date/read-time metadata, hover effects, and CTA section
4. **`src/app/blog/[slug]/page.tsx`** - Dynamic blog post page with: gradient hero header, full article content, CTA banner, 3 related posts, `generateStaticParams()` for SSG, and per-post `generateMetadata()` for unique SEO

### Blog Posts Created
1. "How to Create a Professional Invoice: Complete Step-by-Step Guide" (Guides)
2. "10 Invoicing Mistakes Freelancers Must Avoid in 2026" (Tips)
3. "Modern vs Classic vs Minimal: How to Choose the Right Invoice Template" (Design)
4. "Payment Terms That Actually Get You Paid Faster" (Finance)
5. "Tax Invoice Requirements You Must Know: A Country-by-Country Guide" (Compliance)
6. "Small Business Invoicing: A Complete Best Practices Handbook" (Guides)

### Files Modified
1. **`src/app/layout.tsx`** - Comprehensive SEO overhaul:
   - Title template: `%s | Invoice Generator`
   - 40+ SEO keywords covering invoice generation, billing, templates, PDF export, freelancing, tax compliance
   - OpenGraph, Twitter Card, robots, canonical URL metadata
   - Theme color and preconnect tags
2. **`src/components/invoice/InvoiceHeader.tsx`** - Refactored to use SiteNav component, PDF/Print/Reset action buttons moved to separate action bar below navigation
3. **`src/app/page.tsx`** - Updated sticky offsets (97px) to accommodate the new taller header (nav + action bar)

### SEO Coverage
- **Home page**: 40+ keywords in root layout (invoice generator, free invoice maker, PDF invoice, billing software, etc.)
- **About page**: 10 targeted keywords (about invoice generator, small business invoicing, freelancer invoicing, etc.)
- **Blog listing**: 14 keywords (invoice tips, billing best practices, freelancer guide, payment terms, etc.)
- **Each blog post**: 8 unique keywords per post, OpenGraph article metadata, published dates
