import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { JsonLdScript } from '@/components/seo/JsonLdScript';
import { getFAQSchema, getBreadcrumbSchema, getWebApplicationSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Invoice Generator - Create Professional Invoices Online Free',
  description:
    'Free online invoice generator — create, customize, and download professional invoices as PDF instantly. 3 templates, 8 currencies, tax & discount support. No sign-up required. Built for freelancers, small businesses, and entrepreneurs.',
  keywords: [
    'invoice generator',
    'free invoice maker',
    'create invoice online',
    'professional invoice template',
    'PDF invoice creator',
    'billing software',
    'invoice generator free',
    'online invoice tool',
    'make invoice PDF',
    'download invoice PDF',
    'invoice template',
    'custom invoice',
    'small business invoice',
    'freelancer invoice',
    'invoice maker',
    'generate invoice',
    'invoice creator online',
    'free billing tool',
    'printable invoice',
    'A4 invoice PDF',
    'invoice with logo',
    'multi currency invoice',
    'tax invoice generator',
    'GST invoice maker',
    'VAT invoice template',
    'proforma invoice',
    'commercial invoice',
    'receipt generator',
    'quote generator',
    'billing invoice app',
    'fast invoice maker',
    'no signup invoice',
    'browser invoice tool',
    'instant invoice download',
    'how to create invoice',
    'professional billing',
    'online invoice generator no signup',
    'free invoice template download',
  ],
  openGraph: {
    title: 'Invoice Generator - Create Professional Invoices Online Free',
    description:
      'Create stunning invoices in under 60 seconds. Free PDF export, 3 templates, 8 currencies, no sign-up. Trusted by freelancers and small businesses worldwide.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Invoice Generator - Create Professional Invoices Online Free',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Generator - Create Professional Invoices Online Free',
    description:
      'Create stunning invoices in under 60 seconds. Free PDF export, 3 templates, 8 currencies. No sign-up.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
};

const features = [
  {
    title: 'Instant PDF Export',
    description:
      'Generate pixel-perfect A4-sized PDF invoices in one click. Our rendering engine produces crisp, print-ready documents that look professional whether shared digitally or printed on paper.',
    icon: 'pdf',
  },
  {
    title: '3 Professional Templates',
    description:
      'Choose from Modern, Classic, and Minimal invoice designs. Each template is crafted by professional designers to convey trust and credibility to your clients, no matter your industry.',
    icon: 'template',
  },
  {
    title: '8 Currencies Supported',
    description:
      'Bill clients in their local currency with support for USD, EUR, GBP, JPY, CNY, CAD, AUD, and INR. Automatic number formatting ensures correct decimal places, symbols, and separators.',
    icon: 'currency',
  },
  {
    title: 'Live Preview',
    description:
      'See your invoice update in real-time as you type. The split-screen editor lets you edit on the left and instantly see the finished result on the right, eliminating guesswork.',
    icon: 'preview',
  },
  {
    title: 'Tax & Discount Calculations',
    description:
      'Built-in support for percentage-based tax rates and flat-amount discounts. Subtotals, tax amounts, discount deductions, and grand totals are all calculated automatically in real-time.',
    icon: 'calculate',
  },
  {
    title: 'No Sign-Up Required',
    description:
      'Start creating invoices immediately — no registration, no email verification, no credit card. Your data stays securely in your browser with automatic local storage persistence.',
    icon: 'fast',
  },
];

const steps = [
  {
    step: '01',
    title: 'Fill In Your Details',
    description:
      'Enter your business name, address, and contact information. Add your client details and line items with descriptions, quantities, and prices. Everything auto-saves as you type so you never lose progress.',
  },
  {
    step: '02',
    title: 'Customize Your Invoice',
    description:
      'Choose from Modern, Classic, or Minimal templates. Upload your company logo, set tax rates, add discounts, and configure payment terms. Switch between templates instantly to find the perfect look.',
  },
  {
    step: '03',
    title: 'Download & Share',
    description:
      'Click the Download PDF button to generate a professional A4 document. Share it via email, Slack, WhatsApp, or any messaging app. Your clients will receive a polished invoice that reflects your brand.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Freelance Designer',
    text: 'I used to spend 20 minutes formatting invoices in Word. Now it takes under a minute. The templates look incredibly professional and my clients have noticed the upgrade.',
  },
  {
    name: 'James K.',
    role: 'Small Business Owner',
    text: 'The multi-currency support is a game-changer for my international clients. I can generate invoices in EUR, GBP, or USD without any conversion hassle. Absolutely free too!',
  },
  {
    name: 'Priya R.',
    role: 'Independent Consultant',
    text: 'No sign-up, no monthly fees, no complicated setup. I opened the page, filled in my details, and had a beautiful PDF invoice ready in 60 seconds. This is how tools should work.',
  },
];

const faqs = [
  {
    question: 'Is this invoice generator really free to use?',
    answer:
      'Yes, 100% free with no hidden costs, premium tiers, or usage limits. You can create unlimited invoices, use all templates, export unlimited PDFs, and access every feature without ever paying. We sustain the service through minimal, non-intrusive advertising.',
  },
  {
    question: 'Do I need to create an account to generate invoices?',
    answer:
      'No account or sign-up is required. You can start creating your first invoice immediately upon visiting the page. Your invoice data is automatically saved in your browser\'s local storage, so you can return later and continue where you left off. No personal information is collected.',
  },
  {
    question: 'What file format are the invoices exported in?',
    answer:
      'All invoices are exported as high-quality PDF files in standard A4 paper size (210mm x 297mm). The PDFs are print-ready with proper margins, fonts, and formatting preserved. They can be emailed directly, attached to messages, or printed on any standard printer.',
  },
  {
    question: 'Can I add my company logo to the invoice?',
    answer:
      'Yes, you can upload logos for both your company and your client. Logos are stored locally in your browser as base64-encoded data, so your images never leave your device. Supported formats include PNG, JPG, and SVG, and they appear correctly sized in your invoice header.',
  },
  {
    question: 'Which currencies and tax features are supported?',
    answer:
      'The invoice generator supports 8 currencies: USD, EUR, GBP, JPY, CNY, CAD, AUD, and INR. You can apply a percentage-based tax rate (e.g., VAT, GST, sales tax) and add a flat-amount discount. All financial calculations — subtotal, tax, discount, and grand total — update automatically as you type.',
  },
  {
    question: 'Is my invoice data secure and private?',
    answer:
      'Absolutely. All invoice data is stored exclusively in your browser\'s local storage. Nothing is transmitted to any external server, database, or cloud service. Your financial information, client details, and business data remain entirely on your device under your control at all times.',
  },
  {
    question: 'Can I use this for commercial and business invoicing?',
    answer:
      'Yes, the invoice generator is designed for commercial use by freelancers, independent contractors, small businesses, agencies, and entrepreneurs. The professional templates, multi-currency support, and PDF export make it suitable for any business invoicing need, from one-time projects to recurring billing.',
  },
  {
    question: 'How do the three invoice templates differ?',
    answer:
      'The Modern template features a bold design with a gradient accent bar and rounded elements, ideal for creative industries. The Classic template uses a traditional layout with structured sections, suitable for corporate and professional services. The Minimal template offers a clean, typography-focused design perfect for consultants and agencies.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Structured Data */}
      <JsonLdScript data={getWebApplicationSchema()} />
      <JsonLdScript data={getFAQSchema(faqs)} />
      <JsonLdScript data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
      ])} />

      <SiteNav />

      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #059669 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
              100% Free — No Sign-Up Required
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                marginBottom: '20px',
              }}
            >
              Create Professional Invoices{' '}
              <br className="hidden sm:block" />
              <span style={{ background: 'linear-gradient(90deg, #34d399, #6ee7b7, #a7f3d0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                In Under 60 Seconds
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Free online invoice generator with instant PDF export, 3 professional templates, and multi-currency support. Built for freelancers, small businesses, and entrepreneurs who want to get paid faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/generator"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[15px] font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Create Your Invoice
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-semibold transition-colors"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                Invoicing Tips &amp; Guides
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
              {[
                { label: 'PDF Export', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
                { label: '3 Templates', icon: 'M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z' },
                { label: '8 Currencies', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
                { label: 'No Sign-Up', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section className="border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: '100%', label: 'Free Forever' },
                { value: '8+', label: 'Currencies' },
                { value: '3', label: 'Templates' },
                { value: '60s', label: 'First Invoice' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-1px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted-foreground)', marginTop: '2px', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: 'var(--muted)', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }}>
              FEATURES
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '10px' }}>
              Everything You Need to Get Paid
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted-foreground)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              A complete suite of invoicing tools designed for speed, professionalism, and ease of use. No bloat, no complexity — just results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl p-6 transition-all hover:shadow-md"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  }}
                >
                  {feature.icon === 'pdf' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  )}
                  {feature.icon === 'template' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  )}
                  {feature.icon === 'currency' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  )}
                  {feature.icon === 'preview' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                  {feature.icon === 'calculate' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/></svg>
                  )}
                  {feature.icon === 'fast' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  )}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section
          className="py-16 sm:py-24"
          style={{ background: 'var(--muted)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }}>
                HOW IT WORKS
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '10px' }}>
                Three Steps to Your First Invoice
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted-foreground)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                No learning curve, no complicated setup. Just fill, customize, and download.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
              {steps.map((item) => (
                <div key={item.step} className="text-center">
                  <div
                    className="inline-flex items-center justify-center mb-5"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                      color: '#34d399',
                      fontSize: '20px',
                      fontWeight: 800,
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', lineHeight: 1.7, maxWidth: '320px', margin: '0 auto' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: 'var(--muted)', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }}>
              TESTIMONIALS
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '10px' }}>
              Trusted by Professionals
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted-foreground)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Join thousands of freelancers and businesses who use our invoice generator daily.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-6"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--foreground)', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--foreground)' }}>{t.name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section
          className="py-16 sm:py-24"
          style={{ background: 'var(--muted)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '10px' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted-foreground)' }}>
                Everything you need to know about our invoice generator.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer px-6 py-5 list-none"
                    style={{ fontSize: '15px', fontWeight: 600, color: 'var(--foreground)' }}
                  >
                    {faq.question}
                    <svg
                      className="shrink-0 ml-4 transition-transform group-open:rotate-180"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--muted-foreground)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0" style={{ fontSize: '14px', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div
            className="rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative">
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                Ready to Get Paid Faster?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '460px', margin: '0 auto 28px', lineHeight: 1.7 }}>
                Create your first professional invoice right now. No sign-up, no fees, no waiting. Just results.
              </p>
              <Link
                href="/generator"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[15px] font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Open Invoice Generator
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer
        className="border-t py-10"
        style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
                Invoice Generator — Free professional invoicing for everyone.
              </p>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/generator" className="text-[13px] font-medium hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                Generator
              </Link>
              <Link href="/about" className="text-[13px] font-medium hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                About
              </Link>
              <Link href="/blog" className="text-[13px] font-medium hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                Blog
              </Link>
            </nav>
          </div>
          <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
              Invoice Generator. Create professional invoices online for free. No registration required.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
