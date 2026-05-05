import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getOrganizationSchema } from "@/lib/seo-schemas";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://preview-be42bd6e-3621-4497-b467-c6ec2d8afa22.space.chatglm.site'
  ),
  title: {
    default: "Invoice Generator - Create Professional Invoices Online Free",
    template: "%s | Invoice Generator",
  },
  description:
    "Free online invoice generator — create, customize, and download professional invoices as PDF instantly. Multiple templates, multi-currency support, no sign-up required. Built for freelancers, small businesses, and entrepreneurs.",

  authors: [{ name: "Invoice Generator" }],
  creator: "Invoice Generator",
  publisher: "Invoice Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Invoice Generator",
    title: "Invoice Generator - Create Professional Invoices Online Free",
    description:
      "Free online invoice generator with PDF export, multiple templates, and multi-currency support. No sign-up required. Create your first invoice in under a minute.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invoice Generator - Create Professional Invoices Online Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Generator - Create Professional Invoices Online Free",
    description:
      "Free online invoice generator with PDF export, multiple templates, and multi-currency support. No sign-up required.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Organization structured data (site-wide) */}
        <JsonLdScript data={getOrganizationSchema()} />
        {/* WebApplication structured data is rendered on the home page */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
