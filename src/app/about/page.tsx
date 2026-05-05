import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import Link from 'next/link';
import { JsonLdScript } from '@/components/seo/JsonLdScript';
import { getFAQSchema, getBreadcrumbSchema, getAboutPageSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'About Us - Invoice Generator',
  description:
    'Learn about Invoice Generator — a free, fast, and professional online tool to create, customize, and download invoices in PDF format. Built for freelancers, small businesses, and entrepreneurs.',
  keywords: [
    'about invoice generator',
    'free invoice maker',
    'online invoice tool',
    'PDF invoice creator',
    'small business invoicing',
    'freelancer invoicing',
    'professional invoice templates',
    'invoice generator features',
    'how to create invoices online',
    'billing software alternative',
  ],
  openGraph: {
    title: 'About Us - Invoice Generator',
    description:
      'Discover how Invoice Generator helps freelancers and businesses create professional invoices instantly — free, fast, and no sign-up required.',
    type: 'website',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Invoice Generator - Free Professional Invoicing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Invoice Generator',
    description:
      'Discover how Invoice Generator helps freelancers and businesses create professional invoices instantly — free, fast, and no sign-up required.',
    images: ['/og-about.png'],
  },
  alternates: {
    canonical: '/about',
  },
};

const features = [
  {
    title: 'Instant PDF Export',
    description:
      'Generate and download professional A4-sized PDF invoices in seconds. Our high-fidelity rendering ensures your invoices look pixel-perfect every time, whether you send them via email or print them for your records.',
    icon: '📄',
  },
  {
    title: 'Multiple Templates',
    description:
      'Choose from three professionally designed invoice templates — Modern, Classic, and Minimal. Each template is crafted to suit different business styles, from bold contemporary looks to clean traditional formats.',
    icon: '🎨',
  },
  {
    title: 'Smart Financial Calculations',
    description:
      'Built-in support for tax rates, flat-amount discounts, and multi-currency formatting across 8 currencies (USD, EUR, GBP, JPY, CNY, CAD, AUD, INR). All totals update in real-time as you edit your invoice.',
    icon: '🧮',
  },
  {
    title: 'No Sign-Up Required',
    description:
      'Start creating invoices immediately — no account, no registration, no hidden fees. Your data stays in your browser with localStorage persistence, so you can return to your work anytime.',
    icon: '⚡',
  },
  {
    title: 'Logo Upload Support',
    description:
      'Personalize your invoices by uploading your company logo and client logo. Images are stored as base64 data directly in your browser, ensuring privacy and instant loading without external servers.',
    icon: '🖼️',
  },
  {
    title: 'Responsive Design',
    description:
      'Works flawlessly on desktop, tablet, and mobile devices. The split-screen editor with live preview lets you see changes instantly, while the mobile-friendly tabbed interface keeps everything accessible on smaller screens.',
    icon: '📱',
  },
];

const stats = [
  { value: '100%', label: 'Free Forever' },
  { value: '8+', label: 'Currencies Supported' },
  { value: '3', label: 'Professional Templates' },
  { value: '0', label: 'Sign-Ups Required' },
];

const faqs = [
  {
    question: 'Is Invoice Generator really free?',
    answer:
      'Yes, completely free. There are no hidden charges, premium plans, or usage limits. You can create as many invoices as you need without ever paying a cent. We believe professional invoicing should be accessible to everyone.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All your invoice data is stored locally in your browser using localStorage. Nothing is sent to any server or cloud storage. Your financial information stays entirely under your control, on your device.',
  },
  {
    question: 'Can I customize the invoice templates?',
    answer:
      'Yes! You can switch between three templates (Modern, Classic, and Minimal), add your company and client logos, set custom payment terms and notes, choose from 8 currencies, and configure tax rates and discounts.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'Invoice Generator works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience with PDF export, we recommend using the latest version of Chrome or Firefox.',
  },
  {
    question: 'Can I use this for my business?',
    answer:
      'Of course! Invoice Generator is designed for freelancers, independent contractors, small businesses, startups, and anyone who needs to create professional invoices quickly. There are no restrictions on commercial use.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Structured Data */}
      <JsonLdScript data={getFAQSchema(faqs)} />
      <JsonLdScript data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ])} />
      <JsonLdScript data={getAboutPageSchema()} />

      <SiteNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #059669 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
              Free &amp; Open Invoice Tool
            </div>
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '16px',
              }}
            >
              Professional Invoices,
              <br />
              <span style={{ background: 'linear-gradient(90deg, #34d399, #6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Zero Hassle
              </span>
            </h1>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Invoice Generator is a free, browser-based tool that lets you create, customize, and download professional invoices in seconds. Built for freelancers, small businesses, and entrepreneurs who value their time.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                Start Creating Invoices
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-1px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted-foreground)', marginTop: '4px', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Everything You Need
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted-foreground)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
              A complete set of tools to create invoices that look professional and get you paid faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-6"
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
                    background: 'var(--muted)',
                    fontSize: '20px',
                  }}
                >
                  {feature.icon}
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

        {/* How It Works */}
        <section
          className="py-16 sm:py-20"
          style={{ background: 'var(--muted)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
                How It Works
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted-foreground)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
                Create your first professional invoice in under a minute.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Fill In Details', desc: 'Enter your business info, client details, line items, and any notes or payment terms. Everything auto-saves as you type.' },
                { step: '02', title: 'Choose a Template', desc: 'Pick from Modern, Classic, or Minimal template. Preview your invoice live and watch it update in real-time as you make changes.' },
                { step: '03', title: 'Download PDF', desc: 'Click Download PDF to generate a crisp, print-ready A4 document. Share it via email, messaging apps, or print it directly from your browser.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div
                    className="inline-flex items-center justify-center mb-4"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: 800,
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted-foreground)' }}>
              Got questions? We have answers.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl p-6"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px' }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div
            className="rounded-2xl p-8 sm:p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Ready to Create Your First Invoice?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '420px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              No sign-up. No fees. Just professional invoices in seconds.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #059669, #34d399)',
              }}
            >
              Open Invoice Generator
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
              Invoice Generator — Free professional invoicing for everyone.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-[13px] hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                About
              </Link>
              <Link href="/blog" className="text-[13px] hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                Blog
              </Link>
              <Link href="/" className="text-[13px] hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                Generator
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
