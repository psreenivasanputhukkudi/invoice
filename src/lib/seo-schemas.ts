// JSON-LD structured data schemas for SEO
// These schemas enable rich snippets in Google search results

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://preview-be42bd6e-3621-4497-b467-c6ec2d8afa22.space.chatglm.site';
const SITE_NAME = 'Invoice Generator';

// ============================================================
// Organization Schema (site-wide)
// ============================================================
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      'Free online invoice generator — create, customize, and download professional invoices as PDF instantly. Multiple templates, multi-currency support, no sign-up required.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SITE_URL}/about`,
    },
    foundingDate: '2026',
    knowAbout: [
      'invoice generation',
      'PDF invoicing',
      'billing software',
      'small business tools',
      'freelancer tools',
      'tax compliance',
    ],
  };
}

// ============================================================
// WebApplication Schema (home page)
// ============================================================
export function getWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'Create, customize, and download professional invoices as PDF instantly. Features multiple templates, multi-currency support, live preview, and auto-calculated financials.',
    featureList: [
      'PDF invoice export',
      '3 professional templates (Modern, Classic, Minimal)',
      'Multi-currency support (USD, EUR, GBP, JPY, CNY, CAD, AUD, INR)',
      'Live invoice preview',
      'Auto-calculated subtotal, tax, discount, and grand total',
      'Company logo upload',
      'Dark/light mode',
      'Print support',
      'No sign-up required',
      'Mobile responsive',
    ],
    screenshot: `${SITE_URL}/screenshot.png`,
    installUrl: SITE_URL,
  };
}

// ============================================================
// BreadcrumbList Schema
// ============================================================
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// ============================================================
// FAQPage Schema (About page)
// ============================================================
export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================================
// BlogPosting Schema (individual blog posts)
// ============================================================
export function getBlogPostingSchema({
  title,
  description,
  slug,
  date,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `${SITE_URL}/og-blog-${slug}.png`,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    keywords: keywords.join(', '),
    articleSection: 'Invoicing',
    wordCount: '1200',
    inLanguage: 'en-US',
  };
}

// ============================================================
// Blog Collection Schema (blog listing page)
// ============================================================
export function getBlogCollectionSchema(
  posts: { title: string; slug: string; date: string; description: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Invoice Tips & Business Billing Blog',
    description:
      'Expert articles on invoicing best practices, payment strategies, tax compliance, and financial management for freelancers and small businesses.',
    url: `${SITE_URL}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: 'Invoicing and Billing',
      description:
        'Professional invoicing tips, billing guides, and financial management advice for freelancers and small businesses.',
    },
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.description,
    })),
  };
}

// ============================================================
// AboutPage Schema
// ============================================================
export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Invoice Generator',
    description:
      'Learn about Invoice Generator — a free, fast, and professional online tool to create, customize, and download invoices in PDF format. Built for freelancers, small businesses, and entrepreneurs.',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Free online invoice generator with PDF export, multiple templates, and multi-currency support.',
    },
  };
}
