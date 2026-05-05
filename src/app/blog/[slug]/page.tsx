import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { JsonLdScript } from '@/components/seo/JsonLdScript';
import { getBlogPostingSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  keywords: string[];
  content: string[];
}

const blogPosts: Record<string, BlogPostData> = {
  'how-to-create-professional-invoice': {
    slug: 'how-to-create-professional-invoice',
    title: 'How to Create a Professional Invoice: Complete Step-by-Step Guide',
    description:
      'Learn the essential elements every professional invoice must include. This comprehensive guide covers business details, line items, payment terms, and legal requirements for creating invoices that get you paid on time.',
    category: 'Guides',
    date: 'May 3, 2026',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
    keywords: [
      'how to create invoice',
      'professional invoice guide',
      'invoice elements',
      'invoice format',
      'what to include in invoice',
      'invoice best practices',
      'create invoice step by step',
      'invoice template guide',
    ],
    content: [
      'Creating a professional invoice is one of the most important skills for any freelancer, consultant, or small business owner. An invoice is not just a request for payment — it is a legal document that represents your brand, communicates your professionalism, and directly affects how quickly you get paid. In this comprehensive guide, we will walk you through every element of a professional invoice and explain why each component matters for your business success and financial health.',
      'The foundation of every great invoice starts with a clear and unique invoice number. Invoice numbers serve as critical references for both you and your client. They help you track payments, manage your accounts receivable, and simplify tax filing at the end of the year. A good numbering system follows a consistent pattern — such as INV-0001, INV-0002, and so on — making it easy to organize and locate specific transactions in your records.',
      'Your invoice must prominently display your business information at the top. This includes your company name (or your full legal name if you are a sole proprietor), your business address, email address, and phone number. If you have a registered business number or tax ID, include that as well. Many businesses also add their logo to reinforce brand recognition and add a touch of professionalism that sets them apart from competitors.',
      'Equally important is the client or billing information section. This should clearly state the name of the person or company being billed, along with their address and contact details. If you are billing a specific department or individual within a larger organization, include both the company name and the attention line to ensure your invoice reaches the right person without delays or confusion.',
      'The line items section is the core of your invoice. Each item should have a clear description of the work performed or products delivered, the quantity, the unit price, and the calculated total. Avoid vague descriptions like "services rendered" — instead, be specific: "Website redesign — homepage and three inner pages (10 hours at $75/hr)". Detailed descriptions reduce disputes and help your client understand exactly what they are paying for, leading to faster approvals and payments.',
      'Payment terms define when and how you expect to be paid. Common terms include Net 15 (payment due within 15 days), Net 30 (within 30 days), or Due on Receipt (immediately). You should also specify your accepted payment methods — bank transfer, credit card, PayPal, or other platforms. If you offer early payment discounts (such as 2% off for payment within 10 days), state this clearly to incentivize prompt payment and improve your cash flow.',
      'Finally, do not forget to include tax information if applicable. Depending on your jurisdiction, you may need to charge sales tax, VAT, or GST. Clearly show the tax rate, the tax amount, and the grand total. Adding a brief "thank you" note and your bank account details for wire transfers can also help streamline the payment process. A well-crafted invoice not only gets you paid faster but also strengthens your client relationships and builds trust for future business.',
    ],
  },
  'invoicing-mistakes-freelancers-avoid': {
    slug: 'invoicing-mistakes-freelancers-avoid',
    title: '10 Invoicing Mistakes Freelancers Must Avoid in 2026',
    description:
      'Discover the top 10 invoicing mistakes that delay payments and hurt your professional image. Learn how to fix these common errors to improve cash flow and get paid on time.',
    category: 'Tips',
    date: 'April 28, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #1e293b, #374151)',
    keywords: [
      'invoicing mistakes',
      'freelancer invoice errors',
      'avoid invoice mistakes',
      'late invoice payments',
      'common billing errors',
      'freelancer tips',
      'invoicing best practices',
      'improve cash flow',
    ],
    content: [
      'Freelancing gives you the freedom to work on your own terms, but it also means you are your own accounting department. One of the biggest challenges freelancers face is getting paid on time, and surprisingly, most payment delays are caused by simple invoicing mistakes that are entirely preventable. Understanding these common pitfalls can transform your billing process from a source of stress into a smooth, predictable system.',
      'The single most common mistake freelancers make is sending vague or incomplete invoices. An invoice that simply says "consulting work — $500" with no breakdown, no dates, and no clear payment terms is practically an invitation for your client to delay payment while they ask clarifying questions. Every invoice should be detailed enough that your client can understand exactly what they are being billed for without needing to contact you for additional information.',
      'Another frequent error is forgetting to include payment terms. Without clearly stated due dates, many clients will simply pay when it is convenient for them — which could be weeks or even months after you delivered the work. Always specify a due date (Net 15 or Net 30 is standard) and consider adding a late fee clause that kicks in if payment is not received by the deadline. This creates urgency and sets clear expectations from the start.',
      'Many freelancers also make the mistake of not using a consistent invoice numbering system. When invoices are numbered randomly or not at all, it becomes nearly impossible to track which invoices have been paid, which are outstanding, and which may have been lost in your client\'s accounting system. A sequential numbering system like INV-0001, INV-0002, INV-0003 makes it easy for both you and your clients to keep organized records.',
      'Failing to follow up on overdue invoices is another critical mistake. Many freelancers feel awkward asking for money, but the reality is that late payments are often the result of simple oversight rather than intentional avoidance. A polite follow-up email 3-5 days after the due date can resolve most late payment situations without damaging the relationship. Automated reminders and clear communication channels make this process much easier.',
      'Other common mistakes include: not proofreading invoices before sending (typos in amounts or client names look unprofessional), using personal email addresses instead of business ones, not including tax or discount calculations clearly, sending invoices in formats that are difficult to print or process, and failing to keep copies of all sent invoices for your own records. By addressing these issues systematically, you can dramatically reduce payment delays and present a more professional image to every client you work with.',
    ],
  },
  'invoice-template-choose-right-one': {
    slug: 'invoice-template-choose-right-one',
    title: 'Modern vs Classic vs Minimal: How to Choose the Right Invoice Template',
    description:
      'Your invoice design speaks volumes about your brand. Learn when to use a modern, classic, or minimal invoice template based on your industry and client expectations.',
    category: 'Design',
    date: 'April 22, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #059669, #047857)',
    keywords: [
      'invoice template design',
      'modern invoice template',
      'classic invoice template',
      'minimal invoice template',
      'invoice design tips',
      'professional invoice look',
      'brand identity invoice',
      'invoice aesthetics',
    ],
    content: [
      'Your invoice is often the last touchpoint in a business transaction, and it leaves a lasting impression. The template you choose communicates something about your brand personality, your attention to detail, and your professionalism. Selecting the right invoice template is not just about aesthetics — it is about aligning your billing documents with your industry, your client base, and your brand identity to reinforce trust and credibility.',
      'The Modern template is ideal for creative professionals, tech companies, startups, and consultants who want to project a forward-thinking, contemporary image. Modern templates typically feature clean typography, bold accent colors, gradient elements, and structured grid layouts. They work particularly well in industries like web development, digital marketing, graphic design, and SaaS, where clients expect a polished, up-to-date aesthetic that reflects the quality of your work.',
      'The Classic template is the go-to choice for traditional businesses, law firms, accounting practices, construction companies, and any industry where formality and convention are valued. Characterized by serif fonts, clear borders, structured tables, and a no-nonsense layout, the classic invoice conveys reliability, stability, and timelessness. If your clients are corporate entities, government agencies, or established businesses, a classic template signals that you understand and respect their professional standards.',
      'The Minimal template is perfect for freelancers, solo entrepreneurs, and businesses that believe less is more. With its generous whitespace, thin typography, subtle borders, and lack of decorative elements, the minimal design puts the focus entirely on the content — your services and the payment details. This template works beautifully for writers, coaches, photographers, artisans, and any professional who wants a clean, sophisticated look without any visual clutter.',
      'When choosing a template, also consider your client\'s preferences and the context of your relationship. If you are working with a corporate procurement department, they may prefer the structured clarity of a classic template. If you are billing a creative agency, a modern template shows you speak their visual language. For long-term retainer clients, consistency matters — pick a template and stick with it so your invoices become instantly recognizable in their inbox and accounting system.',
      'The best part about using a flexible invoice generator is that you can experiment with different templates without any commitment. Try each template with your actual invoice data and see which one feels most authentic to your brand. You can even switch templates for different clients or projects if that serves your business better. The key is to ensure that whichever template you choose, all the essential information — your details, client details, line items, totals, and payment terms — remains clear, readable, and professionally presented.',
    ],
  },
  'payment-terms-get-paid-faster': {
    slug: 'payment-terms-get-paid-faster',
    title: 'Payment Terms That Actually Get You Paid Faster',
    description:
      'Struggling with late payments? Learn about Net 15 vs Net 30, early payment discounts, late fee clauses, and proven strategies to reduce your average collection time.',
    category: 'Finance',
    date: 'April 15, 2026',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    keywords: [
      'payment terms',
      'Net 15 Net 30',
      'get paid faster',
      'late payment solutions',
      'invoice payment terms',
      'early payment discount',
      'late fee clause',
      'cash flow improvement',
      'freelancer payment tips',
    ],
    content: [
      'Late payments are the silent killer of small businesses and freelancers. According to industry studies, the average freelancer waits over 20 days past their invoice due date to receive payment, and nearly 30% of all freelance invoices are paid late. This cash flow gap can force you to dip into savings, delay your own bill payments, or turn down new projects while waiting for outstanding funds. The good news is that strategic payment terms can dramatically reduce these delays.',
      'The most fundamental decision is choosing between common payment term structures. Net 15 means payment is due within 15 days of the invoice date, Net 30 gives clients 30 days, and Due on Receipt requires immediate payment upon receiving the invoice. For freelancers and small businesses, Net 15 or even shorter terms are generally preferable because they keep cash flowing steadily. Reserve Net 30 for established corporate clients who have formal accounts payable processes that simply cannot move faster.',
      'One of the most effective strategies for accelerating payments is offering an early payment discount. A common structure is "2/10 Net 30," which means the client gets a 2% discount if they pay within 10 days, but the full amount is due in 30 days. Even a small discount can be surprisingly motivating — many businesses will prioritize paying your invoice early to capture the savings, which means money in your bank account weeks sooner than it would have been otherwise.',
      'Equally important is having a clear late fee policy. State on your invoice that late payments will incur a specific penalty — typically 1-2% per month on the outstanding balance. You do not necessarily need to enforce this for every late payment, but having it in writing sets clear expectations and gives you leverage when following up on overdue invoices. Many clients will prioritize your invoice over others simply because they know there are consequences for delay.',
      'The timing of when you send your invoice also matters more than most people realize. Send your invoice immediately upon project completion or delivery, not at the end of the month with a batch of other work. Invoices sent promptly are typically processed faster because the work is fresh in everyone\'s mind. Similarly, including clear bank details and multiple payment options (bank transfer, credit card, digital wallets) removes friction from the payment process and makes it easy for clients to pay you right away.',
      'For recurring clients, consider setting up automated invoicing schedules or subscription-based billing arrangements. When clients know exactly when to expect your invoice and how much it will be, they can plan for the payment in advance. Combine this with polite but consistent follow-up reminders — a friendly email three days before the due date, another on the due date, and a more formal follow-up five days after — and you will see your average payment time drop significantly.',
    ],
  },
  'tax-invoice-requirements-by-country': {
    slug: 'tax-invoice-requirements-by-country',
    title: 'Tax Invoice Requirements You Must Know: A Country-by-Country Guide',
    description:
      'Missing mandatory invoice fields can cause compliance issues. Learn the tax invoice requirements for the US, UK, EU, Australia, India, and other major markets.',
    category: 'Compliance',
    date: 'April 8, 2026',
    readTime: '10 min read',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    keywords: [
      'tax invoice requirements',
      'invoice compliance by country',
      'US invoice requirements',
      'UK VAT invoice rules',
      'EU invoice directive',
      'Australia tax invoice',
      'India GST invoice',
      'mandatory invoice fields',
      'legal invoice requirements',
    ],
    content: [
      'Tax invoice compliance is not the most exciting topic for freelancers and business owners, but getting it wrong can result in delayed payments, tax penalties, and serious headaches during audits. Different countries have different rules about what must appear on an invoice for it to be considered legally valid for tax purposes. Understanding these requirements is essential, especially if you work with international clients or operate across multiple jurisdictions.',
      'In the United States, the IRS does not mandate a specific invoice format, but a proper invoice should include your business name and address (or EIN), the client\'s name and address, invoice number and date, a detailed description of goods or services, the total amount charged, and applicable tax. If you are a registered business, your tax ID or EIN should also appear on the invoice. While the US system is relatively flexible, keeping your invoices detailed and consistent makes tax filing significantly easier.',
      'The United Kingdom has more specific requirements, particularly for VAT-registered businesses. A VAT invoice must include your VAT registration number, the VAT rate applied to each line item, the total VAT amount, and the invoice total including VAT. For invoices over certain thresholds, additional information may be required. Since Brexit, UK VAT rules have evolved, and businesses trading with EU clients need to be aware of the specific requirements for zero-rated exports and reverse charge mechanisms.',
      'In the European Union, the VAT Directive sets minimum requirements for invoice content across all member states. Required elements include the date of issue, a unique sequential invoice number, your VAT identification number, the customer\'s VAT number (for B2B transactions within the EU), the quantity and nature of goods or services, the date of supply, the applicable VAT rate and amount, and the total amount payable. Individual member states may have additional requirements, so always check the specific rules for each country you operate in.',
      'Australia requires tax invoices for supplies exceeding $82.50 (including GST). A valid tax invoice must display the words "tax invoice" prominently, your Australian Business Number (ABN), your business name, the date of issue, a brief description of each item sold, the GST amount (either per item or total), and the total price including GST. For invoices under $1,000, fewer details are required, but including comprehensive information is always good practice.',
      'India\'s GST system has specific invoice requirements based on the type of supply and the registered status of the business. A GST invoice must include your GSTIN (GST Identification Number), the customer\'s GSTIN (if registered), place of supply, HSN/SAC codes for goods or services, the applicable tax rate, CGST, SGST, and IGST amounts, and the total invoice value. E-invoicing is mandatory for businesses above a certain turnover threshold, and non-compliance can result in penalties and input tax credit denial for your customers.',
      'Regardless of your location, the general principle is clear: more detail is always better than less. A comprehensive invoice that includes all legally required elements, clear descriptions, proper tax calculations, and your complete business information protects you in case of disputes, helps your clients process payments faster, and ensures smooth sailing during tax audits. Using a professional invoice generator that includes all standard fields helps you stay compliant without needing to memorize every regulation.',
    ],
  },
  'small-business-invoicing-best-practices': {
    slug: 'small-business-invoicing-best-practices',
    title: 'Small Business Invoicing: A Complete Best Practices Handbook',
    description:
      'A comprehensive handbook covering everything small businesses need to know about invoicing — from automation and numbering systems to record-keeping and scaling your billing process.',
    category: 'Guides',
    date: 'April 1, 2026',
    readTime: '9 min read',
    gradient: 'linear-gradient(135deg, #0891b2, #0e7490)',
    keywords: [
      'small business invoicing',
      'invoice best practices handbook',
      'business billing process',
      'invoice automation',
      'invoice numbering system',
      'invoice record keeping',
      'scale billing process',
      'business finance management',
    ],
    content: [
      'For small businesses, effective invoicing is the difference between a healthy cash flow and a constant struggle to make ends meet. Yet many small business owners treat invoicing as an afterthought — something they do quickly at the end of the month or whenever they remember. This handbook provides a complete framework for building an invoicing system that works reliably, scales with your business, and ensures you get paid consistently for the value you deliver.',
      'The first pillar of effective small business invoicing is consistency. Your invoices should follow a consistent format, use a consistent numbering system, and be sent according to a consistent schedule. When your clients receive invoices that look the same each time, include the same types of information, and arrive on a predictable schedule, they can process them faster and with fewer questions. This consistency also makes your own bookkeeping much simpler, as you can quickly identify patterns, track outstanding payments, and identify any discrepancies.',
      'Automation is the second critical pillar. Even if you are not ready for a full accounting software integration, there are simple ways to automate parts of your invoicing workflow. Use an invoice generator that saves templates so you do not have to recreate the wheel for each client. Set calendar reminders for when invoices should be sent and followed up on. Create email templates for invoice delivery, payment reminders, and thank-you notes after receiving payment. These small automations save hours each month and reduce the chance of human error.',
      'The third pillar is clear communication. Your invoice should never leave room for ambiguity. Every line item should have a clear description, every charge should be explained, and your payment terms should be stated prominently. If you are charging for time, specify the rate, hours worked, and dates. If you are billing for products, include quantities, unit prices, and any applicable taxes or discounts separately. The easier it is for your client to understand what they owe and why, the faster they will pay.',
      'Record-keeping is the fourth pillar and often the most neglected. Keep copies of every invoice you send, every payment you receive, and every follow-up communication. Organize these records by month, by client, or by project — whichever system works best for your business. Good record-keeping is invaluable during tax season, when applying for business loans, or if you ever need to resolve a payment dispute. Cloud storage or dedicated accounting software makes this easier, but even a well-organized folder system on your computer is better than nothing.',
      'As your business grows, your invoicing needs will evolve. You might start with simple invoices for a handful of clients, but as you take on more projects and hire team members, you may need more sophisticated billing — project-based invoicing, milestone payments, retainer agreements, or recurring subscriptions. Building your invoicing system with scalability in mind from the beginning means you will not need to overhaul everything when your business reaches the next level. Start with good habits, use the right tools, and treat your invoicing process as the important business function it truly is.',
    ],
  },
};

