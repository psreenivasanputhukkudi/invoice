import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Invoice Tips, Guides & Business Billing Advice',
  description:
    'Explore our blog for expert tips on creating professional invoices, billing best practices, tax advice for freelancers, payment terms strategies, and small business financial management.',
  keywords: [
    'invoice tips',
    'invoicing best practices',
    'how to write an invoice',
    'freelancer invoicing guide',
    'small business billing tips',
    'invoice templates guide',
    'payment terms advice',
    'late payment solutions',
    'tax invoice requirements',
    'professional billing strategies',
    'invoice blog',
    'business finance tips',
    'get paid faster',
    'invoice mistakes to avoid',
  ],
  openGraph: {
    title: 'Blog - Invoice Tips, Guides & Business Billing Advice',
    description:
      'Expert articles on invoicing, billing, and financial management for freelancers and small businesses.',
    type: 'website',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-create-professional-invoice',
    title: 'How to Create a Professional Invoice: Complete Step-by-Step Guide',
    excerpt:
      'Learn the essential elements every professional invoice must include, from business details and line items to payment terms and legal requirements. This comprehensive guide covers everything you need to know to create invoices that get you paid on time.',
    category: 'Guides',
    date: 'May 3, 2026',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
  },
  {
    slug: 'invoicing-mistakes-freelancers-avoid',
    title: '10 Invoicing Mistakes Freelancers Must Avoid in 2026',
    excerpt:
      'From vague descriptions to missing payment terms, these common invoicing mistakes can delay your payments by weeks. Discover the top 10 errors freelancers make and learn how to fix them to improve your cash flow significantly.',
    category: 'Tips',
    date: 'April 28, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #1e293b, #374151)',
  },
  {
    slug: 'invoice-template-choose-right-one',
    title: 'Modern vs Classic vs Minimal: How to Choose the Right Invoice Template',
    excerpt:
      'Your invoice design speaks volumes about your brand. Learn when to use a modern gradient template, a classic formal layout, or a minimal design depending on your industry, client type, and business personality.',
    category: 'Design',
    date: 'April 22, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #059669, #047857)',
  },
  {
    slug: 'payment-terms-get-paid-faster',
    title: 'Payment Terms That Actually Get You Paid Faster',
    excerpt:
      'Struggling with late payments? The right payment terms can dramatically reduce your average collection time. Learn about Net 15 vs Net 30, early payment discounts, late fee clauses, and other strategies professionals use to get paid promptly.',
    category: 'Finance',
    date: 'April 15, 2026',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
  },
  {
    slug: 'tax-invoice-requirements-by-country',
    title: 'Tax Invoice Requirements You Must Know: A Country-by-Country Guide',
    excerpt:
      'Tax invoice regulations vary significantly across countries. Missing required elements can cause compliance issues and delayed payments. This guide covers the mandatory fields for invoices in the US, UK, EU, Australia, India, and more.',
    category: 'Compliance',
    date: 'April 8, 2026',
    readTime: '10 min read',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
  },
  {
    slug: 'small-business-invoicing-best-practices',
    title: 'Small Business Invoicing: A Complete Best Practices Handbook',
    excerpt:
      'Whether you are a sole proprietor or running a growing team, solid invoicing practices are the backbone of healthy cash flow. This handbook covers automation, numbering systems, record-keeping, and scaling your billing process as your business grows.',
    category: 'Guides',
    date: 'April 1, 2026',
    readTime: '9 min read',
    gradient: 'linear-gradient(135deg, #0891b2, #0e7490)',
  },
];

const categoryColors: Record<string, string> = {
  Guides: '#0f172a',
  Tips: '#059669',
  Design: '#7c3aed',
  Finance: '#d97706',
  Compliance: '#dc2626',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'var(--muted)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--muted-foreground)',
              }}
            >
              Resources &amp; Insights
            </div>
            <h1
              style={{
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                fontWeight: 800,
                color: 'var(--foreground)',
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '12px',
              }}
            >
              Invoice Tips &amp;
              <br />
              Business Billing Guide
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--muted-foreground)',
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Expert articles on invoicing best practices, payment strategies, tax compliance, and financial management for freelancers and small businesses.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl overflow-hidden transition-all"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Thumbnail */}
                <div
                  className="h-36 relative overflow-hidden"
                  style={{ background: post.gradient }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold text-white"
                    style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
                  >
                    {post.category}
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{post.date}</span>
                    <span style={{ fontSize: '12px', color: 'var(--border)' }}>|</span>
                    <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{post.readTime}</span>
                  </div>
                  <h2
                    className="group-hover:underline decoration-2 underline-offset-4"
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                      lineHeight: 1.4,
                      letterSpacing: '-0.3px',
                      marginBottom: '8px',
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                    {post.excerpt.slice(0, 140)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div
            className="rounded-2xl p-8 sm:p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Start Creating Professional Invoices
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '420px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Put these tips into practice with our free invoice generator.
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