// Generate static params for all known blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Invoice Generator'],
      url: `/blog/${post.slug}`,
      images: [
        {
          url: `/og-blog-${post.slug}.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/og-blog-${post.slug}.png`],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Get other posts for "related" section
  const otherPosts = Object.values(blogPosts)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Structured Data */}
      <JsonLdScript data={getBlogPostingSchema({
        title: post.title,
        description: post.description,
        slug: post.slug,
        date: post.date,
        keywords: post.keywords,
      })} />
      <JsonLdScript data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />

      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: post.gradient }} />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-white"
                style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
              >
                {post.category}
              </span>
              <span className="text-[12px] text-white/60">{post.readTime}</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(26px, 4.5vw, 40px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.8px',
                marginBottom: '12px',
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: '540px',
              }}
            >
              {post.description}
            </p>
            <div className="mt-5 flex items-center gap-3 text-[13px] text-white/50">
              <span>Invoice Generator Team</span>
              <span>|</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '16px',
                  color: 'var(--foreground)',
                  lineHeight: 1.8,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            className="mt-12 rounded-xl p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              Put This Into Practice
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px', lineHeight: 1.6 }}>
              Create your professional invoice in minutes with our free generator.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #059669, #34d399)',
              }}
            >
              Open Invoice Generator
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        <section
          className="py-12 sm:py-16"
          style={{ background: 'var(--muted)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
              More Articles
            </h2>
            <div className="space-y-3">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-colors"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="shrink-0 w-16 h-16 rounded-lg"
                    style={{ background: related.gradient }}
                  />
                  <div className="min-w-0">
                    <h3
                      className="group-hover:underline decoration-2 underline-offset-4"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        lineHeight: 1.4,
                        marginBottom: '4px',
                      }}
                    >
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{related.date}</span>
                      <span style={{ fontSize: '12px', color: 'var(--border)' }}>|</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
